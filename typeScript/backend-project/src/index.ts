import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controller/LoginController";
import "./controller/CrowllerController";
import router from "./router";

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["lucky dog"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(router);

app.listen(3001, () => {
  console.log("server is running in 3001!!!");
});
