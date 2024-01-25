# git 代理配置

> 当使用的科学上网上传代码, push或pull总是超时, 可以尝试以下配置

```javascript
// 配置git的代理服务器地址
git config --global http.proxy http://127.0.0.1:10809

// 取消git的代理服务器地址
git config --global --unset http.proxy http://127.0.0.1:9666

// 查看git的全局配置信息
git config --global --list
```