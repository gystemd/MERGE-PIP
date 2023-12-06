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

    clearData("measurements/pip.json");
    clearData("measurements/pdp.json");

    app.post("/send", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const resource: string = req.body.resource;

        if (!resources[resource]) {
            return res.status(400).send("Invalid resource");
        }
        const begin = Date.now();
        const verified = await verifyPresentation(vp);
        if (!verified) {
            console.log("VP not verified");
            return res.status(400).send("Invalid VP");
        }
        const request = buildRequest(resource, vp);
        const end = Date.now();
        const time = end - begin;
        console.log("PIP executed in " + time + "ms");
        updateData(time, "measurements/pip.json");

        const begin2 = Date.now();
        const response = await axios.post('http://localhost:8080/evaluate', request, { headers: { 'Content-Type': 'application/json' } });
        const end2 = Date.now();
        const time2 = end2 - begin2;
        console.log("PDP executed in " + time2 + "ms");
        updateData(time2, "measurements/pdp.json");

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
