export const presentation = {

    "holder": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8",
    "verifiableCredential": [
        "{\"@context\":[\"https://www.w3.org/2018/credentials/v1\"],\"credentialSchema\":{\"id\":\"https://www.npoint.io/docs/b7e2e485241a04f89fdc\",\"type\":\"JsonSchemaValidator2018\"},\"credentialSubject\":{\"degreeField\":\"Computer Science\",\"degreeLevel\":\"PhD\",\"id\":\"did:ethr:0x13881:0x5f572a3A7a950f7a3772652aF288F308FA8fc658\"},\"issuanceDate\":\"2023-11-19T14:13:51.965Z\",\"issuer\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8\",\"proof\":{\"created\":\"2023-11-19T14:13:51.965Z\",\"eip712\":{\"domain\":{\"chainId\":80001,\"name\":\"VerifiableCredential\",\"version\":\"1\"},\"primaryType\":\"VerifiableCredential\",\"types\":{\"CredentialSchema\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"}],\"CredentialSubject\":[{\"name\":\"degreeField\",\"type\":\"string\"},{\"name\":\"degreeLevel\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"string\"}],\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"}],\"Proof\":[{\"name\":\"created\",\"type\":\"string\"},{\"name\":\"proofPurpose\",\"type\":\"string\"},{\"name\":\"type\",\"type\":\"string\"},{\"name\":\"verificationMethod\",\"type\":\"string\"}],\"VerifiableCredential\":[{\"name\":\"@context\",\"type\":\"string[]\"},{\"name\":\"credentialSchema\",\"type\":\"CredentialSchema\"},{\"name\":\"credentialSubject\",\"type\":\"CredentialSubject\"},{\"name\":\"issuanceDate\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"Proof\"},{\"name\":\"type\",\"type\":\"string[]\"}]}},\"proofPurpose\":\"assertionMethod\",\"proofValue\":\"0x2def7a737e23ed64e9dcdacc03fc4722348ff7513b6c74f0f7af6f4b9a752ff51214109fab3ae93e779bb954bb75bcce88c805a705227aabc70fe7cb396cbfec1c\",\"type\":\"EthereumEip712Signature2021\",\"verificationMethod\":\"did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller\"},\"type\":[\"VerifiableCredential\",\"MascaUserCredential\"]}"
    ],
    "type": [
        "VerifiablePresentation",
        "Custom"
    ],
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "issuanceDate": "2023-11-19T14:17:09.233Z",
    "proof": {
        "verificationMethod": "did:ethr:0x13881:0x8aadd53dc222d0490f0804a31792a635922a43a8#controller",
        "created": "2023-11-19T14:17:09.233Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0xc8dd8b10ab714579e75a92a611fa7582e654dd72da0bbf70181aacedf57c101f146deac18982ea2c2f4aea0b3123432aa210aacc6ed98684e34893bf2605f4921b",
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