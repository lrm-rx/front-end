# 自定义指令与自定义全局属性及应用场景

除了核心功能默认内置的指令 (例如 v-model 和 v-show)，Vue 也允许注册自定义指令，来实现一些封装功能。

## 自定义指令的实现

首先我们先来实现一个简单的`v-color`指令，用于给元素添加背景色，代码如下：

```vue
<template>
  <div>
    <h2>自定义指令</h2>
    <div @click="handleClick" v-color="color">aaaaaaa</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        color: 'red'
      }
    }, 
    //创建局部的自定义指令
    directives: {
      /* color: {
        mounted(el, binding){
          el.style.background = binding.value
        },
        updated(el, binding){
          el.style.background = binding.value
        }
      } */
      color: (el, binding) => {
        el.style.background = binding.value
      }
    }
  }
</script>
```

这里的回调函数是指令中mounted生命周期和updated生命周期的简写方式。

下面我们来完成一个实际可以应用的指令，按钮权限指令，一般情况下这种指令不会局部使用，而是全局使用，所以可以通过vue来实现一个全局的按钮权限指令，代码如下：

```vue
// main.js
app.directive('auth', (el, binding) => {
    let auths = ['edit', 'delete'];
    let ret = auths.includes(binding.value);
    if(!ret){
    	el.style.display = 'none';
    }
});

// demo.vue
<template>
<button v-auth="'edit'">编辑</button>
</template>
```

## 自定义全局属性

添加一个可以在应用的任何组件实例中访问的全局 property，这样在引入一些第三方模块的时候，就不用每一次进行import操作，而是直接通过this对象去访问全局属性即可，下面举一个例子，实现一个http的全局属性。

```js
// main.js
app.config.globalProperties.$http = http;

//demo.vue
<script>
export default {
   created(){
       this.$http.get();
   }
}
</script>
```

