import { Application, Request, Response } from "express";
import { verifyPresentation } from 'did-jwt-vc'
import { getResolver } from 'ethr-did-resolver'
import CoursesData from "../../data/courses.json" assert { type: "json" };
import { CredentialPlugin } from '@veramo/credential-w3c'
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'
import { createAgent, IResolver } from '@veramo/core'
import axios from 'axios'
import { IVerifyPresentationEIP712Args, CredentialIssuerEIP712, } from "@veramo/credential-eip712";
import jsonld, { JsonLdDocument } from 'jsonld';
const providerConfig = { name: '0x539', rpcUrl: 'http://localhost:8545', registry: '0xf48263bfc8237ae29480280083c63ba2c446eafa' }

const agent = createAgent<IResolver>({
    plugins: [
        new DIDResolverPlugin({
            resolver: new Resolver({
                ...ethrDidResolver(providerConfig),
                ...webDidResolver(),
            }),
        }),
        new CredentialPlugin(),
        new CredentialIssuerEIP712()
    ],
});

export const loadApiEndpoints = (app: Application): void => {
    app.post("/send", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp: any = req.body.vp; // assuming any type for now

        const expanded = await jsonld.expand(JSON.parse(vp.verifiableCredential[0]));
        console.log(expanded);
        console.log(expanded[0]["@type"]);
        const document = {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "John Doe",
            "jobTitle": "Software Engineer",
            "telephone": "(123) 456-7890",
            "url": "https://johndoe.com"
        };

        const ld = await jsonld.expand(document)
        console.log(ld);
        const args: IVerifyPresentationEIP712Args = {
            presentation: vp
        }
        const result = await agent.verifyPresentation(args);
        if (!result.verified) {
            return res.status(400).send("Invalid VP");
        }

        return res.status(200).send({ message: "VP verified" });
    });

    app.post("/test", async (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");

        const request: string = `<Request xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17" `
            + `CombinedDecision="false" `
            + `ReturnPolicyIdList="true">`
            + `<Attributes Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">bob</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `<Attributes Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource">`
            + `<Attribute AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" IncludeInResult="true">`
            + `<AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">MMA</AttributeValue>`
            + `</Attribute>`
            + `</Attributes>`
            + `</Request>`
            ;
        const response = await axios.post('http://localhost:8080/evaluate', request, {
            headers: { 'Content-Type': 'application/json' }
        });
        res.status(200).send(response.data);
    });
};
