import { createApp } from 'vue'
import App from './1_基本路由.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router).use(store).mount('#app')
