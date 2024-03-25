<template>
  <div>
    <h2>Hello 05</h2>
    <my-head :count="count" :list="list" @get-data="getData"></my-head>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyHead from './06_MyHead.vue'

let count = ref('0');
let list = ref([{username: 'xiaoming', age: 20}]);
let getData = (payload: string) => {
  console.log( payload );
}

</script>

<style scoped>

</style>