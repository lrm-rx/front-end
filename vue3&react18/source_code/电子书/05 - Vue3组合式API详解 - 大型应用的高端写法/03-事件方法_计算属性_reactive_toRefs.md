# 事件方法_计算属性 reactive_toRefs

## 事件方法与计算属性

下面看一下在组合式API中是如何实现事件方法和计算属性的。

```vue
<template>
  <div>
    <button @click="handleChange">点击</button>
    {{ count }}, {{ doubleCount }}
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
let count = ref(0);
let doubleCount = computed(()=> count.value * 2)
let handleChange = () => {
  count.value += 1;
};
</script>
```

事件方法直接就定义成一个函数，计算属性需要引入computed方法，使用起来是非常简单的。

## reactive与toRefs

reactive()方法是组合式API中另一种定义响应式数据的实现方式，它是对象的响应式副本。

```vue
<template>
  <div>
    <h2>reactive</h2>
    {{ state.count }}
  </div>
</template>

<script setup>
import { reactiv} from 'vue';
let state = reactive({
  count: 0,
  message: 'hi vue'
})
state.count += 1;
</script>
```

reactive()方法返回的本身就是一个state对象，那么在修改的时候就不需要.value操作了，直接可以通过state.count的方式进行数据的改变，从而影响到视图的变化。

ref()和reactive()这两种方式都是可以使用的，一般ref()方法针对基本类型的响应式处理，而reactive()针对对象类型的响应式处理，当然还可以通过toRefs()方法把reactive的代码转换成ref形式。

```vue
<template>
  <div>
    <h2>reactive</h2>
    {{ state.count }}, {{ count }}
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

let state = reactive({
  count: 0
})
let { count } = toRefs(state);   //  let count = ref(0)
setTimeout(() => {
  //state.count += 1;
  count.value += 1;
}, 1000)

</script>
```

