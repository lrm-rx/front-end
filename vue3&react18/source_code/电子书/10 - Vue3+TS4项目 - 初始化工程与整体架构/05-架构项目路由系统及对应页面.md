# 架构项目路由系统及对应页面

## 项目的页面

- Login.vue -> 登录页面
- Home.vue -> 后台首页
- Sign.vue -> 在线打卡签到
- Exception.vue -> 异常考勤查询
- Apply.vue -> 添加考勤审批
- Check.vue -> 我的考勤审批

这些页面我们在`/views`文件夹下进行创建。

<div align=center>
    <img src="./img/10-03-项目页面.png" />
    <div>项目页面</div>
</div>

## 路由配置

在脚手架`/router/index.ts`页面进行路由的初始配置，代码如下：

```typescript
// /router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Login = () => import('@/views/Login/Login.vue');
const Home = () => import('@/views/Home/Home.vue');
const Sign = () => import('@/views/Sign/Sign.vue');
const Exception = () => import('@/views/Exception/Exception.vue');
const Apply = () => import('@/views/Apply/Apply.vue');
const Check = () => import('@/views/Check/Check.vue');
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
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
```

这里我们还指定了`meta`元信息，为了后续我们动态菜单所要采用的路由数据做准备，到此我们的路由配置就完成了。
