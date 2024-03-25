# Umi4框架介绍与基本使用

## Umi4框架

Umi，中文发音为「乌米」，是可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。

官方网址：https://umijs.org/

在前面我们学习的React官方脚手架create-react-app，只是一个简易的环境，很多功能都需要安装第三方模块来实现。那么Umi4框架把很多功能做了高度的集成，所以开发人员可以更好的把经历用在具体业务开发上，Umi4会帮我们集成好很多通用的功能。

## Umi4基本使用

首先Umi4框架要求nodejs版本在14以上。

然后通过npm进行框架的安装，这里推荐采用pnpm进行安装，需要先安装一下pnpm。

```shell
npm i -g pnpm
pnpm dlx create-umi@latest
```

安装成功后会显示下面的界面。

<div align=center>
    <img src="./img/18-06-Umi4初始界面.png" />
    <div>Umi4初始界面</div>
</div>

安装好脚手架后，在根目录下会看到`.umirc.ts`这个文件，这是Umi4的配置文件，可以改变一些默认行为和设置一些功能。

在Umi4中提供了约定式路由和配置式路由两种方式。

约定式路由要求，约定`pages`下所有的`(j|t)sx`文件即路由。使用约定式路由，意味着不需要维护，可怕的路由配置文件。最常用的有基础路由和动态路由。

```shell
+ pages/
  + users/
    - index.js
  - index.js
```

等价于下面的配置路由。

```typescript
[
  { path: '/', component: './pages/index.js' },
  { path: '/users/', component: './pages/users/index.js' },
];
```

配置式路由操作起来会更加的灵活，满足各种复杂的需求。我们需要在`.umirc.ts`文件中进行路由的配置。

```typescript
export default {
  npmClient: 'pnpm',
  clientLoader: {},
  routes: [
    { path: '/user', component: 'user' },
    { 
      path: '/login', 
      component: '@/pages/login',
      routes: [
        {
          path: 'foo',
          component: '@/pages/foo',
          wrappers: [
            '@/wrappers/auth',
          ]
        }
      ]
    },
  ]
};
```

