
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Composition from '@/views/Composition.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/Composition',
    component: Composition,
    meta: { username: 'xiaoming' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;