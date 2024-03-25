<template>
  <div>
    <h2>mixin混入</h2>
    <div>{{ message }}</div>
    <div>{{ message2 }}</div>
  </div>
</template>

<script>
  import { myMixin } from '@/7_mymixin.js'
  export default {
    mixins: [myMixin]
  }
</script>

<style scoped>

</style>