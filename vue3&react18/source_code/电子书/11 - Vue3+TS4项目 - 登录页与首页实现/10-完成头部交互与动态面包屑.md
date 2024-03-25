# 完成头部交互与动态面包屑


## 头部交互

主要就是退出功能的实现，代码如下：

```vue
<!-- /views/Home/components/HomeHeader.vue -->
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
```

handleLogout就是点击退出按钮的时候所触发的事件方法，在方法中第一步需求清空token，第二步就是跳转到`/login`页面，并刷新页面，目的就是还原所有的共享状态。

## 动态面包屑

根据路由切换的页面不同，面包屑会动态发生改变，代码如下：

```vue
<!-- /views/Home/components/HomeBreadcrumb.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const breadcrumbs = computed(()=> route.matched)
</script>
```

这里通过`route.matched`直接拿到所有路由的展开数组，然后再渲染到面包屑组件`el-breadcrumb`。





