import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import router from "./router";

// 问题1: express 库的类型定义文件 .d.ts 文件类型描述不准确
// 问题2: 当使用中间件的时候, 对 req 或 res做了修改之后呢, 实际上类型并不能改变

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req: Request, res: Response, next: NextFunction) => {
//   req.teacherName = "ming";
//   next();
// });
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
