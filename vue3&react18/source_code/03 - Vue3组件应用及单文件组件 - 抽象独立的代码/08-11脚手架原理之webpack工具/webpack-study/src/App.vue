<template>
  <div @click="handleClick" class="title">
    {{ message }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'hello world'
    }
  },
  methods: {
    handleClick(){
      this.message = 'hi vue'
    }
  }
}
</script>

<style>
.title{
  background: pink;
}
</style>