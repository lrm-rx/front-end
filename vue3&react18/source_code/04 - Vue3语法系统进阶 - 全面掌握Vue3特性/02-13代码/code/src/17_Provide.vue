<template>
  <div>
    hello provide
    <my-middle></my-middle>
  </div>
</template>

<script>
import Middle from '@/18_Middle.vue'
  export default {
    data(){
      return {
        count: 123
      }
    },
    components: {
      'my-middle': Middle
    },
    // provide: {
    //   message: 'hello provide',
    //   count: this.count,
    //   getInfo(data){
    //     console.log(data);
    //   }
    // }
    provide(){
      return {
        message: 'hello provide',
        count: this.count,
        getInfo(data){
          console.log(data);
        }
      }
    }
  }
</script>

<style scoped>

</style>