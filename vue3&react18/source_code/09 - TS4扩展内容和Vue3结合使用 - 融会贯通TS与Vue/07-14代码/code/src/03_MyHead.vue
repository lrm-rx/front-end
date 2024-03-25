<template>
  <div>
    Head Component
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface List {
  username: string
  age: number
}

export default defineComponent({
  props: {
    count: [Number, String],
    list: Object as PropType<List[]>
  },
  //emits: ['get-data'],
  emits: {
    'get-data'(payload: string){ return payload.length > 0 }
  },
  mounted(){
    this.$emit('get-data', 'hello');
  }
})
</script>

<style scoped>

</style>