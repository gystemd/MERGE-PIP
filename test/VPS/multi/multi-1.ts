export const multi_1 = {
    "holder": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"proof\":{\"verificationMethod\":\"did:ethr:0x1:0x6406d81bb5e58207f78926302bcf963a6237584b#controller\",\"created\":\"2024-01-12T17:11:26.449Z\",\"proofPurpose\":\"assertionMethod\",\"type\":\"EthereumEip712Signature2021\",\"proofValue\":\"0xfa3db44733865971b1e39d8473eee4a87b79b9e47e48e94b801e9931003a56c67bcae38dc11963049424fb22cefdf35b104fe2af3e8cd38ff27ec69995e476561c\",\"eip712\":{\"domain\":{\"chainId\":1,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"attribute0\",\"type\":\"string\"},{\"name\":\"attribute1\",\"type\":\"string\"},{\"name\":\"attribute2\",\"type\":\"string\"},{\"name\":\"attribute3\",\"type\":\"string\"},{\"name\":\"attribute4\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]},\"primaryType\":\"VerifiableCredential\"}},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"],\"credentialSubject\":{\"id\":\"did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"attribute0\":\"value0\",\"attribute1\":\"value1\",\"attribute2\":\"value2\",\"attribute3\":\"value3\",\"attribute4\":\"value4\"},\"credentialSchema\":{\"id\":\"test-schema.org\",\"type\":\"JsonSchemaValidator2018\"},\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"issuer\":\"did:ethr:0x1:0x6406d81bb5e58207f78926302bcf963a6237584b\",\"issuanceDate\":\"2024-01-12T17:11:26.449Z\"}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2024-01-16T09:13:00.602Z",
    "proof": {
        "verificationMethod": "did:ethr:0x1:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2024-01-16T09:13:00.602Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x5fe8546782175d00e53778156af8aab6337b09e4b3e45b618bcf9c6db8618bc41d850901671088bbbd3781a2e74144e80d4b466e86f7eb4f33d327054951c8ec1c",
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