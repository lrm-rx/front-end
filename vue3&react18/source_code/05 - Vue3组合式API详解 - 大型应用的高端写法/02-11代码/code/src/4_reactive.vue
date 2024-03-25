<template>
  <div>
    <h2>reactive</h2>
    {{ state.count }}, {{ count }}
  </div>
</template>

<script setup>
//import { reactive, toRefs, toRef } from 'vue';
import { reactive, toRef } from 'vue';


let state = reactive({
  count: 0,
  message: 'hi vue'
})

//let { count } = toRefs(state);   //  let count = ref(0)
let count = toRef(state, 'count');

setTimeout(() => {
  //state.count += 1;
  count.value += 1;
}, 1000)

</script>

<style lang="scss" scoped>

</style>
