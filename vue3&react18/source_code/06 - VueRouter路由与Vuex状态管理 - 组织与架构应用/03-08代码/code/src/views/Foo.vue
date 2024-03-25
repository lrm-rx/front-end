<template>
  <div>
    about foo {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    name: 'FooView',
    mounted(){
      // console.log( this.$route.meta.auth );
    },
    beforeRouteEnter(to, from, next){
      if(to.meta.auth){
        next('/');
      }
      else{
        next();
      }
    }
  }
</script>

<style scoped>

</style>