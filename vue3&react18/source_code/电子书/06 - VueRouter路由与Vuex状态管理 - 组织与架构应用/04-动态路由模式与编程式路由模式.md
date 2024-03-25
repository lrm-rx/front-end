# 动态路由模式与编程式路由模式

## 动态路由模式

所谓的动态路由其实就是不同的URL可以对应同一个页面，这种动态路由一般URL还是有规律可循的，所以非常适合做类似于详情页的功能。

<div align=center>
    <img src="./img/06-02-动态路由.png" />
    <div>动态路由</div>
</div>

```js
// router/index.js，定义动态路由

const routes = [
  {
  	path: 'foo/:id',
    component: Foo
  }
]

// views/Foo.vue，获取动态路由的id
export default {
  mounted(){
      console.log( this.$route.params.id );
  }
}
```

## 编程式路由

前面介绍过如何在页面中对路由进行切换，可以采用声明式写法<router-link>来完成，但是往往这种方式不够灵活，首先不能更灵活的控制结构和样式，其次不能自动进行路由的跳转，必须点击操作才行。

那么编程式路由就会在JavaScript中通过逻辑的方式进行路由跳转，我们把这种写在JS中进行跳转路由的方式叫做编程式路由，这样方式会更加的灵活。

```vue
<template>
  <button @click="handleToBar">编程式路由跳转</button>
</template>
<script>
  export default {
    methods: {
      handleToBar(){
        this.$router.push('/about/bar');
      }
    }
  }
</script>
```

可以看到在动态路由中使用到了一个route对象，而在编程式路由中使用了一个router对象，那么这两个比较重要的路由对象，会在后面的小节中给大家进行详细的讲解。
