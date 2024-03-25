<template>
  <div>
    <my-inject></my-inject>
  </div>
</template>

<script setup>

import MyInject from '@/9_inject.vue'
import { provide, ref, readonly } from 'vue'

//provide('count', 0)

//传递响应式数据

let count = ref(0);

let changeCount = () => {
  count.value = 1;
}

provide('count', readonly(count))
provide('changeCount', changeCount)

/* setTimeout(()=>{
  count.value = 1;
}, 2000) */


</script>

<style lang="scss" scoped>

</style>