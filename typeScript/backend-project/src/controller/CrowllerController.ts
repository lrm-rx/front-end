import fs from "fs";
import path from "path";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { controller, use, get } from "../decorator";
import { getResponseData } from "../utils/util";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer";

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = !!(req.session ? req.session.login : false);
  console.log("checkLogin middleware");
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录!"));
  }
};

const test = (req: Request, res: Response, next: NextFunction) => {
  console.log("test middleware");
  next();
};

@controller("/api")
export class CrowllerController {
  @get("/getData")
  @use(checkLogin)
  @use(test)
  getData(req: BodyRequest, res: Response) {
    const url = `https://ssr1.scrape.center/page/${
      Math.floor(Math.random() * 5) + 1
    }`;
    const analyzer = Analyzer.getInstance();
    new Crowller(analyzer, url);
    res.json(getResponseData<responseResult.getData>(true));
  }
  @get("/showData")
  @use(checkLogin)
  showData(req: BodyRequest, res: Response) {
    try {
      const position = path.resolve(__dirname, "../../data/movie.json");
      const result = fs.readFileSync(position, "utf-8");
      res.json(getResponseData(JSON.parse(result)));
    } catch (error) {
      res.json(getResponseData<boolean>(false, "暂无数据!"));
    }
  }
}
