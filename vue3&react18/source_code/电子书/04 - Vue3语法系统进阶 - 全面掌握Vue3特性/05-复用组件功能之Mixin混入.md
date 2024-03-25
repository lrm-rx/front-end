# 复用组件功能之Mixin混入

## Mixin混入

本小节我们来了解一下mixin混入，它是选项式API的一种复用代码的形式，可以非常灵活的复用功能。

```js
// mymixin.js
const myMixin = {
  data(){
    return {
      message: '复用的数据'
    }
  },
  computed: {
    message2(){
      return '复用的数据2'
    }
  }
};
export {
  myMixin
}
// mymixin.vue
<template>
  <div>
    <h2>mixin混入</h2>
    <div>{{ message }}</div>
    <div>{{ message2 }}</div>
  </div>
</template>
<script>
  import { myMixin } from '@/mymixin.js'
  export default {
    mixins: [myMixin]
  }
</script>
```

这样就可以直接在.vue中使用这些混入的功能。当然这种方式是局部混入写法，也可以进行全局混入的写法，代码如下：

```javascript
// main.js
import { myMixin } from '@/mymixin.js'
app.mixin(myMixin)
```

mixin存在的问题也是有的，那就是不够灵活，不支持传递参数，这样无法做到差异化的处理，所以目前比较推荐的复用操作还是选择使用组合式API中的use函数来完成复用的逻辑处理。后面章节我们会学习到这种组合式API的应用。

