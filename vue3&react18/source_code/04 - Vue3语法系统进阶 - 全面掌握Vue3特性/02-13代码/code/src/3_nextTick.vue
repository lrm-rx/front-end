<template>
  <div>
    <h2>hello nextTick</h2>
    <div ref="elem">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: 'hello world'
      }
    },
    mounted(){
      setTimeout(()=>{
        this.message = 'hi vue';
        /* this.$nextTick(()=>{
          console.log( this.$refs.elem.innerHTML );
        }) */
        this.$nextTick().then(()=>{
          console.log( this.$refs.elem.innerHTML );
        })
      }, 2000)
    },
    updated(){
       //console.log( this.$refs.elem.innerHTML );
    }
  }
</script>

<style scoped>

</style>