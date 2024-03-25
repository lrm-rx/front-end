# 组合式API中使用Router和Vuex注意事项

前面介绍的路由和状态管理都是在选项式API中进行使用的，那么路由和状态管理在组合式API中使用的时候，需要注意哪些问题呢？

主要就是路由会提供两个use函数，分别为：useRoute和useRouter；同理状态管理页提供了一个use函数，useStore来操作的。

先来看一下路由相关use函数的使用情况：

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();
console.log( route.meta );
console.log( router.getRoutes() );
</script>
```

基本上跟选项式API中的用法是一样的，并没有太大的区别。

再来看一下状态管理相关use函数的使用情况：

```vue
<script setup>
import { useStore } from 'vuex'
const store = useStore();
console.log( store.state.count );
console.log( store.state.message.msg );
</script>
```

得到store对象，接下来的操作也是跟选项式API中使用的是一样的。
