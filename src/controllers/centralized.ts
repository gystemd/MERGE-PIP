

import { Application, Request, Response } from "express";
import axios from 'axios'

export const loadCentralizedApiEndpoints = (app: Application): void => {
    app.post("/sendCentralized", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const resource: string = req.body.resource;
        const subjectId: string = req.body.subjectId;
        const request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
            + `CombinedDecision="false" `
            + `ReturnPolicyIdList="true">`
            + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="false">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + subjectId + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `</Request>`;
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.data) {
            return res.status(200).send({ message: "Access granted" });
        }
    });

};
