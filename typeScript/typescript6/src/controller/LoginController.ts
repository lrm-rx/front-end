import "reflect-metadata";
import { Request, Response } from "express";
import { controller, get, post } from "./decorator";
import { getResponseData } from "../utils/util";

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

@controller
class LoginController {
  @post("/login")
  login(req: BodyRequest, res: Response) {
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
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
      // res.redirect("/");
    }
    res.json(getResponseData(true));
  }

  @get("/")
  home(req: BodyRequest, res: Response) {
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
  }
}
