# 利用defineProps与defineEmits进行组件通信

在组合式API中，是通过defineProps与defineEmits来完成组件之间的通信。

## defineProps

defineProps是用来完成父子通信的，基本使用跟选项式中的props非常的像，代码如下：

```vue
// parent.vue
<template>
  <div>
    <h2>父子通信</h2>
    <my-child :count="0" message="hello world"></my-child>
  </div>
</template>
<script setup>
import MyChild from '@/child.vue'
</script>

// child.vue
<template>
  <div>
    <h2>hi child, {{ count }}, {{ message }}</h2>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const state = defineProps({   // defineProps -> 底层 -> reactive响应式处理的
  count: {
    type: Number
  },
  message: {
    type: String
  }
});
console.log( state.count, state.message );
</script>
```

## defineEmits

defineEmits是用来完成子父通信的，基本使用跟选项式中的emits非常的像，代码如下：

```vue
// parent.vue
<template>
  <div>
    <h2>子父通信</h2>
    <my-child @custom-click="handleClick"></my-child>
  </div>
</template>
<script setup>
import MyChild from '@/child.vue'
let handleClick = (data) => {
  console.log(data);
}
</script>

// child.vue
<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['custom-click']);
setTimeout(()=>{
  emit('custom-click', '子组件的数据');
}, 2000)
</script>
```

