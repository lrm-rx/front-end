# 利用组合式API开发复杂的搜索功能

从本小节我们要完成章节介绍中出现的搜索页面，利用组合式API去实现。先进行开发前的准备工作。

## 数据接口

后端地址：https://github.com/Binaryify/NeteaseCloudMusicApi

后端接口：

​	搜索建议：/search/suggest?keywords=海阔天空

​	搜索结果：/search?keywords=海阔天空

## 反向代理

由于我们的前端是localhost:8080，而后端是localhost:3000，这样会存在跨域问题，所以可以通过脚手架下的vue.config.js进行反向代理的配置。

```javascript
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,   
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
```

## 布局与样式

我们提前把布局和样式做好了，直接在上面进行逻辑的开发，可直接查看 13_search.vue 这个文件，到此我们已经准备好了开发前的准备工作。

