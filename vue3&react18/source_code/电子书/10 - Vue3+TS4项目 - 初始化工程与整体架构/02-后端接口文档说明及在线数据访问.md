# 后端接口文档说明及在线数据访问

## 项目接口文档说明

本章的源码下载中，给大家提供了接口文档，即：《在线考勤系统-后端API文档.md》，可自行查看与阅读。

总共十个接口，如下：

- 用户登录
- 获取用户信息
- 获取用户打卡信息
- 更新用户打卡信息
- 获取用户审批信息
- 更新用户审批信息
- 添加用户审批信息
- 获取消息提醒信息
- 更新消息提醒信息
- 重置初始数据

说明一下，后端接口采用express + mongodb实现的。接口文档提供了，接口说明、请求方式、请求URL、请求参数示例、请求参数含义、正确返回示例、返回参数含义、错误码等等。

## 在线数据访问

在线API地址：http://api.h5ke.top/

登录成功后返回对应的身份令牌token，当请求其他接口的时候需要在请求头中携带身份令牌token来获取有权限的数据。

```shell
# request POST { "email":"huangrong@imooc.com", "pass":"huangrong" }
http://api.h5ke.top/users/login
```

```json
// response
{"errcode":0,"errmsg":"ok","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcyI6eyJuYW1lIjoi6buE6JOJIiwicGVybWlzc2lvbiI6WyJob21lIiwic2lnbiIsImV4Y2VwdGlvbiIsImFwcGx5Il0sIl9pZCI6IjYyNjMyZjNmNjc0YjFlMjBjODQxYWFlMiIsImFwcHJvdmVyIjpbeyJfaWQiOiI2MjZjNzIzNmUwYzdlZGY2Y2U1MDc3MDgiLCJuYW1lIjoi5rSq5LiD5YWsIn1dLCJoZWFkIjoiaHR0cDovL2FwaS5oNWtlLnRvcC91cGxvYWRzLzYyNjMyZjNmNjc0YjFlMjBjODQxYWFlMi5wbmcifSwiaWF0IjoxNjY3NzI0MjU3LCJleHAiOjE2Njc3Mjc4NTd9.7N2RkRC0NyIhgOaCLSLTC7283PlcsCW_xEPT9YrgP-8"}
```

访问`http://api.h5ke.top/users/infos`，当携带正确token返回的数据如下：

```json
// response
{"errcode":0,"errmsg":"infos success","infos":{"name":"黄蓉","permission":["home","sign","exception","apply"],"_id":"62632f3f674b1e20c841aae2","approver":[{"_id":"626c7236e0c7edf6ce507708","name":"洪七公"}],"head":"http://api.h5ke.top/uploads/62632f3f674b1e20c841aae2.png"}}
```

访问`http://api.h5ke.top/users/infos`，当携带不正确token返回的数据如下：

```json
// response
{"errcode":-1,"errmsg":"token error"}
```

最后一个接口，重置初始数据，可以把整个数据重置回初始值，用于数据测试使用：

```shell
# request POST
http://api.h5ke.top/users/register 
```

