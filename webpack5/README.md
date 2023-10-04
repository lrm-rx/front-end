# webpack5

> package.json
> "build": "webpack --config ./webpack.dev.js",
> 默认会执行 webpack.config.js 文件

### 入口文件 - entry

> 作为应用打包的入口, 可以是一个, 也可以是多个. 两种配置方式:

```javascript
// 字符串/字符串数组
entry: "./src/index.js",
entry: ["./src/index.js", "./src/test.js"]

// 对象
entry: {
  app: {
    import: "./src/index.js",
    dependOn: ["react-vendors", "ut"],
    filename: "test.js"
  }
}
```

### 构建产物输出 - output

> **产物输出, 配置产物如何输出以及输出位置.**

- path: 产物输出位置, 绝对路径
- publicPath: 按需加载或外部资源的真实路径, 默认为相对路径
- crossOriginLoading: script 属性 cross-origin, 默认 false,可设置'anonymous', 'use-credentials', 仅在 target 为'web'生效.

#### 文件名称相关

- filename: 产物输出名称
- assetModuleFilename: 静态资源输出名称
- chunkFilename: 非初始 chunk 文件的名称

#### 导出库配置 - library

- library.name: 导出库的名称, 可以单独设置,也可以统一放一起
- library.type: 库暴露的方式, 比如'var', 'module', 'umd','cmd','require'等
- library.export: 指定哪个导出暴露为一个库
- library.auxiliaryComment: 在 umd 中添加注释
- library.umdNamedDefine: 在 umd 模式下是否使用 define

### 各类资源处理 - loader

**通过 loader 可以支持其他类型资源编译, 比如 css, 图片等**

- 配置方式: 在 webpack.config.js 中设置对应 loader
- 内联方式: 在引用语句中设置对应 loader

#### 常用 loader

- babel-loader
- css-loader
- style-loader
- ts-loader
- sass-loader
- MiniCssExtractPlugin-loader

#### 常用插件 - plugin

- HtmlWebpackPlugin
  - title - html document title
  - filename - 输出 html 文件名
  - template - 指定 html 模板, 一般指.html 文件
  - templateParameters - 替换模板中的数据
  - publicPath - script, style 的路径
  - minify - 压缩配置
- MiniCssExtractPlugin
- CssMinimizerPlugin
  > CssMinimizerPlugin - optimization.minimizer
  - test - 文件匹配
  - include - 文件包含
  - exclude - 文件排除
  - parallel - 是否启用多进程
  - minify - 用 cssoMinify, cleanCssMinify, esbuildMinify, parcelCssMinify 替换 cssnanoMinify
  - minimizerOptions - cssnano 优化选项
- ESLintWebpackPlugin
- TerserPlugin
- PrefetchPlugin

#### 构建模式 - mode

> 根据 mode 使用不同的配置来构建

- development: 开发模式, 会将 DefinePlugin 中的 NODE_ENV 设置为 development
- production: 将 NODE_ENV 设置 development
- node: 使用默认模式

> **如果要根据 node 来改变打包行为, 必须要将配置导出为函数 - 命令行为方式传入参数时**

#### 开发环境模式 - devserver

- hot: 设置为 only 时编译出错改正不会刷新浏览器
- open: 是否打开新的浏览器 tab
- port: 打开时的端口, webpack5 可以设置为 auto 自动切换可用端口
- proxy: 设置请求代理
- server: 设置请求协议, 比如 http, https, spdy
- static: 设置静态资源访问

#### 使用 autoprefixer 兼容各个浏览器样式属性

> 使用前缀做兼容 postcss-loader + autoprefixer

- -moz 代表 firefox 浏览器私有属性
- -ms 代表 IE 浏览器私有属性
- -webkit 代表 chrome/safari 私有属性
- -o 代表 opera 私有属性

#### code spliting

- 设置 entry 多入口
- 设置 Entry Dependencies 共享依赖
- 使用 import 动态导入模块
- 设置内置的 SplitChunksPlugin 相关属性

  > SplitChunksPlugin 配置
  >
  > - chunks: "async" | "initial" | "all"
  > - minSize: 打包出的最小文件大小限制
  > - minChunks: 最少共享 chunks 数, 默认 1

#### 公共静态资源提取

使用外链 - externals

- 减少打包体积/提升构建效率
- 减少重复 cdn 资源, 用户更新

#### 将资源内联到 html 中

内联的意义

- 减少 http 请求, 提升性能
- 复用资源, 提升开发效率和工程维护
- 提高用户体验

如何内联

- html 片段: raw-loader or asset/source + html-webpack-plugin
- js: 同 html
- css: style-loader
- 图片, 字体: asset | asset-inline or url-loader

#### 如何实现多页面应用打包

一个仓库多个页面
**都需要打包出来, 并且是单独打包**

如何打包

- 入口文件区分: entry
- 多个 html: html-webpack-plugin

```javascript
entry: {
  index: {
    import: "./src/index/index.js"
  },
  list: {
    import: "./src/list/index.js"
  }
}
```
