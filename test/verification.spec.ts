import request from "supertest";

import app from "../src/app";
import { agent } from '../src/veramo/setup';
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";

import { presentation as validPhdDegreePresentation } from "./VPS/valid_phd_degree";
import { presentation as degreeVaccinePresentation } from "./VPS/degree_vaccine";
import {tampered as tampered} from "./VPS/tampered";

describe("degree verification", () => {
	it("should correctly verify the degree credential", async () => {
		const payload = validPhdDegreePresentation;
		const args: IVerifyPresentationEIP712Args = {
			presentation: payload
		}
        const result = await request(app).post("/verify").send(payload);
		expect(result.body.verified).toBe(true);
	});
});

describe("vaccine and degree verification", () => {
	it("should correctly verify the degree and vaccine credential", async () => {
		const payload = degreeVaccinePresentation;
        const result = await request(app).post("/verify").send(payload);
		expect(result.body.verified).toBe(true);
	});
});


describe("fail verification - tampered VC", () => {
	it("should fail to verify the VP", async () => {
		const payload = {vp:tampered};
        const result = await request(app).post("/verify").send(payload);
		expect(result.body.verified).toBe(false);
	});
});

describe("fail verification - change credential value", () => {
	it("should fail to verify the VP", async () => {
		const payload = validPhdDegreePresentation;

		// change the degree level to be a bachelor; This invalidates the VP
		const invalid_vc = payload.verifiableCredential[0].replace("PhD", "Bachelor");
		const invalid_presentation = {
			...payload,
			verifiableCredential: [invalid_vc]
		}

		const args: IVerifyPresentationEIP712Args = {
			presentation: invalid_presentation
		}

		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(false);
	})
});

describe("fail verification - change issuer", () => {
	it("should to verify the VP", async () => {
		const payload = validPhdDegreePresentation;
		const invalid_vc = payload.verifiableCredential[0].replace("0x8aadd53dc222d0490f0804a31792a635922a43a8", "0x8aadd53dc222d0490f0804a31792a635922a43a9");
		const invalid_presentation = {
			...payload,
			verifiableCredential: [invalid_vc]
		}

		const args: IVerifyPresentationEIP712Args = {
			presentation: invalid_presentation
		}

		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(false);
	})
});

describe("fail verification - change issuer", () => {
	it("should to verify the VP", async () => {
		const payload = validPhdDegreePresentation;
		const invalid_vc = payload.verifiableCredential[0].replace("0x8aadd53dc222d0490f0804a31792a635922a43a8", "0x8aadd53dc222d0490f0804a31792a635922a43a9");
		const invalid_presentation = {
			...payload,
			verifiableCredential: [invalid_vc]
		}

		const args: IVerifyPresentationEIP712Args = {
			presentation: invalid_presentation
		}

		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(false);
	})
});

describe("fail verification - change proofValue", () => {
	it("should fail to verify the VP", async () => {
		const payload = validPhdDegreePresentation;
		const invalid_proof = {
			...payload.proof,
			proofValue: "0x0"
		}
		const invalid_presentation = {
			...payload,
			proof: invalid_proof
		}

		const args: IVerifyPresentationEIP712Args = {
			presentation: invalid_presentation
		}

		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(false);
	})
});