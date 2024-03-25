# Vuex计算属性和辅助函数的使用

Vuex中除了提供常见的异步处理和同步处理外，还提供了一些辅助的操作方式，比如：状态管理下的计算属性和简化操作的辅助函数。

## getters计算属性

在Vuex中通过定义getters字段来实现计算属性，代码如下：

```js
const store = createStore({
  state: {
    count: 0
  }
  getters: {
    doubleCount(state){
      return state.count * 2;
    }
  }
});
```

```vue
<template>
  <div>
    {{ count }}, {{ doubleCount }}
  </div>
</template>
```

当count数据发生改变的手，对应的计算属性doubleCount也会跟着发生改变。

## 辅助函数

在Vuex中为了让我们使用共享数据或调用方法的时候，更加简单易用，提供了对应的辅助函数，分别为：mapState、mapGetters、mapMutations、mapActions。

```vue
<template>
  <div>
    <button @click="change(5)">点击</button>
    hello home, {{ count }}, {{ doubleCount }}
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'HomeView',
    methods: {
      ...mapActions(['change'])
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['doubleCount'])
    }
  }
</script>
```

辅助函数最大的优点就是可以处理大量共享数据的需求，这样写起来会非常的简便，因为只需要往数组里添加子项即可。
