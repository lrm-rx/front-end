<template>
  <ul class="rate">
    <li v-for="index in max" :key="index" @mouseenter=" $emit('update:modelValue', index) " @mouseleave=" $emit('update:modelValue', initValue) " @click=" initValue = index "><i :class="rateClass(index)"></i></li>
  </ul>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
  export default {
    data(){
      return {
        initValue: this.modelValue
      }
    },
    props: {
      max: {
        type: Number,
        default: 5
      },
      modelValue: {
        type: Number,
        default: 0
      }
    },
    emits: ['update:modelValue'],
    methods: {
      rateClass(index){
        return {
          iconfont: true,
          'icon-xingxing': true,
          active: this.modelValue >= index
        }
      }
    }
  }
</script>

<style scoped>
.rate{
  display: flex;
  list-style: none;
}
.rate i{
  font-size: 30px;
  color: #ccc;
}
.rate .active{
  color: blueviolet;
}
</style>