import request from "supertest";
import app from "../src/app";
import { presentation as degreeVP } from "./VPS/valid_phd_degree";
import { presentation as degreeVaccineVP } from "./VPS/degree_vaccine";
import { presentation as devVP } from "./VPS/dev";
import { presentation_32 } from "./VPS/32";

describe("test access to research-paper-computer-science resource", () => {
    it("should return 200", async () => {
        const resource = "research-paper-computer-science";
        const payload = {
            vp: degreeVP,
            resource: resource
        };
        const result = await request(app).post("/send").send(payload);
        expect(result.status).toBe(200);
        expect(result.body.authorized).toBe(true);
    });
});

describe("test access to course-material", () => {
    it("should return 200", async () => {
        const resource = "course-material";
        const payload = {
            vp: degreeVP,
            resource: resource
        };
        const result = await request(app).post("/send").send(payload);
        expect(result.status).toBe(200);
        expect(result.body.authorized).toBe(true);
    });
});

describe("test access to conference", () => {
    it("should return 200", async () => {
        const resource = "conference";
        const payload = {
            vp: degreeVaccineVP,
            resource: resource
        };
        const result = await request(app).post("/send").send(payload);
        expect(result.status).toBe(200);
        expect(result.body.authorized).toBe(true);
    });
});

describe("test access to coding course", () => {
    it("should return 200", async () => {
        const resource = "coding.course";
        const payload = {
            vp: devVP,
            resource: resource
        };
        const result = await request(app).post("/send").send(payload);
        expect(result.status).toBe(200);
        expect(result.body.authorized).toBe(true);
    })
});

describe("test access to a resource with 32 attributes", () => {
    it("should return 200", async () => {
        const resource = "resource32";
        const payload = {
            vp: presentation_32,
            resource: resource
        };
        const result = await request(app).post("/send").send(payload);
        expect(result.status).toBe(200);
        expect(result.body.authorized).toBe(true);
    })
});