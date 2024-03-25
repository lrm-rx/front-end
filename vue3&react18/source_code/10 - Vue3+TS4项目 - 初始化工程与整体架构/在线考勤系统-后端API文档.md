
# 在线考勤系统-后端API文档

## 基础URL

http://api.h5ke.top/

## ---用户登录---

### 接口说明

调用此接口完成用户登录功能。

### 请求方式

POST

### 请求URL

/users/login

### 请求参数示例：json

```json
    {
        "email": "huangrong@imooc.com",  // 登录邮箱
        "pass": "huangrong" // 登录密码
    }
```

### 请求参数含义

| 参数 | 类型 | 必填 | 说明 |
| :----: | :---: | :----: | :----: |
| email | String | 是 | 登录邮箱 |
| pass | String | 是 | 登录密码 |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"   // 身份令牌
    }
```

### 返回参数含义

| 参数 | 说明 |
| :----: | :----: |
| errcode | 错误码， 0表示成功，其他表示失败 |
| errmsg | 成功或失败信息 |
| token | 身份令牌 |

### 附录：错误码

-1 : 登录账号或密码错误
-2 : 服务器错误

## ---获取用户信息---

### 接口说明

调用此接口可获取用户完整信息详情。

### 请求方式

GET

### 请求URL

/users/infos

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数含义

|     参数      |  类型  | 必填 |             说明              |
| :-----------: | :----: | :--: | :---------------------------: |
| authorization | String |  是  | 获取用户信息对应的token请求头 |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "infos success",  // 成功或失败信息
        "infos": {
            "_id": "62632f3f674b1e20c841aae2",     // 用户ID
            "name": "黄蓉",         // 用户姓名
            "head": "http://api.h5ke.top/uploads/62632f3f674b1e20c841aae2.png",  //用户头像
            "permission": ["home", "sign", "exception", "apply"],  // 权限路由列表
            "approver": [       // 审批人列表
                {
                    "_id": "626c7236e0c7edf6ce507708", 
                	"name": "洪七公"
                }
            ]
        }
    }
```

### 返回参数含义

|       参数       |               说明               |
| :--------------: | :------------------------------: |
|     errcode      | 错误码， 0表示成功，其他表示失败 |
|      errmsg      |          成功或失败信息          |
|      infos       |           用户信息集合           |
|    infos._id     |              用户ID              |
|    infos.name    |             用户姓名             |
|    infos.head    |             用户头像             |
| infos.permission |           权限路由列表           |
|  infos.approver  |            审批人列表            |

### 附录：错误码

-1 : token错误

## ---获取用户打卡信息---

### 接口说明

调用此接口可获取用户打卡信息详情。

### 请求方式

GET

### 请求URL

/signs/time

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：query

```json
    {
        "userid": "62632f3f674b1e20c841aae2"  
    }
```

### 请求参数含义

|     参数      |  类型  | 必填 |             说明              |
| :-----------: | :----: | :--: | :---------------------------: |
| authorization | String |  是  | 获取用户信息对应的token请求头 |
|    userid     | String |  是  |     作为查询条件的用户ID      |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
        "infos": {
            "_id": "62726a1d264b947cdb6e3fa8",    // 打卡信息ID
            "userid": "62632f3f674b1e20c841aae2", // 用户ID
            "time": {},    // 打卡时间列表
            "detail": {}   // 出勤情况列表
        }
    }
```

### 返回参数含义

|     参数     |               说明               |
| :----------: | :------------------------------: |
|   errcode    | 错误码， 0表示成功，其他表示失败 |
|    errmsg    |          成功或失败信息          |
|    infos     |           打卡信息集合           |
|  infos._id   |            打卡信息ID            |
| infos.userid |              用户ID              |
|  infos.time  |           打卡时间列表           |
| infos.detail |           出勤情况列表           |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---更新用户打卡信息---

### 接口说明

调用此接口可更新用户打卡信息详情。

### 请求方式

PUT

### 请求URL

/signs/time

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：json

```json
    {
        "userid": "62632f3f674b1e20c841aae2"  
    }
```

### 请求参数含义

|     参数      |  类型  | 必填 |             说明              |
| :-----------: | :----: | :--: | :---------------------------: |
| authorization | String |  是  | 获取用户信息对应的token请求头 |
|    userid     | String |  是  |     作为查询条件的用户ID      |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
        "infos": {
            "_id": "62726a1d264b947cdb6e3fa8",    // 打卡信息ID
            "userid": "62632f3f674b1e20c841aae2", // 用户ID
            "time": {},    // 打卡时间列表
            "detail": {}   // 出勤情况列表
        }
    }
```

