
import { agent } from '../veramo/setup.js';
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";
import { resources } from '../db.js';

type attributesList = Record<string, Record<string, { attribute: string, dataType: string, value: string }[]>>;

export const verifyPresentation = async (vp: any) => {
    const args: IVerifyPresentationEIP712Args = {
        presentation: vp
    }

    const result = await agent.verifyPresentation(args);
    if (!result.verified) {
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