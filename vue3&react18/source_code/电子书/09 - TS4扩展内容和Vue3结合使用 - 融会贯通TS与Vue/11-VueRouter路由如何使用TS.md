# VueRouter路由如何使用TS

在安装脚手架的时候，可以选择自定义安装中，就会有路由的导入，这样在脚手架下就会有一个`/router/index.ts`这个路由配置文件。

## 路由与TS

大多数情况下，路由都帮我们做了自动类型推断，那么路由给我们提供了很多内置的路由类型，如下：

- RouteRecordRaw -> 路由表选项类型
- RouteMeta -> 扩展meta的类型
- RouterOptions -> createRouter的配置类型
- RouteLocationNormalized -> 标准化的路由地址
- Router -> router实例的类型

`RouteRecordRaw`是对路由表选项类型进行设置的，可以规范路由表的类型，需要我们自己进行类型注解。

```typescript
// router/index.ts
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]
```

我们经常要自己定义meta元信息的类型，做法如下：

```typescript
declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean
  }
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  }
]
```

引入`declare module 'vue-router'`进行内部的合并处理，从而限定了meta原信息的类型，并且它是一种类型兼容性的方式。

`RouterOptions `是createRouter的配置类型，这样在编写createRouter的时候就会自动进行类型推断。

```typescript
// (alias) createRouter(options: RouterOptions): Router import createRouter
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
```

`RouteLocationNormalized `是标准化的路由地址，在路由守卫和获取路由地址的情况下自动推断好。

```typescript
// (parameter) to: RouteLocationNormalized
// (parameter) from: RouteLocationNormalized
router.beforeEach((to, from, next)=>{
});
```

`Router `规范router实例的类型，在我们使用路由提供use函数，并产生router对象时自动推断产生。

```vue
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
// const router: Router
const router = useRouter();
</script>
```

这样当我们使用router对象的时候，会自动带有提示，并且我们不按照推断的形式进行设置属性，也会很好的给出提示错误。

包括具体方法的参数也会有类型限定，例如：`router.push()`传递正确的参数才可以。	

总结一下路由与TS：官方提供的路由模块已经提供了大量写好的类型，一般都是自动推断好的，除非有一些值是需要我们手动指定的，需要进行类型注解，例如：routes路由表。
