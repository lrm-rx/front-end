<template>
  <div>
    <h2>hello inject</h2>
    <div>{{ count }}</div>
  </div>
</template>

<script setup>

import { inject } from 'vue'

let count = inject('count')
let changeCount = inject('changeCount')
/* setTimeout(()=>{
  count.value = 1;
}, 2000) */

setTimeout(()=>{
  changeCount();
}, 2000);

</script>

<style lang="scss" scoped>

</style>