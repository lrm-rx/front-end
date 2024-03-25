<template>
  <div>
    <h2>异步组件</h2>
    <button @click=" nowCom = 'my-com1' ">组件1</button>
    <button @click=" nowCom = 'my-com2' ">组件2</button>
    <button @click=" nowCom = 'my-com3' ">组件3</button>
    <transition name="slide" mode="out-in">
      <keep-alive>
        <suspense>
          <component :is="nowCom"></component>
          <template #fallback>
            <div>loading...</div>
          </template>
        </suspense>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import MyCom1 from '@/13_MyCom1.vue'
// import MyCom2 from '@/14_MyCom2.vue'
// import MyCom3 from '@/15_MyCom3.vue'
import { defineAsyncComponent } from 'vue'
  export default {
    data(){
      return {
        nowCom: 'my-com1'
      }
    },
    components: {
      'my-com1': defineAsyncComponent(() => import('@/13_MyCom1.vue')),
      'my-com2': defineAsyncComponent(() => import('@/14_MyCom2.vue')),
      'my-com3': defineAsyncComponent(() => import('@/15_MyCom3.vue'))
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