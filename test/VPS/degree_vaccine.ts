export const presentation = {
    "holder": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://api.npoint.io/92e56cd3a26b31bfcd14\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"degreeField\":\"Computer Science\",\"degreeLevel\":\"PhD\",\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\"},\"issuanceDate\":\"2023-11-20T10:43:59.931Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-20T10:43:59.931Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"degreeField\",\"type\":\"string\"},{\"name\":\"degreeLevel\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x0ea78ab95737994c1a31770567817ef03d0610cc4193685afedc573782997fe0495dca03e6ffe2bf4288e38b9515ae41163945c56f01a79be85f5c4096a0421d1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}",
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://api.npoint.io/292a45521e356ed0174b\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\",\"vaccineType\":\"Full\"},\"issuanceDate\":\"2023-11-20T10:44:38.515Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-20T10:44:38.515Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"vaccineType\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0xb0dc3d76142ae568046d48261421ceea69f81f0108f08c5b739aaf12f23b096f1d4258d374cae6e58d8ee29870161c4871574af3193496216baea563e8b05b8e1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-11-20T14:16:35.944Z",
    "proof": {
        "verificationMethod": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-11-20T14:16:35.944Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0xfd6ff6dcd7e2908ee58810cd65f26e6ae361529cb094ed3a7efd71ce84fc0428137154ea9f04e9d2e132fa78323421bdb507a63df6a867161d258fc811a057481c",
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