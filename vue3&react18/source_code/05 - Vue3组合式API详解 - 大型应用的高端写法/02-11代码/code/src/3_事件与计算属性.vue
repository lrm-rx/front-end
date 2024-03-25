<template>
  <div>
    <button @click="handleChange">点击</button>
    {{ count }}, {{ doubleCount }}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

let count = ref(0);
let doubleCount = computed(()=> count.value * 2)

let handleChange = () => {
  count.value += 1;
};
</script>

<style lang="scss" scoped>

</style>