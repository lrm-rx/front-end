<template>
  <div>
    <h2 ref="elem">setup属性方式</h2>
    {{ count }}
  </div>
</template>

<script setup>

/* let count = 0;

setTimeout(()=>{
  count += 1;
}, 1000)
 */

import { ref } from 'vue';

let count = ref(0);   // count -> { value: 0 }
let elem = ref();

setTimeout(()=>{
  //count += 1;   //✖
  count.value += 1;   // ✔
  
  console.log( elem.value );   //拿到对应的原生DOM元素
}, 1000)

</script>

<style lang="scss" scoped>

</style>

<script>

/* let a = 1;
let b = a;
b += 3;
a  ->  1 

let c = [1,2,3];
let d = c;
d.push(4);
c -> [1,2,3,4] */


</script>