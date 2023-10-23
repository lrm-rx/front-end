import fs from "fs";
import path from "path";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorator";
import { getResponseData } from "../utils/util";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer";

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录!"));
  }
};

@controller
class CrowllerController {
  @get("/getData")
  @use(checkLogin)
  getData(req: BodyRequest, res: Response) {
    const url = `https://ssr1.scrape.center/page/${
      Math.floor(Math.random() * 5) + 1
    }`;
    const analyzer = Analyzer.getInstance();
    new Crowller(analyzer, url);
    res.json(getResponseData(true));
  }
  @get("/showData")
  @use(checkLogin)
  showData(req: BodyRequest, res: Response) {
    try {
      const position = path.resolve(__dirname, "../../data/movie.json");
      const result = fs.readFileSync(position, "utf-8");
      // res.json(JSON.parse(result));
      res.json(getResponseData(JSON.parse(result)));
    } catch (error) {
      // res.send("暂无数据!");
      res.json(getResponseData(false, "暂无数据!"));
    }
  }
}
