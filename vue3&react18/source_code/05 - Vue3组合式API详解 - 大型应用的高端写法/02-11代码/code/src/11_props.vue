<template>
  <div>
    <h2>父子通信</h2>
    <my-child :count="0" message="hello world" @custom-click="handleClick"></my-child>
  </div>
</template>

<script setup>
import MyChild from '@/12_child.vue'

let handleClick = (data) => {
  console.log(data);
};
</script>

<style lang="scss" scoped>

</style>