### 返回参数含义

|     参数     |               说明               |
| :----------: | :------------------------------: |
|   errcode    | 错误码， 0表示成功，其他表示失败 |
|    errmsg    |          成功或失败信息          |
|    infos     |           打卡信息集合           |
|  infos._id   |            打卡信息ID            |
| infos.userid |              用户ID              |
|  infos.time  |           打卡时间列表           |
| infos.detail |           出勤情况列表           |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---获取用户审批信息---

### 接口说明

调用此接口可获取用户审批信息详情。

### 请求方式

GET

### 请求URL

/checks/apply

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：query

```json
    {
        "applicantid": "62632f3f674b1e20c841aae2"   // 用户ID
    }
```

### 请求参数含义

|           参数           |  类型  | 必填 |               说明               |
| :----------------------: | :----: | :--: | :------------------------------: |
|      authorization       | String |  是  |  获取用户信息对应的token请求头   |
| applicantid / approverid | String |  是  | 作为查询条件的用户ID，即申请人ID |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
        "rets": [{
        	"_id": "630a239f7c74f504b853a57f",                    // 审批信息ID
            "applicantid": "62632f3f674b1e20c841aae2",            // 申请人ID
            "applicantname": "黄蓉",                               // 申请人姓名
            "approverid": "626c7236e0c7edf6ce507708",             // 审批人ID
            "approvername": "洪七公",                              // 审批人姓名
            "note": "忘记早上打卡",                                 // 审批备注     
            "reason": "补签卡",                                     // 审批事由
            "state": "未通过",                                      // 审批状态
            "time": ["2022-08-11 12:00:00", "2022-09-14 12:00:00"] // 审批时间
        }]
    }
```

### 返回参数含义

|        参数        |               说明               |
| :----------------: | :------------------------------: |
|      errcode       | 错误码， 0表示成功，其他表示失败 |
|       errmsg       |          成功或失败信息          |
|        rets        |           审批信息集合           |
|      rets._id      |            审批信息ID            |
|  rets.applicantid  |             申请人ID             |
| rets.applicantname |            申请人姓名            |
|  rets.approverid   |             审批人ID             |
| rets.approvername  |            审批人姓名            |
|     rets.note      |             审批备注             |
|    rets.reason     |             审批事由             |
|     rets.state     |             审批状态             |
|     rets.time      |             审批时间             |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---添加用户审批信息---

### 接口说明

调用此接口可添加用户审批信息详情。

### 请求方式

POST

### 请求URL

/checks/apply

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：json

```json
    {
        "applicantid": "62632f3f674b1e20c841aae2",            // 申请人ID
        "applicantname": "黄蓉",                               // 申请人姓名
        "approverid": "626c7236e0c7edf6ce507708",             // 审批人ID
        "approvername": "洪七公",                              // 审批人姓名
        "note": "忘记早上打卡",                                 // 审批备注     
        "reason": "补签卡",                                     // 审批事由
        "time": ["2022-08-11 12:00:00", "2022-09-14 12:00:00"] // 审批时间
    }
```

### 请求参数含义

|     参数      |  类型  | 必填 |               说明               |
| :-----------: | :----: | :--: | :------------------------------: |
| authorization | String |  是  |  获取用户信息对应的token请求头   |
|  applicantid  | String |  是  | 作为查询条件的用户ID，即申请人ID |
| applicantname | String |  是  |            申请人姓名            |
|  approverid   | String |  是  |             审批人ID             |
| approvername  | String |  是  |            审批人姓名            |
|     note      | String |  是  |             审批备注             |
|    reason     | String |  是  |             审批事由             |
|     time      | Array  |  是  |             审批时间             |
|               |        |      |                                  |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
    }
```

### 返回参数含义

|  参数   |               说明               |
| :-----: | :------------------------------: |
| errcode | 错误码， 0表示成功，其他表示失败 |
| errmsg  |          成功或失败信息          |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---更新用户审批信息---

### 接口说明

调用此接口可更新用户审批信息详情。

### 请求方式

PUT

### 请求URL

/checks/apply

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：json

