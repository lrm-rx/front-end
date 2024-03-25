# 命名路由与命名视图与路由元信息

## 命名路由

在路由跳转中，除了path 之外，你还可以为任何路由提供 name 的形式进行路由跳转。那么name方式的好处如下：

- 没有硬编码的 URL
- params 的自动编码/解码
- 防止你在 url 中出现打字错误
- 绕过路径排序（如显示一个）

```js
// router/index.js，定义命名路由
const routes = [
    {
        path: '/about/bar',
        name: 'bar',
        component: Bar
    },
    {
        path: '/about/foo/:id',
        name: 'foo',
        component: Foo
    }
];
```

```vue
<!-- About.vue，使用命名路由跳转 -->
<template>
 	<div>
        <router-link :to="{ name: 'bar' }">bar</router-link>
        <router-link :to="{ name: 'foo', params: {id: 123} }">foo 123</router-link>
    </div>
</template>

```

name的方式也支持动态路由形式。

## 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，这个时候就非常适合使用命名视图。

<div align=center>
    <img src="./img/06-03-命名视图.png" />
    <div>命名视图</div>
</div>

通过components字段配置多个组件，根据不同的router-view去渲染不同的组件。

## 路由元信息

有时，你可能希望将任意信息附加到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的meta属性来实现。

```js
const routes = [
    {
        path: '/about/bar',
        name: 'bar',
        component: Bar,
        meta: { auth: false }
    },
    {
        path: '/about/foo/:id',
        name: 'foo',
        component: Foo,
        meta: { auth: true }
    }
];
```

定义好meta元信息后，可通过route对象去访问meta属性。

```vue
<!-- Foo.vue -->
<script>
export default {
    mounted(){
        this.$route.meta.auth   // true
    }
}
</script>
```

