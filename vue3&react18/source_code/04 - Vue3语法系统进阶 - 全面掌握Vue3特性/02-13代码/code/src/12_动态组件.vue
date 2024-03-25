<template>
  <div>
    <h2>动态组件</h2>
    <button @click=" nowCom = 'my-com1' ">组件1</button>
    <button @click=" nowCom = 'my-com2' ">组件2</button>
    <button @click=" nowCom = 'my-com3' ">组件3</button>
    <transition name="slide" mode="out-in">
      <keep-alive>
        <component :is="nowCom"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import MyCom1 from '@/13_MyCom1.vue'
import MyCom2 from '@/14_MyCom2.vue'
import MyCom3 from '@/15_MyCom3.vue'
  export default {
    data(){
      return {
        nowCom: 'my-com1'
      }
    },
    components: {
      'my-com1': MyCom1,
      'my-com2': MyCom2,
      'my-com3': MyCom3
    }
  }
</script>

<style scoped>
.slide-enter-from{
  opacity: 0;
  transform: translateX(200px);
}
.slide-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active{
  transition: 1s;
}

.slide-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to{
  opacity: 0;
  transform: translateX(200px);
}
.slide-leave-active{
  transition: 1s;
}
</style>