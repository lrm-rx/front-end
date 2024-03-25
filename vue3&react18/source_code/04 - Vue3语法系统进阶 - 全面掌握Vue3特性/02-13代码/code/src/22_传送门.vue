<template>
  <div>
    <h2>传送门</h2>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import modal from '@/24_modal.js'
export default {
  methods: {
    handleClick(){
      modal();
    }
  }
}
</script>

<style scoped>

</style>