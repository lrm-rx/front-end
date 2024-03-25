# Vuex共享状态的基本开发流程

在上一个小节中，我们介绍了什么是Vuex，本小节我们一起来看一下Vuex共享状态的基本开发流程。首先我们来看一下Vuex的经典流程图。

<div align=center>
    <img src="./img/06-04-Vuex状态管理.png" />
    <div>Vuex状态管理</div>
</div>

我们可以看到，基本上就是先准备好一个共享数据state，然后渲染我组件中，通过组件调用dispatch -> actions -> commit -> mutations的方式来进行state修改。

那么这里我们先不考虑dispatch -> actions，因为这两个环节是处理异步程序的，那么我们直接组件去调用commit就可以触发mutations中定义的方法，这样在这个方法中进行state的修改。

首先在/src/store/index.js创建一个状态管理的配置文件，然后在main.js中让vuex于vue进行结合，就像我们路由的使用一样。

```js
//  store/index.js
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    change(state, payload){
      state.count += payload;
    }
  }
});

//  main.js
import store from './store'
app.use(store)
```

下面看一下如何在页面中显示state数据和如何通过commit修改我们的共享数据，代码如下：

```vue
<template>
  <div>
    <button @click="change(5)">点击</button>
    hello home, {{ $store.state.count }}
  </div>
</template>
<script>
    export default {
        name: 'HomeView',
        methods: {
            handleClick(){
                this.$store.commit('change', 5);
            }
        }
    }
</script>
```

