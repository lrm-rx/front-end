
import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/views/Todo.vue'
import Complete from '@/views/Complete.vue'
import Incomplete from '@/views/Incomplete.vue'

const routes = [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: Todo
  },
  {
    path: '/complete',
    component: Complete
  },
  {
    path: '/incomplete',
    component: Incomplete,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;