<template>
  <div>
    <h2>Hello 01</h2>
    <button @click="handleClick(5)">点击</button>
    {{ count }}, {{ doubleCount }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Count = number | string;
interface List {
  username: string
  age: number
}
export default defineComponent({
  data(){
    return {
      count: 0 as Count,
      list: [] as List[]
    }
  },
  mounted(){
    this.count = 2
    this.list.push({
      username: 'xiaoming',
      age: 20
    });
  },
  computed: {
    doubleCount(): number|string{
      if(typeof this.count === 'number'){
        return this.count * 2;
      }
      else{
        return this.count;
      }
    }
  },
  methods: {
    handleClick(n: number){
      if(typeof this.count === 'number'){
        this.count += n;
      }
    }
  }
});
</script>

<style scoped>

</style>