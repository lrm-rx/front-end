<template>
  <div>
    hello middle
    <my-inject></my-inject>
  </div>
</template>

<script>
import Inject from '@/19_Inject.vue'
  export default {
    components: {
      'my-inject': Inject
    }
  }
</script>

<style scoped>

</style>