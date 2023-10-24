import CoursesData from "../../data/courses.json" assert { type: "json" };
import { CredentialPlugin } from '@veramo/credential-w3c';
import { DIDResolverPlugin } from '@veramo/did-resolver';
import { Resolver } from 'did-resolver';
import { getResolver as ethrDidResolver } from 'ethr-did-resolver';
import { getResolver as webDidResolver } from 'web-did-resolver';
import { createAgent } from '@veramo/core';
const providerConfig = { name: '0x539', rpcUrl: 'http://localhost:8545', registry: '0xf48263bfc8237ae29480280083c63ba2c446eafa' };
const agent = createAgent({
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
export const loadApiEndpoints = (app) => {
    app.post("/send", async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        const vp = req.body.vp;
        console.log(vp.proof);
        const result = await agent.verifyCredential(vp);
        if (!result.verified) {
            return res.status(400).send("Invalid VP");
        }
        return res.status(200).send(CoursesData);
    });
};
//# sourceMappingURL=api.js.map