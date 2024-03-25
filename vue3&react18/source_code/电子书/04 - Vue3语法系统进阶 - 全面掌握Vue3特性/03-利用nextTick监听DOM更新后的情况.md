# 利用nextTick监听DOM更新后的情况

本小节我们将学习一下nextTick方法，它的主要作用是将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。

默认情况下，数据的更新会产生一个很小的异步延迟，所以直接再数据改变后取获取DOM是得不到DOM更新后的结果，而得到的是DOM更新前的结果。

```vue
<template>
  <div>
    <h2>hello nextTick</h2>
    <div ref="elem">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: 'hello world'
      }
    },
    mounted(){
      setTimeout(()=>{
        this.message = 'hi vue';
        console.log( this.$refs.elem.innerHTML );  // 'hello world'
       
      }, 2000)
    }
  }
</script>
```

如何才能得到DOM更新后的结果呢，可以有两种方案，第一种就是利用生命周期updated这个钩子函数，第二种就是利用我们讲的nextTick方法，支持两种风格即回调和promise。

```vue
<template>
  <div>
    <h2>hello nextTick</h2>
    <div ref="elem">{{ message }}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: 'hello world'
      }
    },
    mounted(){
      setTimeout(()=>{
        this.message = 'hi vue';
        /* this.$nextTick(()=>{
          console.log( this.$refs.elem.innerHTML );   // 'hi vue'
        }) */
        this.$nextTick().then(()=>{
          console.log( this.$refs.elem.innerHTML );  // 'hi vue'
        })
      }, 2000)
    },
    updated(){
       console.log( this.$refs.elem.innerHTML );  // 'hi vue'
    }
  }
</script>
```



