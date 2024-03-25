<template>
  <div>
    <h2>自定义指令</h2>
    <div @click="handleClick" v-color="color">aaaaaaa</div>
    <button v-auth="'edit'">编辑</button>
  </div>
</template>

<script>
  //import { get } from '@/5_http.js'
  export default {
    data(){
      return {
        color: 'red'
      }
    },
    methods: {
      handleClick(){
        //this.color = 'blue';
        //get();
        this.$http.get();
      }
    },  
    //创建局部的自定义指令
    directives: {
      /* color: {
        mounted(el, binding){
          el.style.background = binding.value
        },
        updated(el, binding){
          el.style.background = binding.value
        }
      } */
      color: (el, binding) => {
        el.style.background = binding.value
      },
      // auth: (el, binding) => {
      //   let auths = ['delete'];
      //   let ret = auths.includes(binding.value);
      //   if(!ret){
      //     el.style.display = 'none';
      //   }
      // }
    }
  }
</script>

<style scoped>

</style>