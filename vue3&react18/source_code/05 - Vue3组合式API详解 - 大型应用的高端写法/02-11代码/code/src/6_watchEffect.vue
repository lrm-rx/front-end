<template>
  <div>
    <h2>watchEffect</h2>
    <div ref="elem">{{ count }}</div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';


let count = ref(0);
let elem = ref();

//1. 一开始会初始触发一次，然后所依赖的数据发生改变的时候，才会再次触发
//2. 触发的时机是数据响应后，DOM更新前，通过flush: 'post' 修改成DOM更新后进行触发
//3. 返回结果是一个stop方法，可以停止watchEffect的监听
//4. 提供一个形参，形参主要就是用于清除上一次的行为
// const stop = watchEffect(()=>{
//   console.log(count.value);
// }, {
//   flush: 'post'
// })

// setTimeout(()=>{
//   stop();
// }, 1000)

// setTimeout(()=>{
//   count.value += 1;
// }, 2000)


watchEffect((cb)=>{
  console.log(count.value);
  cb(()=>{
    //更新前触发和卸载前触发，目的：清除上一次的行为(停止上一次的ajax，清除上一次的定时器)
    console.log('before update');
  })
})

setTimeout(()=>{
  count.value += 1;
}, 2000)
</script>

<style lang="scss" scoped>

</style>