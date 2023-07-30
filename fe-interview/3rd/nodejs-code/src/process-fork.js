const http = require("http");
const fork = require("child_process").fork;

const server = http.createServer((req, res) => {
  if (req.url === "/get-sum") {
    console.log("主进程 id", process.pid);
    // 开启子进程
    const computeProcess = fork("./compute.js");
    computeProcess.send("开始计算");
    computeProcess.on("message", (data) => {
      console.log("主进程接收的信息", data);
      res.end("sum is " + data);
    });
    computeProcess.on("close", () => {
      console.log("子进程退出");
      computeProcess.kill();
      res.end("error");
    });
    // res.end("hello");
  }
});
server.listen(3000, () => {
  console.log("localhost: 3000");
});
