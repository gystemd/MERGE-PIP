
import { agent } from '../veramo/setup.js';
import { IVerifyPresentationEIP712Args, IVerifyCredentialEIP712Args } from "@veramo/credential-eip712";
import { resources } from '../db.js';
import process from 'process';
type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;

export const verifyPresentation = async (vp: any) => {
    const args: IVerifyPresentationEIP712Args = {
        presentation: vp
    }

    let totalDID = 0;
    // verify each VC in the VP
    for (let i = 0; i < vp.verifiableCredential.length; i++) {
        const vc = JSON.parse(vp.verifiableCredential[i]);
        const args: IVerifyCredentialEIP712Args = {
            credential: vc
        }

        const start = Date.now();
        const result = await agent.verifyCredential(args);
        const end = Date.now();
        totalDID += end - start;
        if (!result.verified){
            console.log("VC not verified");
            return false;
        }
    }
    process.env.VC_DID_TIME = totalDID.toString();

    const result = await agent.verifyPresentation(args);
    if (!result.verified) {
        console.log(result);
        console.log("VP not verified");
        return false;
    }

    return true;
}

export const getAttributes = (vp: any, resource: string) => {
    let result = "";
    const attributes: attributesList = resources[resource];
    Object.keys(attributes).forEach((categoryKey) => {
        result += `<Attributes Category="` + categoryKey + `">`;
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
                result += `<Attribute AttributeId="` + credentialKey + "." + attributeEntry.attribute
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
        result += `</Attributes>`
    });
    return result;
}