```json
    {
        "_id": "630cb93a7c74f504b853a5a7",            // 作为查询条件的审批ID
        "state": "已通过"                              // 审批状态
    }
```

### 请求参数含义

|     参数      |  类型  | 必填 |             说明              |
| :-----------: | :----: | :--: | :---------------------------: |
| authorization | String |  是  | 获取用户信息对应的token请求头 |
|      _id      | String |  是  |     作为查询条件的审批ID      |
|     state     | String |  是  |   审批状态(已通过，未通过)    |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
    }
```

### 返回参数含义

|  参数   |               说明               |
| :-----: | :------------------------------: |
| errcode | 错误码， 0表示成功，其他表示失败 |
| errmsg  |          成功或失败信息          |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---获取消息提醒信息---

### 接口说明

调用此接口可获取消息提醒信息详情。

### 请求方式

GET

### 请求URL

/news/remind

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：query

```json
    {
        "userid": "62632f3f674b1e20c841aae2"   // 用户ID
    }
```

### 请求参数含义

|     参数      |  类型  | 必填 |             说明              |
| :-----------: | :----: | :--: | :---------------------------: |
| authorization | String |  是  | 获取用户信息对应的token请求头 |
|    userid     | String |  是  |     作为查询条件的用户ID      |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
        "info": {
        	"_id": "62771e20fbf556c0012d8e6b",               // 消息提醒ID
            "userid": "62632f3f674b1e20c841aae2",            // 用户ID
            "applicant": true,                               // 申请消息提醒
            "approver": false                                // 审批消息提醒
        }
    }
```

### 返回参数含义

|      参数      |               说明               |
| :------------: | :------------------------------: |
|    errcode     | 错误码， 0表示成功，其他表示失败 |
|     errmsg     |          成功或失败信息          |
|      info      |         消息提醒信息集合         |
|    info._id    |            消息提醒ID            |
|  info.userid   |              用户ID              |
| info.applicant |   申请消息提醒，true为有新消息   |
| info.approver  |   审批消息提醒，true为有新消息   |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---更新消息提醒信息---

### 接口说明

调用此接口可更新消息提醒信息详情。

### 请求方式

PUT

### 请求URL

/news/remind

### 请求参数示例：headers

```json
    Request Headers
    	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvcy"
```

### 请求参数示例：json

```json
    {
        "userid": "62632f3f674b1e20c841aae2",  // 用户ID
        "applicant": true,                     // 申请消息提醒
        "approver": false                      // 审批消息提醒
    }
```

### 请求参数含义

|     参数      |  类型   | 必填 |             说明              |
| :-----------: | :-----: | :--: | :---------------------------: |
| authorization | String  |  是  | 获取用户信息对应的token请求头 |
|    userid     | String  |  是  |     作为查询条件的用户ID      |
|   applicant   | Boolean |  否  |         申请消息提醒          |
|   approver    | Boolean |  否  |         审批消息提醒          |

### 正确返回示例

```json
    {
        "errcode": 0, // 错误码，0代表成功，其他表示失败
        "errmsg": "ok",  // 成功或失败信息
        "info": {
        	"_id": "62771e20fbf556c0012d8e6b",               // 消息提醒ID
            "userid": "62632f3f674b1e20c841aae2",            // 用户ID
            "applicant": true,                               // 申请消息提醒
            "approver": false                                // 审批消息提醒
        }
    }
```

### 返回参数含义

|      参数      |               说明               |
| :------------: | :------------------------------: |
|    errcode     | 错误码， 0表示成功，其他表示失败 |
|     errmsg     |          成功或失败信息          |
|      info      |         消息提醒信息集合         |
|    info._id    |            消息提醒ID            |
|  info.userid   |              用户ID              |
| info.applicant |   申请消息提醒，true为有新消息   |
| info.approver  |   审批消息提醒，true为有新消息   |

### 附录：错误码

-1 : token错误
-2 : 服务器错误

## ---重置初始数据---

### 接口说明

调用此接口可重置回初始测试数据（逃生舱）。

### 请求方式

POST

### 请求URL

/users/register

### 请求参数示例：无

### 正确返回示例

```json
    {
        "errcode": 0  // 错误码，0代表成功，其他表示失败
    }
```

### 返回参数含义

|  参数   |               说明               |
| :-----: | :------------------------------: |
| errcode | 错误码， 0表示成功，其他表示失败 |

### 附录：错误码

-1 : 服务器错误



