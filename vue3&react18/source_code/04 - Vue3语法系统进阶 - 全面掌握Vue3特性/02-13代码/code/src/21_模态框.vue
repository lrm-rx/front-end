<template>
  <div>
    <button @click=" isShow = true ">点击</button>
    <teleport to="body">
      <div v-if="isShow">模态框</div>
    </teleport>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: false
      }
    }
  }
</script>

<style scoped>

</style>