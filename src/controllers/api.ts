import { Application, Request, Response } from "express";
import axios from 'axios'
import { getAttributes, verifyPresentation } from "../PIP/pip.js";
import { resources } from "../db.js";

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
        const request = buildRequest(resource, vp);
        const response = await axios.post('http://localhost:8080/evaluate', request, { headers: { 'Content-Type': 'application/json' } });
        return res.status(200).send({ message: "VP verified", authorized: response.data });
    });
};
