import express from "express";
import path from "path";
import { loadApiEndpoints } from "./controllers/api.js";
import { fileURLToPath } from "url";
// Create Express server
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));
loadApiEndpoints(app);
export default app;
//# sourceMappingURL=app.js.map