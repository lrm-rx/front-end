# 组件的内容是如何组合与分发处理的

在前面的小节中，我们学习了组件之间的通信，让组件之间实现了不同的需求，我们通过给组件添加不同的属性来实现。那么在Vue中如何去传递不同的组件结构呢？这就涉及到了组件内容的分发处理。

## 插槽slot

在Vue中是通过插槽slot方式来进行分发处理的，Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 <slot> 元素作为承载分发内容的出口。

```vue
<div id="app">
	<my-head>
    	<p>logo</p>
    </my-head>
</div>
<script>
    let app = Vue.createApp({
      data(){
        return {
          message: 'hello'
        }
      }
    })
    app.component('MyHead', {
      data(){
        return {
        };
      },
      template: `
        <header>
          <slot></slot>
        </header>`,
    });
    let vm = app.mount('#app');
</script>
```

组件内的结构，即`<p>logo</p>`会被分发到`<slot></slot>`所在的区域。

## 内容分发与插槽的注意点

- 渲染作用域 -> 插槽只能获取当前组件的作用域
- 具名插槽 -> 处理多个插槽的需求，通过v-slot指令实现，简写为#
- 作用域插槽 -> 希望插槽能访问子组件的数据

完整代码如下：

```vue
<div id="app">
    <my-head>
      <template #title>
        <p>logo, {{ message }}, {{ count }}</p>
      </template>
      <template #list="{ list }">
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </template>
    </my-head>
  </div>
  <script>
    let app = Vue.createApp({
      data(){
        return {
          message: 'hello'
        }
      }
    })

    app.component('MyHead', {
      data(){
        return {
          count: 123,
          list: ['首页', '视频', '音乐']
        };
      },
      template: `
        <header>
          <slot name="title"></slot>
          <hr>
          <slot name="list" :list="list"></slot>
        </header>
      `,
    });
    let vm = app.mount('#app');
</script>
```

