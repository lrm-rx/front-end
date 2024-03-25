# ref属性在元素和组件上的分别使用

## ref属性

前面我们介绍过，Vue是基于MVVM设计模式进行实现的，视图与数据不直接进行通信，但是Vue并没有完全遵循这一原则，而是允许开发者直接进行原生DOM操作。

在Vue中可通过ref属性来完成这一行为，通过给标签添加ref属性，然后再通过`vm.$refs`来获取DOM，代码如下：

```vue
<template>
  <div>
    <h2>ref属性</h2>
    <button @click="handleClick">点击</button>
    <div ref="elem">aaaaaaaaa</div>
    <div ref="elem2">bbbbbbbbb</div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(){
        // ref属性添加到元素身上，可以获取到当前元素的原生DOM
        console.log( this.$refs.elem );
        console.log( this.$refs.elem2 );
      }
    }
  }
</script>
```

除了可以把ref属性添加给DOM元素外，还可以把ref属性添加给组件，这样可以获取到组件的实例对象，可以间接的实现组件之间的通信，代码如下：

```vue
<template>
  <div>
    <h2>ref属性</h2>
    <my-head ref="elem3"></my-head>
  </div>
</template>

<script>
  import MyHead from '@/2_头部组件.vue'
  export default {
    methods: {
      handleClick(){
        // ref属性添加到组件身上，可以获取到当前组件的vm对象(实例对象)
        console.log( this.$refs.elem3 );
        console.log( this.$refs.elem3.message );
        this.$refs.elem3.handleMessage('根组件的数据');
        //$refs 也可以实现间接的父子通信
      }
    }
  }
</script>
```

`2_头部组件.vue`文件：

```vue
<template>
  <div>
    hello myhead
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: '头部组件的消息'
      }
    },
    methods: {
      handleMessage(data){
        console.log(data);
      }
    }
  }
</script>
```

