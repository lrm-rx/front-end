# 脚手架原理之webpack处理html文件和模块打包

为了更好的理解项目脚手架的使用，我们来学习一下webpack工具，因为脚手架的底层就是基于webpack工具实现的。

## 安装

webpack工具是基于nodejs的，所以首先要有nodejs环境，其次需要下载两个模块，一个是代码中使用的webpack模块，另一个是终端中使用的webpack-cli模块。

```she
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

## 配置文件

通过编写webpack.config.js文件，来编写webpack的配置信息，完成工具的操作行为。webpack最大的优点就是可以把模块化的JS文件进行合并打包，这样可以减少网络请求数，具体是通过entry和output这两个字段来完成的。

```javascript
// webpack.config.js 
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    clean: true
  }
}
```

在终端中进行nodejs脚本build的调用，这样去进行webpack执行，需要我们自己配置一下package.json的脚本。

```shell
npm run build   # -> webpack
```

这样在项目目录下就产生了一个 /dist 文件夹，里面有合并打包后的文件。那么我们该如何预览这个文件呢？一般可通过html文件进行引入，然后再通过浏览器进行访问。

但是html的编写还需要我们自己引入要预览的JS文件，不是特别的方便，所以是否可以做到自动完成html的操作呢？答案是可以利用webpack工具的插件HtmlWebpackPlugin来实现。

这样HtmlWebpackPlugin插件是需要安装的，通过`npm i HtmlWebpackPlugin`来完成。

```javascript
// webpack.config.js
module.exports = {
    ...,
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          title: 'vue-study'
        }),
        new VueLoaderPlugin()
      ]
}
```

