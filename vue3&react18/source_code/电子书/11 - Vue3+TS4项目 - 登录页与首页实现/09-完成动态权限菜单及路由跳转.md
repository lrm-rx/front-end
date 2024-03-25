# 完成动态权限菜单及路由跳转


## 完成动态权限菜单

首先在路由配置表中通过`meta`元信息来设置路由跟菜单的关系，如果具备`menu: true`字段表示需要进行菜单渲染。

```typescript
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
    }
  }
  ...
]
```

在`HomeAside.vue`页面进行路由与菜单的结合渲染。

```vue
<!-- /views/Home/components/HomeAside.vue -->
<script setup lang="ts">
import _ from 'lodash'
import { useRouter, useRoute } from 'vue-router';
import type { RouteRecordName } from 'vue-router';
import { useStore } from '@/store';
const router = useRouter();
const route = useRoute();
const store = useStore();
const permission = store.state.users.infos.permission;
const menus = _.cloneDeep(router.options.routes).filter((v)=> {
  v.children = v.children?.filter((v)=> v.meta?.menu && (permission as (RouteRecordName|undefined)[]).includes(v.name));
  return v.meta?.menu && (permission as (RouteRecordName|undefined)[]).includes(v.name);
})
</script>
```

在我们的逻辑中，其中`menus`就是一个菜单所需要的一个格式要求，然后把`menus`设置到菜单组件上，这样就可以渲染出指定的菜单项了。

那么菜单该如何进行路由切换呢？在菜单组件`el-menu`上会有一个router属性，可以用于菜单映射路由跳转。

```vue
<el-menu :default-active="route.fullPath" router>
</el-menu>
```

## 不同角色对应不同的菜单

这里要从`/users/infos`这个后端接口中获取到用户的权限信息，并把用户对应的权限信息跟菜单进行筛选操作。

```ts
const permission = store.state.users.infos.permission;
const menus = _.cloneDeep(router.options.routes).filter((v)=> {
  v.children = v.children?.filter((v)=> v.meta?.menu && (permission as (RouteRecordName|undefined)[]).includes(v.name));
  return v.meta?.menu && (permission as (RouteRecordName|undefined)[]).includes(v.name);
})
```

这样不同的角色就可以渲染不同的菜单项啦。
