# 拆分首页头部组件和侧边栏组件


## 拆分首页组件

先在`/views/Home/Home.vue`中创建一个`components`文件夹，用于拆分`Home.vue`中的一些子组件。

拆分后的组件有：

- /views/Home/components/HomeAside.vue -> 首页侧边栏
- /views/Home/components/HomeBreadcrumb.vue -> 首页面包屑
- /views/Home/components/HomeHeader.vue -> 首页头部
- /views/Home/components/HomeMain.vue -> 首页主体

首页对`Home.vue`页面添加布局组件，用于划分以上组件并渲染。

```vue
<!-- /views/Home/Home.vue -->
<template>
  <el-container>
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-aside>
        <home-aside></home-aside>
      </el-aside>
      <el-main>
        <home-breadcrumb></home-breadcrumb>
        <home-main></home-main>
      </el-main>
    </el-container>
  </el-container>
</template>
```

## 编写首页头部组件

```vue
<!-- /views/Home/components/HomeHeader.vue -->
<template>
  <div class="home-header">
    <span class="home-header-logo">
      <i class="iconfont icon-vue"></i>
      <i class="iconfont icon-icon-test"></i>
      <i class="iconfont icon-typescript"></i>
    </span>
    <span class="home-header-title">在线考勤系统</span>
    <el-dropdown>
      <el-badge>
        <el-icon :size="20"><Bell /></el-icon>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>暂无消息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <el-space class="home-header-space">
        <el-avatar :src="(head as string)" /> {{ name }}
      </el-space>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';
const store = useStore();
const head = computed(()=> store.state.users.infos.head)
const name = computed(()=> store.state.users.infos.name)
const handleLogout = () => {
  store.commit('users/clearToken')
  setTimeout(()=>{
    window.location.replace('/login')
  }, 500)
}
</script>
<style scoped lang="scss">
.home-header{
  font-size: 34px;
  display: flex;
  align-items: center;
  height: 100%;
  .home-header-logo {
      .icon-vue,
      .icon-icon-test,
      .icon-typescript {
        margin-right: 5px;
        font-size: inherit;
      }
      .icon-vue {
        color: green;
      }
      .icon-icon-test {
        color: #deb887;
      }
      .icon-typescript {
        color: blue;
      }
    }
    .home-header-title {
      margin-left: 30px;
      font-weight: 700;
      font-size: 18px;
      margin-right: auto;
    }
    .home-header-space{
      margin-left: 20px;
    }
}
</style>
```

在头部组件中，主要有退出登录的交互效果，后面小节详解。

## 侧边栏组件

```vue
<!-- /views/Home/components/HomeAside.vue -->
<template>
  <el-menu :default-active="route.fullPath" router>
    <el-sub-menu v-for="item in menus" :key="item.path" :index="item.path">
      <template #title>
        <el-icon><component :is="item.meta?.icon"></component></el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <el-menu-item v-for="itemChild in item.children" :key="item.path + itemChild.path" :index="item.path + itemChild.path">
        <el-icon><component :is="itemChild.meta?.icon"></component></el-icon>
        <span>{{ itemChild.meta?.title }}</span> 
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
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
<style scoped lang="scss">
.el-menu{
  height: calc(100vh - 60px);
  border: none;
  padding-top: 30px;
}
.el-menu-item.is-active{
  background: #e6f7ff;
  border-right: 3px solid #1890ff;
}
</style>
```

侧边栏组件，主要的逻辑是动态菜单的渲染，后面小节详解。



