import { CredentialPlugin } from '@veramo/credential-w3c'
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'
import { createAgent, IResolver } from '@veramo/core'
import { CredentialIssuerEIP712, } from "@veramo/credential-eip712";

const providerConfig = { name: '0x13881', rpcUrl: 'https://rpc-mumbai.maticvigil.com', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' }

export const agent = createAgent<IResolver>({
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