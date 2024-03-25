# 搭建 Vite3 + Pinia2 组合模式

前面我们介绍过Vite和Pinia，其中Vite是最新的脚手架，基于原生ESM方式；而Pinia则是最新的状态管理，比Vuex使用起来更加简单。

本小节我们将演示Vite如何去搭配Pinia来完成项目的开发。

首先对Vite3脚手架进行初始化的安装。

1. 安装脚手架

   ```she
   # npm 6.x
   npm create vite@latest vite-study
   # yarn
   yarn create vite vite-study
   # pnpm
   pnpm create vite vite-study
   ```

2. 选择框架：因为Vite可以和很多框架配合使用，所以这里我们选择：Vite + Vue

   ```she
   ? Select a framework: » - Use arrow-keys. Return to submit.
       Vanilla
   >   Vue
       React
       Preact
       Lit
       Svelte
   ```

3. 选择变体：这里先选择自定义形式

   ```shell
   ? Select a variant: » - Use arrow-keys. Return to submit.
       JavaScript
       TypeScript
   >   Customize with create-vue
       Nuxt
   ```

4. 选择安装Pinia

   ```shell
   ? Add Pinia for state management? >> No / Yes
   Yes
   ```

5. 进入项目：安装第三方模块，并启动项目

    ```shell
    cd vite-study
    npm install
    npm run dev
    
    VITE v3.1.0  ready in 408 ms
    
      ➜  Local:   http://127.0.0.1:5173/
      ➜  Network: use --host to expose
    ```

在安装好Vite后，打开/src/stores可以看到自动安装好了一个示例模块counter.js，代码如下：

```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    setTimeout(()=>{
      count.value++
    }, 2000)
  }
  return { count, doubleCount, increment }
})
```

这里的风格可以是上一个小节中介绍的配置写法，也可以利用组合式API风格来编程Pinia。这里做了一个共享状态count，又做了一个计算属性doubleCount，还有一个方法increment。

在共享方法中是不分同步还是异步的，对于vue devtools都是可以很好的进行监控的，所以比Vuex使用起来要简单一些。下面看一下共享状态是如何进行渲染和方法调用的。

```vue
<!-- App.vue -->
<script setup>
    import { useCounterStore } from './stores/counter';
    import { storeToRefs } from 'pinia';
    const counterStore = useCounterStore();
    const { count, doubleCount } = storeToRefs(counterStore);
    const handleClick = () => {
        counterStore.increment();
    };
</script>
<template>
	<header>
    	<button @click="handleClick">点击</button>
    	{{ count }}, {{ doubleCount }}
    </header>
</template>
```

Pinia对于模块化的操作方式也比Vuex要简单一些，直接在/stores创建下新创建一个模块JS即可，如：message.js。message.js的代码跟counter.js的代码是一样的格式，使用的时候也是一样的操作行为。

