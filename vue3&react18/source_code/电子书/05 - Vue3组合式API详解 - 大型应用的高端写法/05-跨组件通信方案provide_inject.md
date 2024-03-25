# 跨组件通信方案provide_inject

## 依赖注入

在Vue中把跨组件通信方案provide_inject也叫做依赖注入的方式，前面我们在选项式中也学习了它的基本概念，下面看一下在组合式API中改如何使用。

```vue
// provide.vue
<template>
  <div>
    <my-inject></my-inject>
  </div>
</template>
<script setup>
import MyInject from '@/inject.vue'
import { provide, ref, readonly } from 'vue'
//传递响应式数据
let count = ref(0);
let changeCount = () => {
  count.value = 1;
}
provide('count', readonly(count))
provide('changeCount', changeCount)

setTimeout(()=>{
  count.value = 1;
}, 2000)
</script>

//inject.vue
<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
let count = inject('count')
let changeCount = inject('changeCount')
setTimeout(()=>{
  changeCount();
}, 2000);

</script>
```

依赖注入使用的时候，需要注意的点：

- 不要在inject中修改响应式数据，可利用回调函数修改
- 为了防止可设置成 readonly

