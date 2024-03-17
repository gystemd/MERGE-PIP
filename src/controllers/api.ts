import { Application, Request, Response } from "express";
import axios from 'axios'
import { getAttributes, verifyPresentation } from "../PIP/pip.js";
import { resources } from "../db.js";
import process from 'process';

function buildRequest(resource: string, vp: any) {
    let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
        + `CombinedDecision="false" `
        + `ReturnPolicyIdList="true">`
        + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
        + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
        + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
        + `</Attribute>`
        + `</Attributes>`
    request += getAttributes(vp, resource);
    request += `</Request>`;
    return request;
}

export const loadApiEndpoints = (app: Application): void => {
    app.post("/send", async (req: Request, res: Response) => {

        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const resource: string = req.body.resource;
        if (!resources[resource]) {
            return res.status(400).send("Invalid resource");
        }

        const verified = await verifyPresentation(vp);
        if (!verified) {
            console.log("VP not verified");
            return res.status(400).send("Invalid VP");
        }
        console.log("verified: " + verified);

        let begin = Date.now();
        const request = buildRequest(resource, vp);
        let end = Date.now();
        let attribute_time = end - begin;

        begin = Date.now();
        const response = await axios.post('http://localhost:8080/evaluate', request, { headers: { 'Content-Type': 'application/json' } });
        end = Date.now();
        let pdp_time = end - begin;

        let total_did_time = parseInt(process.env.VC_DID_TIME??'0') + parseInt(process.env.DID_TIME??'0');
        let measurements = {
            attribute_time: attribute_time,
            pdp_time: pdp_time,
            verification_time: process.env.VERIFICATION_TIME,
            did_time: total_did_time
        };
        return res.status(200).send({ message: "VP verified", authorized: response.data, measurements: measurements });
    });

    app.post("/verify", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const verified = await verifyPresentation(vp);
        if (!verified) {
            console.log("VP not verified");
            return res.status(400).send({message: "Invalid VP", verified: verified} );
        }
        console.log("VP verified");
        return res.status(200).send({ message: "VP verified", verified: verified });
    });

};
