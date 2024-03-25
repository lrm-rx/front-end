<template>
  <div>
    <h2>use函数</h2>
    <div>{{ count }}, {{ doubleCount }}</div>
  </div>
</template>

<script setup>

import useCounter from '@/compotables/useCounter.js'

let { count, doubleCount } = useCounter(123);

setTimeout(()=>{
  count.value += 1;
}, 2000);
</script>

<style lang="scss" scoped>

</style>