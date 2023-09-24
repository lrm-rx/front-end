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
