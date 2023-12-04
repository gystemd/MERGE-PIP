import { Application, Request, Response } from "express";
import axios from 'axios'
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";
import { agent } from '../veramo/setup.js';

type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;
type resourcesList = Record<string, attributesList>;
let requestCount = 0;
const resources: resourcesList =
{
    "research-paper-computer-science": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14":
        {
            "#0": [
                {
                    attribute: "credentialSubject.degreeLevel",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "PhD"
                },
                {
                    attribute: "credentialSubject.degreeField",
                    dataType: "http://www.w3.org/2001/XMLSchema#string",
                    value: "Computer Science"
                }
            ]
        }
    },
    "course-material": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14":
        {
            "#0": [{
                attribute: "credentialSubject.degreeLevel",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "PhD"
            }]
        }
    },
    "conference": {
        "https://api.npoint.io/92e56cd3a26b31bfcd14": // degree credential
        {
            "#0": [{
                attribute: "credentialSubject.degreeLevel",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "PhD"
            }]
        },
        "https://api.npoint.io/292a45521e356ed0174b": // vaccine credential
        {
            "#0": [{
                attribute: "credentialSubject.vaccineType",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Full"
            }]
        }
    },
    "coding.course": {
        "https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/json-schema.json":
        {
            "#0": [{
                attribute: "credentialSubject.achievement",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Certified Solidity Developer 2"
            }],
            "#1": [{
                attribute: "credentialSubject.achievement",
                dataType: "http://www.w3.org/2001/XMLSchema#string",
                value: "Certified Java Developer"
            }]
        }
    }
};


function buildRequest(resource: string, vp: any) {
    const attributes: attributesList = resources[resource];
    let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
        + `CombinedDecision="false" `
        + `ReturnPolicyIdList="true">`
        + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
        + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
        + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
        + `</Attribute>`
        + `</Attributes>`

    Object.keys(attributes).forEach((categoryKey) => {

        request += `<Attributes Category="` + categoryKey + `">`;
        const category = attributes[categoryKey];
        const keys = Object.keys(category);
        Object.keys(category).forEach((credentialKey) => {

            const credential = category[credentialKey];
            credential.forEach((attributeEntry) => {

                const path = attributeEntry.attribute.split(".");
                const vc = JSON.parse(vp.verifiableCredential[parseInt(credentialKey.replace("#", ""))]);
                let value = vc;
                path.forEach((key: string) => {
                    value = value[key];
                });
                request += `<Attribute AttributeId="` + credentialKey + "." + attributeEntry.attribute
                    + `" IncludeInResult="true" `
                    + `Issuer="` + vc.issuer + `" `
                    + `>`
                    + `<AttributeValue `
                    + `DataType="` + attributeEntry.dataType + `"`
                    + `>`
                    + value + `</AttributeValue>`
                    + `</Attribute>`
            });

        });
        request += `</Attributes>`
    });

    request += `</Request>`;
    return request;
}

export const loadApiEndpoints = (app: Application): void => {
    app.post("/send", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now
        const resource: string = req.body.resource;
        const args: IVerifyPresentationEIP712Args = {
            presentation: vp
        }

        const result = await agent.verifyPresentation(args);
        if (!result.verified) {
            console.log("VP not verified");
            return res.status(400).send("Invalid VP");
        }

        if(!resources[resource]) {
            return res.status(400).send("Invalid resource");
        }

        const request = buildRequest(resource, vp);
        console.log(resource);
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });

        return res.status(200).send({ message: "VP verified", authorized: response.data });
    });

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

        requestCount++;
        console.log(requestCount);
        if (response.data) {
            return res.status(200).send({ message: "Access granted" });
        }
    });

};
