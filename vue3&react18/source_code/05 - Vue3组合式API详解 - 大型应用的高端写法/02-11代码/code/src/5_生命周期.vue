<template>
  <div>
    <h2>生命周期</h2>
    <div ref="elem">{{ count }}</div>
  </div>
</template>

<script setup>
/* import { onBeforeMount, onMounted, ref } from 'vue';

let count = ref(0);
let elem = ref();

onBeforeMount(()=>{
  console.log( count.value );
  console.log( elem.value );
});

onMounted(()=>{
  console.log( count.value );
  console.log( elem.value );
});
 */

import { onMounted, ref } from 'vue';

let count = ref(0);
let elem = ref();

onMounted(()=>{
  console.log( count.value );
});

onMounted(()=>{
  console.log( count.value );
});

onMounted(()=>{
  console.log( count.value );
});

</script>

<style lang="scss" scoped>

</style>