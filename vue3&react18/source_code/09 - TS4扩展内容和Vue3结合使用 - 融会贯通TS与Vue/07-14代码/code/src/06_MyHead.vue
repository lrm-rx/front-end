<template>
  <div>
    Head Component
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// 1. 
// defineProps({
//   count: [Number, String]
// });

//2. 
interface Props {
  count: number|string
  list: {username: string; age: number}[]
}

interface Emits {
  (e: 'get-data', payload: string): void
}

defineProps<Props>();

let emit = defineEmits<Emits>();

emit('get-data', 'hello');
</script>

<style scoped>

</style>