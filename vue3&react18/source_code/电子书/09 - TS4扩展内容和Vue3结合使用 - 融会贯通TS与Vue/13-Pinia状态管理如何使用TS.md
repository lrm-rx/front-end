# Pinia状态管理如何使用TS

在《VueRouter路由与Vuex状态管理 - 组织与架构应用》这章中，我们介绍过什么是Pinia存储库，除了使用上比Vuex简单外，在跟TS配合方面也比Vuex要灵活和简单，并且适配TS能力超强，几乎不需要做额外的一些设置。

首先在main.ts中注册Pinia：

```javascript
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```

继续在src文件夹中创建/stores/counter.js，并写入如下代码：

```javascript
import { defineStore } from 'pinia'

interface Counter {
  counter: number
}

export const useCounterStore = defineStore('counterStore', {
  state: (): Counter => ({
    counter: 0
  }),
  actions: {
    add(n: number){
      this.counter += n;
    }
  }
})
```

通过Counter接口的类型注解后，对于counter响应式数据就具备了类型限定，add方法直接进行参数的类型注解就好。

在App.vue中引入counter.js并使用：

```vue
<template>
<button @click="handleClick">点击</button>{{ counter }}
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';
let counterStore = useCounterStore()
let { counter } = storeToRefs(counterStore);
let handleClick = () => {
    counterStore.add(2);
}
</script>
```

几乎不需要做额外的处理，Pinia会帮我们自动完成类型推断。
