import express, { json, urlencoded } from "express";
import webRouter from "./routes/web/index.js";
import apiRouter from "./routes/api/index.js";
import logger from "morgan";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import server from "./server.js";

const environment = process.env.NODE_ENV || "development";
const { PORT = 3000 } = environment;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View engine setup
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

// Sirve el bundle de producción de la app
app.use(express.static("dist"));

// Rutas que cargan las páginas
app.use("/", server.handleRedirect, webRouter);
// Rutas que sirven como gateway
app.use("/api", apiRouter);

global.environment = environment;

server.listen(app, PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
