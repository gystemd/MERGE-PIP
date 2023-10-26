import { Application, Request, Response } from "express";
import axios from 'axios'
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";
import { agent } from '../veramo/setup.js';

type Dictionary = Record<string, [{ attribute: string, dataType: string}]>;
const dictionary: Dictionary =
{
    "https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/json-schema.json": [
        {
            attribute: "credentialSubject.achievement",
            dataType: "http://www.w3.org/2001/XMLSchema#string"
        }
    ]
};

function buildRequest(resource: string, dictionary: any, vp: any) {

    const vc = JSON.parse(vp.verifiableCredential[0]);
    let request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
        + `CombinedDecision="false" `
        + `ReturnPolicyIdList="true">`
        + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
        + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
        + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">` + resource + `</AttributeValue>`
        + `</Attribute>`
        + `</Attributes>`

    Object.keys(dictionary).forEach((key: string) => {

        const attributesArray = dictionary[key];
        request += `<Attributes Category="` + key + `">`;

        attributesArray.forEach((element: any) => {

            const path = element.attribute.split(".");
            let value = vc;
            path.forEach((key: string) => {
                value = value[key];
            });
            request += `<Attribute AttributeId="` + element.attribute
                + `" IncludeInResult="true" `
                + `Issuer="` + vc.issuer + `" `
                + `>`
                + `<AttributeValue `
                + `DataType="` + element.dataType + `" `
                + `>`
                + value + `</AttributeValue>`
                + `</Attribute>`
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

        const args: IVerifyPresentationEIP712Args = {
            presentation: vp
        }

        const result = await agent.verifyPresentation(args);
        if (!result.verified) {
            return res.status(400).send("Invalid VP");
        }

        const vc = await JSON.parse(vp.verifiableCredential[0]);
        const request = buildRequest("MMA", dictionary, vp);
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });

        return res.status(200).send({ message: "VP verified", authorized: response.data });
    });

};
