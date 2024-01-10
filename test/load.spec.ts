
import { presentation_4 } from "./VPS/4";
import { presentation_8 } from "./VPS/8";
import { presentation_16 } from "./VPS/16";
import { presentation_32 } from "./VPS/32";
import { presentation_64 } from "./VPS/64";
import request from "supertest";
import app from "../src/app";
import fs from "fs";

test("load test", async () => {
    const resource_4 = "resource4";
    const payload_4 = {
        vp: presentation_4,
        resource: resource_4
    };

    const resource_8 = "resource8";
    const payload_8 = {
        vp: presentation_8,
        resource: resource_8
    };

    const resource_16 = "resource16";
    const payload_16 = {
        vp: presentation_16,
        resource: resource_16
    };

    const resource_32 = "resource32";
    const payload_32 = {
        vp: presentation_32,
        resource: resource_32
    };

    const resource_64 = "resource64";
    const payload_64 = {
        vp: presentation_64,
        resource: resource_64
    };

    const num_requests = 60;
    let measurements_4: any = [];
    let measurements_8: any = [];
    let measurements_16: any = [];
    let measurements_32: any = [];
    let measurements_64: any = [];

    for (let i = 0; i < num_requests; i++) {
        const result_4 = await request(app).post("/send").send(payload_4);
        measurements_4.push(result_4.body.measurements);

        const result_8 = await request(app).post("/send").send(payload_8);
        measurements_8.push(result_8.body.measurements);

        const result_16 = await request(app).post("/send").send(payload_16);
        measurements_16.push(result_16.body.measurements);

        const result_32 = await request(app).post("/send").send(payload_32);
        measurements_32.push(result_32.body.measurements);

        const result_64 = await request(app).post("/send").send(payload_64);
        measurements_64.push(result_64.body.measurements);
    }

    if (fs.existsSync("measurements/4"))
        fs.rmdirSync("measurements/4", { recursive: true });
    fs.mkdirSync("measurements/4");
    for (let i = 0; i < measurements_4.length; i++)
        appendMeasure(measurements_4[i], "4");

    if (fs.existsSync("measurements/8"))
        fs.rmdirSync("measurements/8", { recursive: true });
    fs.mkdirSync("measurements/8");
    for (let i = 0; i < measurements_8.length; i++)
        appendMeasure(measurements_8[i], "8");


    if (fs.existsSync("measurements/16"))
        fs.rmdirSync("measurements/16", { recursive: true });
    fs.mkdirSync("measurements/16");
    for (let i = 0; i < measurements_16.length; i++)
        appendMeasure(measurements_16[i], "16");


    if(fs.existsSync("measurements/32"))
        fs.rmdirSync("measurements/32", { recursive: true });
    fs.mkdirSync("measurements/32");
    for (let i = 0; i < measurements_32.length; i++)
        appendMeasure(measurements_32[i], "32");

    if(fs.existsSync("measurements/64"))
        fs.rmdirSync("measurements/64", { recursive: true });
    fs.mkdirSync("measurements/64");
    for (let i = 0; i < measurements_64.length; i++)
        appendMeasure(measurements_64[i], "64");



}, 1000000);

function appendMeasure(measure: any, resource: string) {
    fs.appendFileSync(`measurements/${resource}/extraction.txt`, `${measure.attribute_time}\n`, 'utf8');
    fs.appendFileSync(`measurements/${resource}/pdp.txt`, `${measure.pdp_time}\n`, 'utf8');
    fs.appendFileSync(`measurements/${resource}/verification.txt`, `${measure.verification_time}\n`, 'utf8');
    fs.appendFileSync(`measurements/${resource}/did.txt`, `${measure.did_time}\n`, 'utf8');
}