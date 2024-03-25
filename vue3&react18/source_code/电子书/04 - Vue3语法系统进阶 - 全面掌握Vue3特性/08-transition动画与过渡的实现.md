# transition动画与过渡的实现

在Vue中推荐使用CSS3来完成动画效果。当在插入、更新或从 DOM 中移除项时，Vue 提供了多种应用转换效果的方法。

## transition动画

Vue中通过两个内置的组件来实现动画与过渡效果，分别是：`<transition>`和`<transition-group>`，代码如下：

```vue
<template>
  <div>
    <h2>hello transition</h2>
    <button @click=" isShow = !isShow ">点击</button>
    <transition name="slide" mode="out-in">
      <div v-if="isShow" class="box"></div>
      <div v-else class="box2"></div>
    </transition>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow: true
      }
    }
  }
</script>
<style scoped>
.box{
  width: 200px;
  height: 200px;
  background: skyblue;
}
.box2{
  width: 200px;
  height: 200px;
  background: pink;
}
.slide-enter-from{
  opacity: 0;
  transform: translateX(200px);
}
.slide-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active{
  transition: 1s;
}

.slide-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to{
  opacity: 0;
  transform: translateX(200px);
}
.slide-leave-active{
  transition: 1s;
}
</style>
```

其中`<transition>`组件通过`name`属性去关联CSS中的选择器，CSS中的选择器主要有6种，分别：

- `v-enter-from`：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。
- `v-enter-active`：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。
- `v-enter-to`：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 `v-enter-from` 被移除的同时)，在过渡或动画完成之后移除。
- `v-leave-from`：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。
- `v-leave-active`：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。
- `v-leave-to`：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 `v-leave-from` 被移除的同时)，在过渡或动画完成之后移除。 

<div align=center>
    <img src="./img/04-01-动画与过渡.png" />
    <div>动画与过渡</div>
</div>

默认情况下，进入和离开在两个元素身上是同时执行的，如果想改变其顺序，需要用到`mode`属性，其中`out-in`表示先离开再进入，而`in-out`表示先进入再离开。

