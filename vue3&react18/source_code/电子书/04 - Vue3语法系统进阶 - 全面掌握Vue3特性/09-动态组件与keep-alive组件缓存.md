# 动态组件与keep-alive组件缓存

## 动态组件

动态组件可以实现在同一个容器内动态渲染不同的组件，依一个内置组件`<component>`的`is`属性的值，来决定使用哪个组件进行渲染。

```vue
<template>
  <div>
    <h2>动态组件</h2>
    <button @click=" nowCom = 'my-com1' ">组件1</button>
    <button @click=" nowCom = 'my-com2' ">组件2</button>
    <button @click=" nowCom = 'my-com3' ">组件3</button>
 	<component :is="nowCom"></component>
  </div>
</template>

<script>
import MyCom1 from '@/13_MyCom1.vue'
import MyCom2 from '@/14_MyCom2.vue'
import MyCom3 from '@/15_MyCom3.vue'
  export default {
    data(){
      return {
        nowCom: 'my-com1'
      }
    },
    components: {
      'my-com1': MyCom1,
      'my-com2': MyCom2,
      'my-com3': MyCom3
    }
  }
</script>
```

## keep-alive组件

当我们点击的时候，就会进行组件的切换。在每次切换的过程中都会重新执行组件的渲染，这样组件操作的行为就会还原，而我们如何能够保证组件不变呢？可以利用`<keep-alive>`对组件进行缓存，这样不管如何切换，都会保持为初始的组件渲染，这样可以很好的保留之前组件的行为。

组件的切换也可以配合`<transition>`完成动画的切换。

```vue
<template>
  <div>
    <h2>动态组件</h2>
    <button @click=" nowCom = 'my-com1' ">组件1</button>
    <button @click=" nowCom = 'my-com2' ">组件2</button>
    <button @click=" nowCom = 'my-com3' ">组件3</button>
    <transition name="slide" mode="out-in">
      <keep-alive>
        <component :is="nowCom"></component>
      </keep-alive>
    </transition>
  </div>
</template>
```