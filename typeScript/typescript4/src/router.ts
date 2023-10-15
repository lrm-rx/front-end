import fs from "fs";
import path from "path";
import { Router, Request, Response, NextFunction } from "express";
import Crowller from "./utils/crowller";
import Analyzer from "./utils/analyzer";
import { getResponseData } from "./utils/util";

// 解决问题1
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

const router = Router();
router.get("/", (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.send(`
      <html>
        <body>
          <a href="/getData">获取内容</a>
          <a href="/showData">查看内容</a>
          <a href="/logout">退出</a>
        </body>
      </html>
    `);
    return;
  }
  res.send(`
    <html>
      <body>
        <form method="post" action="/login">
          <input type="password" name="password" />
          <button>登录</button>
        </form>
      </body>
    </html>
  `);
});

router.post("/login", (req: BodyRequest, res: Response) => {
  const { password, username } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    // res.send("已登录");
    res.json(getResponseData(false, "已登录"));
    return;
  }
  if (password === "111" && req.session) {
    req.session.login = true;
    // res.send("登录成功!");
    res.json(getResponseData(true));
  } else {
    // res.send("登录失败!");
    res.json(getResponseData(false, "登录失败!"));
  }
});

router.get("/logout", (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
    // res.redirect("/");
  }
  res.json(getResponseData(true));
});

router.get("/getData", checkLogin, (req: BodyRequest, res: Response) => {
  const url = `https://ssr1.scrape.center/page/${
    Math.floor(Math.random() * 5) + 1
  }`;
  const analyzer = Analyzer.getInstance();
  new Crowller(analyzer, url);
  res.json(getResponseData(true));
  // res.send("获取数据成功!");
});

router.get("/showData", checkLogin, (req: BodyRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname, "../data/movie.json");
    const result = fs.readFileSync(position, "utf-8");
    // res.json(JSON.parse(result));
    res.json(getResponseData(JSON.parse(result)));
  } catch (error) {
    // res.send("暂无数据!");
    res.json(getResponseData(false, "暂无数据!"));
  }
});

export default router;
