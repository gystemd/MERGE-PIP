import request from "supertest";

import app from "../src/app";
import { agent } from '../src/veramo/setup';
import { IVerifyPresentationEIP712Args } from "@veramo/credential-eip712";

import { presentation as validPhdDegreePresentation } from "./VPS/valid_phd_degree";
import { presentation as degreeVaccinePresentation } from "./VPS/degree_vaccine";


describe("degree verification", () => {
	it("should correctly verify the degree credential", async () => {
		const payload = validPhdDegreePresentation;
		const args: IVerifyPresentationEIP712Args = {
			presentation: payload
		}
		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(true);
		// return request(app).post("/send").expect(200);
	});
});

describe("vaccine and degree verification", () => {
	it("should correctly verify the degree and vaccine credential", async () => {
		const payload = degreeVaccinePresentation;
		const args: IVerifyPresentationEIP712Args = {
			presentation: payload
		}
		const result = await agent.verifyPresentation(args);
		expect(result.verified).toBe(true);
		// return request(app).post("/send").expect(200);
	});
});