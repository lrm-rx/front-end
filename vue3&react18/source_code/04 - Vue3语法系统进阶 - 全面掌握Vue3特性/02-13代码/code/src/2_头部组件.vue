<template>
  <div>
    hello myhead
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: '头部组件的消息'
      }
    },
    methods: {
      handleMessage(data){
        console.log(data);
      }
    }
  }
</script>

<style scoped>

</style>