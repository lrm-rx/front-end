const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log(11);
  app.use(
    createProxyMiddleware("/api", {
      //遇见/api1前缀的请求，就会触发该代理配置
      target: "http://localhost:3001", //请求转发给谁
    })
  );
};
