<template>
  <div>
    <h2>Hello 03</h2>
    <button @click="handlClick(5)">点击</button>
    {{ count }}, {{ doubleCount }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';


// let count = ref<number|string>(0);
// count.value = 'hello';

// interface List {
//   username: string
//   age: number
// }

// let list = ref<List[]>([]);

// list.value.push({
//   username: 'xiaoming',
//   age: 20
// });

let count = ref(0);
let doubleCount = computed(()=> count.value * 2);
let handlClick = (n: number) => {
  count.value += n;
}

</script>

<style scoped>

</style>