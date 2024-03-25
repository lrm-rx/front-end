import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { useSignsStore } from '@/stores/signs'
import { useNewsStore } from '@/stores/news'
import { useChecksStore } from '@/stores/checks'
import { storeToRefs } from 'pinia';
import _ from 'lodash'

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
          const usersStore = useUsersStore()
          const signsStore = useSignsStore()
          const newsStore = useNewsStore()
          const { infos: usersInfos } = storeToRefs(usersStore)
          const { infos: signsInfos } = storeToRefs(signsStore)
          const { info: newsInfo } = storeToRefs(newsStore)
          if( _.isEmpty(signsInfos.value) ){
            const res = await signsStore.getTimeAction({ userid: usersInfos.value._id })
            if(res.data.errcode === 0){
              signsStore.updateInfos(res.data.infos)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(newsInfo.value) ){
            const res = await newsStore.getRemindAction({ userid: usersInfos.value._id })
            if(res.data.errcode === 0){
              newsStore.updateInfo(res.data.info)
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
          const usersStore = useUsersStore()
          const signsStore = useSignsStore()
          const newsStore = useNewsStore()
          const checksStore = useChecksStore()
          const { infos: usersInfos } = storeToRefs(usersStore)
          const { infos: signsInfos } = storeToRefs(signsStore)
          const { info: newsInfo } = storeToRefs(newsStore)
          const { applyList: checksApplyList } = storeToRefs(checksStore)        
          if( _.isEmpty(signsInfos.value) ){
            const res = await signsStore.getTimeAction({ userid: usersInfos.value._id })
            if(res.data.errcode === 0){
              signsStore.updateInfos(res.data.infos)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(checksApplyList.value) ){
            const res = await checksStore.getApplyAction({ applicantid: usersInfos.value._id })
            if(res.data.errcode === 0){
              checksStore.updateApplyList(res.data.rets)
            }
            else{
              return;
            }
          }
          if( _.isEmpty(newsInfo.value) ){
            const res = await newsStore.getRemindAction({ userid: usersInfos.value._id })
            if(res.data.errcode === 0){
              newsStore.updateInfo(res.data.info)
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
          const usersStore = useUsersStore()
          const checksStore = useChecksStore()
          const newsStore = useNewsStore()
          const { infos: usersInfos } = storeToRefs(usersStore)
          const { applyList: checksApplyList } = storeToRefs(checksStore)
          const { info: newsInfo } = storeToRefs(newsStore)
          if( _.isEmpty(checksApplyList.value) ){
            const res = await checksStore.getApplyAction({ applicantid: usersInfos.value._id })
            if(res.data.errcode === 0){
              checksStore.updateApplyList(res.data.rets)
            }
            else{
              return;
            }
          }
          if( newsInfo.value.applicant ){
            const res = await newsStore.putRemindAction({ userid: usersInfos.value._id, applicant: false })
            if(res.data.errcode === 0){
              newsStore.updateInfo(res.data.info)
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
          const usersStore = useUsersStore()
          const checksStore = useChecksStore()
          const newsStore = useNewsStore()
          const { infos: usersInfos } = storeToRefs(usersStore)
          const { checkList: checksCheckList } = storeToRefs(checksStore)
          const { info: newsInfo } = storeToRefs(newsStore)
          if( _.isEmpty(checksCheckList.value) ){
            const res = await checksStore.getApplyAction({ approverid: usersInfos.value._id })
            if(res.data.errcode === 0){
              checksStore.updateCheckList(res.data.rets)
            }
            else{
              return;
            }
          }
          if( newsInfo.value.approver ){
            const res = await newsStore.putRemindAction({ userid: usersInfos.value._id, approver: false })
            if(res.data.errcode === 0){
              newsStore.updateInfo(res.data.info)
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const usersStore = useUsersStore()
  const { token, infos } = storeToRefs(usersStore)
  if( to.meta.auth && _.isEmpty(infos.value) ){
    if(token.value){
      usersStore.infosAction().then((res)=>{
        if(res.data.errcode === 0){
          usersStore.updateInfos(res.data.infos)
          if(res.data.infos.permission.includes(to.name)){
            next()
          }
          else{
            next('/403')
          }
        }
      })
    }
    else{
      next('/login');
    }
  }
  else{
    if( token.value && to.path === '/login' ){
      next('/');
    }
    else{
      next();
    }
  }
})

export default router
