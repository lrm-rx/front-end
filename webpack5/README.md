# webpack5

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
