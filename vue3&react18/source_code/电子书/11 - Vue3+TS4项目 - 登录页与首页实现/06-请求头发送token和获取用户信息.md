# 请求头发送token和获取用户信息

## 请求头发送token

在`/src/utils/http.ts`文件中进行请求拦截器的设置，代码如下：

```typescript
instance.interceptors.request.use(function (config) {
  if(config.headers){
    config.headers.authorization = (store.state as StateAll).users.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
```

当`users/infos`响应回来的数据中，errcode等于0的话，表示token校验成功。如果返回errcode等于其他值的话，表示token校验失败。

校验成功执行`next('/')`，校验失败执行`next('/login')`，这样就可以做到登录拦击的实现了。

## 获取用户信息

通过`users/infos`这个接口就可以获取到用户的信息，信息如下：

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

   如果没有正确的token，那么返回的就是`errcode: -1`，可以在响应拦截器中做全局提示。

```typescript
// /src/utils/http.ts
instance.interceptors.response.use(function (response) {
  if(response.data.errmsg === 'token error'){
    ElMessage.error('token error');
    store.commit('users/clearToken');
    setTimeout(()=>{
      window.location.replace('/login');
    }, 1000)
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});
```

