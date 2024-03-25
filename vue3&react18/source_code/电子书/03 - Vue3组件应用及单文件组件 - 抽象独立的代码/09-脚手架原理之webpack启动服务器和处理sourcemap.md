# 脚手架原理之webpack启动服务器和处理sourcemap

## 启动服务环境

目前我们的webpack是没有服务环境的，那么如何启动一个web服务器呢？可以通过webpack-dev-server模块，下载使用即可。

```she
npm install webpack-dev-server
```

安装好后，再package.json中配置scripts脚本，`"serve": "webpack-dev-server"`，然后运行serve脚本。这样就会启动一个http://localhost:8080的服务。

当开启了web服务后，咱们的/dist文件可以不用存在了，服务会把dist的资源打入到内存中，这样可以大大加快编译的速度，所以/dist文件夹可以删除掉了，不影响服务的启动和访问。

## 处理sourcemap

socurcemap启动映射文件的作用，可以通过浏览器查找到原始的文件，这样对于调试是非常有帮助的，配置如下：

```js
module.exports = {
    devtool: 'inline-source-map'
}
```