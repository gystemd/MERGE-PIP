export const presentation = {

    "holder": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://www.npoint.io/docs/b7e2e485241a04f89fdc\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"degreeField\":\"Computer Science\",\"degreeLevel\":\"PhD\",\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\"},\"issuanceDate\":\"2023-11-19T14:13:51.965Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-19T14:13:51.965Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"degreeField\",\"type\":\"string\"},{\"name\":\"degreeLevel\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x2def7a737e23ed64e9dcdacc03fc4722348ff7513b6c74f0f7af6f4b9a752ff51214109fab3ae93e779bb954bb75bcce88c805a705227aabc70fe7cb396cbfec1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}",
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://api.npoint.io/292a45521e356ed0174b\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\",\"vaccineType\":\"Full\"},\"issuanceDate\":\"2023-11-19T14:15:50.651Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-19T14:15:50.651Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"vaccineType\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x2761fd0a1f3bd0310851d16a11f7ac6dd3ca37b83a61068d3769c8625b8b664c2ff44bc5e8a335f797aa2cfef24bf1253ab0604c72ada90f97260f7fa72049a51c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-11-19T14:48:37.324Z",
    "proof": {
        "verificationMethod": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-11-19T14:48:37.324Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x40f74dbbe36e7466adf2c26cc0ae1fc66cebbea5ff90b4cc2f22c688520dd8751f8e72ca0d290d750418ad121b921c3a34a2e8a89ddd7a74b7d0f78d4df519311b",
        "eip712": {
            "domain": {
                "chainId": 80001,
                "name": "VerifiablePresentation",
                "version": "1"
            },
            "types": {
                "EIP712Domain": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "type": "string"
                    },
                    {
                        "name": "chainId",
                        "type": "uint256"
                    }
                ],
                "Proof": [
                    {
                        "name": "created",
                        "type": "string"
                    },
                    {
                        "name": "proofPurpose",
                        "type": "string"
                    },
                    {
                        "name": "type",
                        "type": "string"
                    },
                    {
                        "name": "verificationMethod",
                        "type": "string"
                    }
                ],
                "VerifiablePresentation": [
                    {
                        "name": "@context",
                        "type": "string[]"
                    },
                    {
                        "name": "holder",
                        "type": "string"
                    },
                    {
                        "name": "issuanceDate",
                        "type": "string"
                    },
                    {
                        "name": "proof",
                        "type": "Proof"
                    },
                    {
                        "name": "type",
                        "type": "string[]"
                    },
                    {
                        "name": "verifiableCredential",
                        "type": "string[]"
                    }
                ]
            },
            "primaryType": "VerifiablePresentation"
        }
    }
};