# 本地接口启动及数据访问

本项目除了可以使用上一个小节中提到的在线访问接口外，还可以自己配置本地的服务，架设本地接口，更容易进行数据的调试处理。

## 数据库安装

数据库采用mongodb3.6的版本，在源码中给大家提供了软件的下载地址，链接: https://pan.baidu.com/s/1g_a9Q7Wu1tIhsiy31_FBqw?pwd=eh7c 提取码: eh7c。

软件如下：

- mongodb-win32-x86_64-2008plus-ssl-3.6.23-signed.msi
- robo3t-1.3.1-windows-x86_64-7419c406.exe

mongodb安装包和robo3t可视化工具。

mongodb安装好后，可以把软件写入到全局环境变量中，这样就可以在全局地址下进行访问了，操作流程如下：

1. 找到安装路径：C:\Program Files\MongoDB\Server\3.6\bin\
2. 此电脑->属性->高级系统设置->环境变量->系统变量->Path
3. 把第一步中的地址，添加到Path中，就可以设置全局成功

robo3t正常安装就好，当mongodb启动成功后，就可以启动robo3t了。

`app-server.rar`是给大家准备好的后端源码文件，首先第一步进行解压，然后通过`npm i`进行依赖的安装。接下来就是运行`npm start`来启动后端。

`npm start`启动包含两步：第一步启动数据库，第二个启动后端服务。然后就可以测试接口了。首先先注册两个测试账号，接口调用如下：

```shell
# request POST
http://localhost:3000/users/register
```

```json
// response
{"errcode":0}
```

看到`{"errcode":0}`就表示注册账号成功，会有两个账号数据，即：黄蓉和洪七公。

再进行登录接口测试即可。

```shell
# request POST { "email":"huangrong@imooc.com", "pass":"huangrong" }
http://localhost:3000/users/login
```

```json
// response
{"errcode":0,"errmsg":"ok","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcyI6eyJuYW1lIjoi6buE6JOJIiwicGVybWlzc2lvbiI6WyJob21lIiwic2lnbiIsImV4Y2VwdGlvbiIsImFwcGx5Il0sIl9pZCI6IjYyNjMyZjNmNjc0YjFlMjBjODQxYWFlMiIsImFwcHJvdmVyIjpbeyJfaWQiOiI2MjZjNzIzNmUwYzdlZGY2Y2U1MDc3MDgiLCJuYW1lIjoi5rSq5LiD5YWsIn1dLCJoZWFkIjoiaHR0cDovL2FwaS5oNWtlLnRvcC91cGxvYWRzLzYyNjMyZjNmNjc0YjFlMjBjODQxYWFlMi5wbmcifSwiaWF0IjoxNjY3NzI0MjU3LCJleHAiOjE2Njc3Mjc4NTd9.7N2RkRC0NyIhgOaCLSLTC7283PlcsCW_xEPT9YrgP-8"}
```
