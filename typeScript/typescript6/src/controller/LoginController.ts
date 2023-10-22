import "reflect-metadata";
import { Request, Response } from "express";

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

function controller(target: any) {
  console.log("数据:", target.prototype);
  for (const key in target.prototype) {
    console.log(Reflect.getMetadata("path", target.prototype, key));
  }
}

function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

@controller
class LoginController {
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
