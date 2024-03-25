
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Foo from '@/views/Foo.vue'
import Bar from '@/views/Bar.vue'
import Baz from '@/views/Baz.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'foo/:id',
        name: 'foo',
        component: Foo,
        meta: { auth: true },
        /* beforeEnter(to, from, next){
          if(to.meta.auth){
            next('/');
          }
          else{
            next();
          }
        } */
      },
      {
        path: 'bar',
        name: 'bar',
        components: {
          default: Bar,
          baz: Baz
        },
        meta: { auth: false },
        /* beforeEnter(to, from, next){
          if(to.meta.auth){
            next('/');
          }
          else{
            next();
          }
        } */
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* router.beforeEach((to, from, next)=>{
  //console.log(to, from);
  if(to.meta.auth){
    next('/');
  }
  else{
    next();
  }
}) */

export default router;