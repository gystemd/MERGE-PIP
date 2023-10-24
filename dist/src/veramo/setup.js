// Core interfaces
import { createAgent } from '@veramo/core';
// Core identity manager plugin
// W3C Verifiable Credential plugin
import { CredentialPlugin } from '@veramo/credential-w3c';
// Custom resolvers
import { DIDResolverPlugin } from '@veramo/did-resolver';
import { Resolver } from 'did-resolver';
import { getResolver as ethrDidResolver } from 'ethr-did-resolver';
import { getResolver as webDidResolver } from 'web-did-resolver';
// Storage plugin using TypeOrm
const DATABASE_FILE = 'database.sqlite';
// This will be the secret key for the KMS
const KMS_SECRET_KEY = "3aebfe77da5f552cd31204ebe5d4ebf143ada8908cdf661a43df97ef284d206d";
// const dbConnection = new DataSource({
//     type: 'sqlite',
//     database: DATABASE_FILE,
//     synchronize: false,
//     migrations,
//     migrationsRun: true,
//     logging: ['error', 'info', 'warn'],
//     entities: Entities,
// }).initialize()
const providerConfig = { name: '0x539', rpcUrl: 'http://localhost:8545', registry: '0xf48263bfc8237ae29480280083c63ba2c446eafa' };
console.log("ciao");
export const agent = createAgent({
    plugins: [
        new DIDResolverPlugin({
            resolver: new Resolver({
                ...ethrDidResolver(providerConfig),
                ...webDidResolver(),
            }),
        }),
        new CredentialPlugin(),
    ],
});
//# sourceMappingURL=setup.js.map