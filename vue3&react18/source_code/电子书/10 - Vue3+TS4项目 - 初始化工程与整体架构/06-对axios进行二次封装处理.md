# 对axios进行二次封装处理

## axios库介绍

axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。axios是对原生Ajax做了封装处理，特点如下：

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

对于实际开发来说，我们也经常对axios库做二次封装，让我们使用起来更加统一，配置一些初始项等工作。

再封装之间，我们的项目是前后端分离式的，所以需要做跨域处理，常见的跨域处理方案有。

- JSONP
- CORS
- 服务器代码

这里我们采用`CORS`方案来解决跨域问题，`app-server`中会采用`cors`第三方模块来实现，前端不需要做任何处理。

```javascript
const cors = require('cors')
app.use(cors())
```

接下来就是对axios做二次封装，在脚手架src下创建`/utils/http.ts`

```typescript
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
});
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
interface Data {
  [index: string]: unknown
}
interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}
const http: Http = {
  get(url, data, config){
    return instance.get(url, {
      params: data,
      ...config
    })
  },
  post(url, data, config){
    return instance.post(url, data, config)
  },
  put(url, data, config){
    return instance.put(url, data, config)
  },
  patch(url, data, config){
    return instance.patch(url, data, config)
  },
  delete(url, data, config){
    return instance.delete(url, {
      data,
      ...config
    })
  }
}
export default http;
```

这里的baseURL字段采用的是本地`http://localhost:3000/`，如果选择使用线上接口的话，需要替换成`http://api.h5ke.top/`，其他代码不变。

axios的二次封装，主要做的有：基础配置、请求拦截器与响应拦截器、统一接口调用方式等。
