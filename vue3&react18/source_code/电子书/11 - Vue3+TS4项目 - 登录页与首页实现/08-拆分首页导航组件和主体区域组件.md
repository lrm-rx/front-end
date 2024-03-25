# 拆分首页导航组件和主体区域组件


## 首页导航组件

```vue
<!-- /views/Home/components/HomeBreadcrumb.vue -->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">{{ item.meta?.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const breadcrumbs = computed(()=> route.matched)
</script>
<style scoped lang="scss">
.el-breadcrumb {
    background: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
</style>
```

主要完成动态面包屑的功能，后面小节详解。

## 主体区域组件

```vue
<!-- /views/Home/components/HomeMain.vue -->
<template>
  <div class="home-main">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.home-main {
    margin-top: 20px;
    background: #fff;
    flex-grow: 1;
    position: relative;
}
</style>
```

主体主要是进行二级路由切换的区域，使用路由的`<router-view>`。
