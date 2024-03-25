import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import _ from 'lodash'
import store from '@/store'
import type { StateAll } from '@/store'

const Login = () => import('@/views/Login/Login.vue');
const Home = () => import('@/views/Home/Home.vue');
const Sign = () => import('@/views/Sign/Sign.vue');
const Exception = () => import('@/views/Exception/Exception.vue');
const Apply = () => import('@/views/Apply/Apply.vue');
const Check = () => import('@/views/Check/Check.vue');
const NotAuth = () => import('@/views/NotAuth/NotAuth.vue');
const NotFound = () => import('@/views/NotFound/NotFound.vue');
const NotServer = () => import('@/views/NotServer/NotServer.vue');

declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean
    title?: string
    icon?: string 
    auth?: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/sign',
    meta: {
      menu: true,
      title: '考勤管理',
      icon: 'document-copy',
      auth: true
    },
    children: [
      {
        path: 'sign',
        name: 'sign',
        component: Sign,
        meta: {
          menu: true,
          title: '在线打卡签到',
          icon: 'calendar',
          auth: true
        },
        async beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const signsInfos = (store.state as StateAll).signs.infos;
          const newsInfo = (store.state as StateAll).news.info;
          if( _.isEmpty(signsInfos) ){
            const res = await store.dispatch('signs/getTime', { userid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('signs/updateInfos', res.data.infos)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(newsInfo) ){
            const res = await store.dispatch('news/getRemind', { userid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('news/updateInfo', res.data.info)
            }
            else{
              return;
            }
          }
          next()
        }
      },
      {
        path: 'exception',
        name: 'exception',
        component: Exception,
        meta: {
          menu: true,
          title: '异常考勤查询',
          icon: 'warning',
          auth: true,
        },
        async beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const signsInfos = (store.state as StateAll).signs.infos;
          const checksApplyList = (store.state as StateAll).checks.applyList;
          const newsInfo = (store.state as StateAll).news.info;
          if( _.isEmpty(signsInfos) ){
            const res = await store.dispatch('signs/getTime', { userid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('signs/updateInfos', res.data.infos)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(checksApplyList) ){
            const res = await store.dispatch('checks/getApply', { applicantid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('checks/updateApplyList', res.data.rets)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(newsInfo) ){
            const res = await store.dispatch('news/getRemind', { userid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('news/updateInfo', res.data.info)
            }
            else{
              return;
            }
          }
          next()
        }
      },
      {
        path: 'apply',
        name: 'apply',
        component: Apply,
        meta: {
          menu: true,
          title: '添加考勤审批',
          icon: 'document-add',
          auth: true,
        },
        async beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const checksApplyList = (store.state as StateAll).checks.applyList;
          const newsInfo = (store.state as StateAll).news.info;
          if( _.isEmpty(checksApplyList) ){
            const res = await store.dispatch('checks/getApply', { applicantid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('checks/updateApplyList', res.data.rets)
            }
            else{
              return;
            }
          }
          if( newsInfo.applicant ){
            const res = await store.dispatch('news/putRemind', { userid: usersInfos._id, applicant: false })
            if(res.data.errcode === 0){
              store.commit('news/updateInfo', res.data.info)
            }
            else{
              return;
            }
          }
          next()
        }
      },
      {
        path: 'check',
        name: 'check',
        component: Check,
        meta: {
          menu: true,
          title: '我的考勤审批',
          icon: 'finished',
          auth: true,
        },
        async beforeEnter(to, from, next){
          const usersInfos = (store.state as StateAll).users.infos;
          const checksCheckList = (store.state as StateAll).checks.checkList;
          const newsInfo = (store.state as StateAll).news.info;
          if( _.isEmpty(checksCheckList) ){
            const res = await store.dispatch('checks/getApply', { approverid: usersInfos._id })
            if(res.data.errcode === 0){
              store.commit('checks/updateCheckList', res.data.rets)
            }
            else{
              return;
            }
          }
          if( newsInfo.approver ){
            const res = await store.dispatch('news/putRemind', { userid: usersInfos._id, approver: false })
            if(res.data.errcode === 0){
              store.commit('news/updateInfo', res.data.info)
            }
            else{
              return;
            }
          }
          next()
          
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/403',
    name: 'notAuth',
    component: NotAuth
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/500',
    name: 'notServer',
    component: NotServer
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const token = (store.state as StateAll).users.token;
  const infos = (store.state as StateAll).users.infos;
  if( to.meta.auth && _.isEmpty(infos) ){
    if(token){
      store.dispatch('users/infos').then((res)=>{
        if(res.data.errcode === 0){
          store.commit('users/updateInfos', res.data.infos)
          if(res.data.infos.permission.includes(to.name)){
            next()
          }
          else{
            next('/403')
          }
        }
      });
    }
    else{
      next('/login');
    }
  }
  else{
    if( token && to.path === '/login' ){
      next('/');
    }
    else{
      next();
    }
  }

})

export default router
