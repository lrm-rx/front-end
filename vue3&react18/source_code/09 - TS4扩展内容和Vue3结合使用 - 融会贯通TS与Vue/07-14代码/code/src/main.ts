import { createApp } from 'vue'
import App from './09_plus.vue'
import router from './router'
import store, { key } from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store, key).use(router).mount('#app')
