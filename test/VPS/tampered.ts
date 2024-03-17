export const tampered = {
    "holder": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"proof\":{\"created\":\"2024-01-12T15:38:05.383Z\",\"eip712\":{\"domain\":{\"chainId\":1,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0xeaf834f9255ab89d4c237721c88726a133338517ac7abbf60910a766faf6e0f314710e1b5e85faa7f4bcc56ed5aaa15a1040acf7b542c3e6c017f7df72422ff71b\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/json-schema.json\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"id\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"type\":\"Regular User\"},\"issuanceDate\":\"2024-01-12T15:38:05.383Z\",\"issuer\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43z8\",\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2024-01-12T15:39:02.720Z",
    "proof": {
        "verificationMethod": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2024-01-12T15:39:02.720Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0xc3aa3a6a9f2c87f56319bfc37b4c9e34cb3c64c12c4926d2b90bbe2845e0a03d2863774aa0eb3eb8aec72cd93faa3855d6889a2e2255c2585821dbeac69e093b1b",
        "eip712": {
            "domain": {
                "chainId": 1,
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
}