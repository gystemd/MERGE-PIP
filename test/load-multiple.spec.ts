

import request from "supertest";
import app from "../src/app";
import fs from "fs";
import { multi_1 } from "./VPS/multi/multi-1";
import { multi_2 } from "./VPS/multi/multi-2";
import { multi_3 } from "./VPS/multi/multi-3";
import { multi_4 } from "./VPS/multi/multi-4";
import { multi_5 } from "./VPS/multi/multi-5";

test("load test", async () => {
    const num_requests_1 = 10;
    const num_requests_2 = 10;
    const num_requests_3 = 0;
    const num_requests_4 = 10;
    const num_requests_5 = 0;

    const resource_1 = "resource-multiple-1";
    const payload_1 = {
        vp: multi_1,
        resource: resource_1
    };

    const resource_2 = "resource-multiple-2";
    const payload_2 = {
        vp: multi_2,
        resource: resource_2
    };

    const resource_3 = "resource-multiple-3";
    const payload_3 = {
        vp: multi_3,
        resource: resource_3
    };

    const resource_4 = "resource-multiple-4";
    const payload_4 = {
        vp: multi_4,
        resource: resource_4
    };

    const resource_5 = "resource-multiple-5";
    const payload_5 = {
        vp: multi_5,
        resource: resource_5
    };


    let measurements_1: any = [];
    let measurements_2: any = [];
    let measurements_3: any = [];
    let measurements_4: any = [];
    let measurements_5: any = [];

    for (let i = 0; i < num_requests_1; i++) {
        console.log("Request " + i);
        const result_1 = await request(app).post("/send").send(payload_1);
        console.log(result_1.body.measurements);
        measurements_1.push(result_1.body.measurements);
    }

    for (let i = 0; i < num_requests_2; i++) {
        console.log("Request " + i);
        const result_2 = await request(app).post("/send").send(payload_2);
        measurements_2.push(result_2.body.measurements);
    }

    for (let i = 0; i < num_requests_3; i++) {
        console.log("Request " + i);
        const result_3 = await request(app).post("/send").send(payload_3);
        measurements_3.push(result_3.body.measurements);
    }

    for (let i = 0; i < num_requests_4; i++) {
        console.log("Request " + i);
        const result_4 = await request(app).post("/send").send(payload_4);
        measurements_4.push(result_4.body.measurements);
    }

    for (let i = 0; i < num_requests_5; i++) {
        console.log("Request " + i);
        const result_5 = await request(app).post("/send").send(payload_5);
        measurements_5.push(result_5.body.measurements);
    }

    create_measurements(measurements_1, "1");
    create_measurements(measurements_2, "2");
    // create_measurements(measurements_3, "3");
    create_measurements(measurements_4, "4");
    // create_measurements(measurements_5, "5");



}, 1000000);

function create_measurements(measurements: any, num_did: string) {
    if (fs.existsSync(`measurements/multi/${num_did}`))
        fs.rmdirSync(`measurements/multi/${num_did}`, { recursive: true });
    fs.mkdirSync(`measurements/multi/${num_did}`);
    for (let i = 0; i < measurements.length; i++) {
        const measure = measurements[i];
        fs.appendFileSync(`measurements/multi/${num_did}/extraction.txt`, `${measure.attribute_time}\n`, 'utf8');
        fs.appendFileSync(`measurements/multi/${num_did}/pdp.txt`, `${measure.pdp_time}\n`, 'utf8');
        fs.appendFileSync(`measurements/multi/${num_did}/verification.txt`, `${measure.verification_time}\n`, 'utf8');
        fs.appendFileSync(`measurements/multi/${num_did}/did.txt`, `${measure.did_time}\n`, 'utf8');
    }
}