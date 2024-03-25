<template>
  <div>
    <h2>插件</h2>
    <button @click=" $http.get() " v-auth="'edit'">编辑</button>
    <my-head></my-head>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>