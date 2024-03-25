## Vue状态管理之Pinia存储库

Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法。最终，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分内容，并决定实现它 取而代之的是新的建议。

与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。

Pinia API 与 Vuex4有很大不同，即：

- *mutations* 不再存在。他们经常被认为是 **非常冗长**。他们最初带来了 devtools 集成，但这不再是问题。
- 无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。
- 不再需要注入、导入函数、调用函数、享受自动完成功能！
- 无需动态添加 Store，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用 Store 进行注册，但因为它是自动的，您无需担心。
- 不再有 *modules* 的嵌套结构。您仍然可以通过在另一个 Store 中导入和 *使用* 来隐式嵌套 Store，但 Pinia 通过设计提供平面结构，同时仍然支持 Store 之间的交叉组合方式。 **您甚至可以拥有 Store 的循环依赖关系**。
- 没有 *命名空间模块*。鉴于 Store 的扁平架构，“命名空间” Store 是其定义方式所固有的，您可以说所有 Store 都是命名空间的。

总之Pinia简化了Vuex的操作，这也是未来Vuex5的趋势，下面就来尝试使用一下Pinia吧。

用你最喜欢的包管理器安装 `pinia`：

```shell
yarn add pinia
# 或者使用 npm
npm install pinia
```

目前最新版本为"pinia": "^2.0.16"，然后把pinia当插件的方式在Vue脚手架中生效：

```javascript
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```

继续在src文件夹中创建/stores/counter.js，并写入如下代码：

```javascript
import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id，是必要的，Pinia 使用它来将 store 连接到 devtools。
export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  }),
  actions: {
    add(){
      this.counter++
    }
  }
})
```

除了上面的选项式写法外，pinia还支持组合式的写法，代码如下：

```javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 第二个参数，可以写成回调函数的写法，这样就支持组合式API的使用
export const useCounterStore = defineStore('counterStore', ()=>{
    const counter = ref(0)
    const add = () => {
        counter.value++
    }
    return { counter, add }
})
```

以上两种风格的写法是等价的，接下来就是如何去调用这个模块了。在App.vue中引入counter.js并使用：

```vue
<template>
<button @click="handleClick">点击</button>{{ counter }}
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';
let counterStore = useCounterStore()
//下面操作可使共享状态具备响应式
let { counter } = storeToRefs(counterStore);
//下面四种操作行为均可修改counter值，并具备响应式变化
let handleClick = () => {
    // counter.value++;               // 1
    // counterStore.counter++;        // 2
    // counterStore.$patch({          // 3
    //   counter: counter.value + 1
    // })
    counterStore.add();               // 4
}
</script>
```

add()方法可以直接编写异步程序和传参处理：

```javascript
actions: {
  add(n){
    setTimeout(()=>{
      this.counter += n;
    }, 1000)
  }
}
```

总结：Pinia去掉了繁琐的mutations，异步同步都采用actions来完成，并且简化了modules的使用方式等等。