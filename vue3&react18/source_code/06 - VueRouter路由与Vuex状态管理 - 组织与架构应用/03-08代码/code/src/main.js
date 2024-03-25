import { createApp } from 'vue'
import App from './1_基本路由.vue'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
