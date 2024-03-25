<template>
  <div>
    <h2>Hello 02</h2>
    <my-head :count="count" :list="list" @get-data="getData"></my-head>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHead from './03_MyHead.vue'
export default defineComponent({
  data(){
    return {
      count: 0,
      list: [
        {username: 'xiaoming', age: 20}
      ]
    }
  },
  components: {
    MyHead
  },
  methods: {
    getData(payload: string){
      console.log( payload );
    }
  }
});
</script>

<style scoped>

</style>