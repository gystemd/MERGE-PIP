import { Application, Request, Response } from "express";
import axios from 'axios'
import { getAttributes, verifyPresentation } from "../PIP/pip.js";
import { resources } from "../db.js";
import fs from 'fs';
import path from "path";

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

function updateData(val: any, fileName:string){
    const data = fs.readFileSync(fileName, 'utf8');
    const json = JSON.parse(data.toString());
    const array_measurements = json.measurements;
    array_measurements.push(val);
    fs.writeFileSync(fileName, JSON.stringify(json), 'utf8');
}

function clearData(fileName:string){
    const data = fs.readFileSync(fileName, 'utf8');
    const json = JSON.parse(data.toString());
    json.measurements = [];
    fs.writeFileSync(fileName, JSON.stringify(json), 'utf8');
}

export const loadApiEndpoints = (app: Application): void => {

    clearData("measurements/pdp.json");
    clearData("measurements/pip-verification.json");
    clearData("measurements/pip-extraction.json");
    clearData("measurements/global.json");

    app.post("/send", async (req: Request, res: Response) => {
        const begin0 = Date.now();

        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const resource: string = req.body.resource;

        if (!resources[resource]) {
            return res.status(400).send("Invalid resource");
        }

        let begin = Date.now();
        const verified = await verifyPresentation(vp);
        if (!verified) {
            console.log("VP not verified");
            return res.status(400).send("Invalid VP");
        }
        let end = Date.now();
        let time = end - begin;
        updateData(time, "measurements/pip-verification.json");

        begin = Date.now();
        const request = buildRequest(resource, vp);
        end = Date.now();
        time = end - begin;
        updateData(time, "measurements/pip-extraction.json");

        begin = Date.now();
        const response = await axios.post('http://localhost:8080/evaluate', request, { headers: { 'Content-Type': 'application/json' } });
        end = Date.now();
        time = end - begin;
        updateData(time, "measurements/pdp.json");
        const end0 = Date.now();
        const time0 = end0 - begin0;
        console.log("Time: " + time0 + "ms");
        updateData(time0, "measurements/global.json");
        return res.status(200).send({ message: "VP verified", authorized: response.data });
    });

    app.post("/verify", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const verified = await verifyPresentation(vp);
        if (!verified) {
            console.log("VP not verified");
            return res.status(400).send("Invalid VP");
        }
        console.log("VP verified");
        return res.status(200).send({ message: "VP verified" });
    });

};
