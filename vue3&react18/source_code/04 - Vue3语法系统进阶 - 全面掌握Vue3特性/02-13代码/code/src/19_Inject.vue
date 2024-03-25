<template>
  <div>
    hello inject, {{ message }}, {{ count }}
  </div>
</template>

<script>
  export default {
    inject: ['message', 'getInfo', 'count'],
    mounted(){
      this.getInfo('hello inject');
    }
  }
</script>

<style scoped>

</style>