/* eslint-disable no-console */
import app from "./app.js";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
/**
 * Start Express server.
 */

app.set("port", 3001);

app.use(cors());
app.options('*', cors());
const allowCrossDomain = function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env"),
    );
    console.log("  Press CTRL-C to stop\n");
});
export default server;
