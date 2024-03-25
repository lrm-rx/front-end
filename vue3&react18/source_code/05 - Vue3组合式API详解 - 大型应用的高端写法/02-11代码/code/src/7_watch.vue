<template>
  <div>
    <h2>watch</h2>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';


let count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

setTimeout(()=>{
  count.value = 1;
}, 2000)
</script>

<style lang="scss" scoped>

</style>