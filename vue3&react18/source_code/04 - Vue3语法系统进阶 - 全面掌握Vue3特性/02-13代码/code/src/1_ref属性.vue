<template>
  <div>
    <h2>ref属性</h2>
    <button @click="handleClick">点击</button>
    <div ref="elem">aaaaaaaaa</div>
    <div ref="elem2">bbbbbbbbb</div>
    <my-head ref="elem3"></my-head>
  </div>
</template>

<script>
  import MyHead from '@/2_头部组件.vue'
  export default {
    methods: {
      handleClick(){
        // ref属性添加到元素身上，可以获取到当前元素的原生DOM
        //console.log( this.$refs.elem );
        //console.log( this.$refs.elem2 );
        // ref属性添加到组件身上，可以获取到当前组件的vm对象(实例对象)
        //console.log( this.$refs.elem3 );
        //console.log( this.$refs.elem3.message );
        //this.$refs.elem3.handleMessage('根组件的数据');
        //$attrs $refs 也可以实现间接的父子通信
      }
    },
    components: {
      MyHead
    }
  }
</script>

<style scoped>

</style>