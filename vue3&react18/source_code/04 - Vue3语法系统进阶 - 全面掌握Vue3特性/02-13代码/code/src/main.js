import { createApp } from 'vue'
//import myplugin from './9_myplugin.js'
import App from './25_render函数.vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//import * as http from '@/5_http.js'

const app = createApp(App)

//初始化elementplus
//app.use(ElementPlus)
//手动注册elementplus图标组件
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }


//实现插件的初始化
//app.use(myplugin, { info: '配置信息' })

//实现全局属性
//app.config.globalProperties.$http = http;

//实现全局指令
// app.directive('auth', (el, binding) => {
//   let auths = ['edit', 'delete'];
//   let ret = auths.includes(binding.value);
//   if(!ret){
//     el.style.display = 'none';
//   }
// });

app.mount('#app')
