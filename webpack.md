# webpack

## 前端代码为何要进行构建和打包?

- 体积更小, 加载更快
- 编译高级语言或语法
- 兼容性和错误检查
- 统一/高效的开发环境
- 统一的构建流程和产出标准
- 集成公司构建规范

## module chunk bundle分别是什么意思, 有何区别?

- module - 各个源码文件, webpack中一切皆模块
- chunk - 多模块合并成的, 如entry import() splitChunk
- bundle - 最终的输出文件

## loader和plugin的区别?



## webpack如何实现懒加载?

- import()
- 结合Vue React异步组件
- 结合Vue-router React-router异步加载路由

## webpack常见性能优化

### 构建速度

- 优化babel-loader

- IgnorePlugin

- noParse 避免重复打包

- > IgnorePlugin  VS noParse
  >
  > - IgnorePlugin直接不引入, 代码中没有
  > - noParse引入, 但不打包

- happyPack 多进程打包

  - JS单线程, 开启多进程打包
  - 提高构建速度(特别是多核CPU)

- ParallelUglifyPlugin

- 自动刷新

- 热更新

- DllPlugin

> 关于开启多进程
>
> - 项目较大,打包较慢,开启多进程能提高速度
> - 项目较小,打包很快,开启多进程会降低速度(进程开销)

### 产出代码

- 小图片base64编码
- bundle加hash
- 懒加载
- 提取公共代码
- IgnorePlugin  
- 使用CDN

### 使用production

- 自动开启代码压缩
- Vue React等会自动删掉调式代码(如开发环境的warning)
- 启动Tree-Shaking(ES6 Module)

### ES6 Module和Commonjs区别

- ES6 Module静态引入, 编译时引入
- Commonjs动态引入,执行时引入
- 只有ES6 Module才能静态分析, 实现Tree-Shaking

## babel-runtime和babel-polyfill的区别

- babel-polyfill会污染全局
- babel-runtime不会污染全局
- 产出第三方lib要用babel-runtime

### 关于webpack5

- webpack5主要是内部效率的优化
- 对比webpack4, 没有太多使用上的改动



### webpack基本配置

- 拆分配置和merge
- 启动本地服务
- 处理ES6
- 处理样式
- 处理图片
- 模块化

### webpack高级配置

- 多入口
- 抽离CSS文件

### babel和webpack的区别

- babel - JS新语法编译工具,不关心模块化
- webpack - 打包构建工具, 是多个loader plugin的集合

### 为什么Proxy不能被Polyfill?

- 如Class可以用function模拟
- 如Promise可以用callback来模拟
- 但Proxy的功能用Object.defineProperty无法模拟