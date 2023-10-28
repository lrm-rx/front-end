import "reflect-metadata";
import { Request, Response } from "express";
import { controller, get, post } from "../decorator";
import { getResponseData } from "../utils/util";

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

@controller("/api")
export class LoginController {
  static isLogin(req: BodyRequest): boolean {
    return !!(req.session ? req.session.login : false);
  }
  @post("/login")
  login(req: BodyRequest, res: Response) {
    console.log(req.body);
    const { password } = req.body;
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.json(getResponseData<responseResult.login>(false, "已登录"));
      return;
    }
    if (password === "111" && req.session) {
      req.session.login = true;
      res.json(getResponseData<responseResult.login>(true));
    } else {
      res.json(getResponseData<responseResult.login>(false, "登录失败!"));
    }
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData<responseResult.logout>(true));
  }

  @get("/isLogin")
  isLogin(req: BodyRequest, res: Response) {
    const isLogin = LoginController.isLogin(req);
    const result = getResponseData<responseResult.isLogin>(isLogin);
    res.json(result);
  }

  @get("/")
  home(req: BodyRequest, res: Response) {
    const isLogin = LoginController.isLogin(req);
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
