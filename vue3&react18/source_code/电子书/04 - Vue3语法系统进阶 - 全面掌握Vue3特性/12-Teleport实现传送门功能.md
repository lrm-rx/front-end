# Teleport实现传送门功能



## Teleport组件

Teleport可以实现传送门功能，也就是说逻辑属于当前组件中，而结构需要在组件外进行渲染，例如：按钮模态框组件。

```vue
// 模态框.vue
<template>
  <div>
    <button @click=" isShow = true ">点击</button>
    <teleport to="body">
      <div v-if="isShow">模态框</div>
    </teleport>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow: false
      }
    }
  }
</script>
// 调用模态框.vue
<template>
  <div>
    <h2>传送门</h2>
    <my-modal></my-modal>
  </div>
</template>

<script>
import MyModal from '@/模态框.vue'
  export default {
    components: {
      'my-modal': MyModal
    }
  }
</script>
```

## 逻辑组件

但是往往我们需要的并不是普通组件的调用方式，而是逻辑组件的调用方式，那么如何实现逻辑组件呢？代码如下：

```js
//  定义逻辑组件，modal.js

import { createApp } from 'vue';
import ModalVue from '@/模态框.vue';

function modal(){
  let div = document.createElement('div');
  createApp(ModalVue).mount(div);
  document.body.append(div);
}

export default modal;
```

```vue
// 调用逻辑组件
<template>
  <div>
    <h2>传送门</h2>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import modal from '@/modal.js'
export default {
  methods: {
    handleClick(){
      modal();
    }
  }
}
</script>
```



