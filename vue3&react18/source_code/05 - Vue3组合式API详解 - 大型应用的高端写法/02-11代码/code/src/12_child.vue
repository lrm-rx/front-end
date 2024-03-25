<template>
  <div>
    <h2>hi child, {{ count }}, {{ message }}</h2>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'

const state = defineProps({   // defineProps -> 底层 -> reactive响应式处理的
  count: {
    type: Number
  },
  message: {
    type: String
  }
});

console.log( state.count, state.message );

const emit = defineEmits(['custom-click']);

setTimeout(()=>{
  emit('custom-click', '子组件的数据');
}, 2000)

</script>

<style lang="scss" scoped>

</style>