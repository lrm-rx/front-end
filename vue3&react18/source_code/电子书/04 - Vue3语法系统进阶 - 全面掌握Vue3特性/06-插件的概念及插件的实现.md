# 插件的概念及插件的实现

插件是自包含的代码，通常向 Vue 添加全局级功能。例如：全局方法、全局组件、全局指令、全局mixin等等。基于Vue的第三方模块都是需要通过插件的方式在Vue中进行生效的，比如：Element Plus、Vue Router、Vuex等等。

```js
// myplugin.js
import * as http from '@/http.js'
export default {
  install(app, options){
    console.log(options);
    app.config.globalProperties.$http = http;
    app.directive('auth', (el, binding) => {
      let auths = ['edit', 'delete'];
      let ret = auths.includes(binding.value);
      if(!ret){
        el.style.display = 'none';
      }
    });
    app.component('my-head', {
      template: `<div>hello myhead</div>`
    })
  }
}
// main.js 让插件生效
import myplugin from './myplugin.js'
app.use(myplugin, { info: '配置信息' })
```

可以看到，让插件生效的语法为`app.use`，这样就可以跟Vue结合到一起，所以插件就可以独立出去，成为第三方模块。
