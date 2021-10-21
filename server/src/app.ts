import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { Start } from "./lib/application/index";
import compression from "compression";
import bodyParser from "body-parser";
import { Connect } from "./lib/connect";
const app: Application = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

Connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/tech-talent?retryWrites=true&w=majority"
);

Start(3002, app);