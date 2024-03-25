# 脚手架原理之webpack处理单文件组件及loader转换

## 处理单文件组件

目前我们的webpack还不支持对.vue文件的识别，也不支持.vue模块化使用，所以需要安装一些模块来实现。

```she
npm install vue @vue/complier-sfc vue-loader
```

vue模块主要是为了让vue功能生效。@vue/complier-sfc是对单文件组件的支持。vue-loader是把单文件组件进行转换。下面看一下webpack的完整配置，如下：

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'vue-study'
    }),
    new VueLoaderPlugin()
  ],
  mode: 'development'
};
```

通过配置操作后，目前已经可以完成一个小型的脚手架，支持模块化文件，也支持.vue文件的使用，还可以启动web服务器。

