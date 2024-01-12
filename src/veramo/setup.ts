import { CredentialPlugin } from '@veramo/credential-w3c'
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'
import { createAgent, IResolver } from '@veramo/core'
import { CredentialIssuerEIP712, } from "@veramo/credential-eip712";
import dotenv from 'dotenv';

dotenv.config();
const providerConfig = {
    name: process.env.PROVIDER_NAME,
    rpcUrl: process.env.RPC_URL,
    registry: process.env.REGISTRY
}

export const agent = createAgent<IResolver>({
    plugins: [
        new DIDResolverPlugin({
            resolver: new Resolver({
                ...ethrDidResolver(providerConfig),
                // ...webDidResolver(),
            }, { cache: false}),
        }),
        new CredentialPlugin(),
        new CredentialIssuerEIP712()
    ],
});