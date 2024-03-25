# 组件的属性与事件是如何进行处理的

有时候组件上的属性或事件并不想进行组件通信，那么Vue是如何处理的呢？

## 组件的属性与事件

默认不通过props接收的话，属性会直接挂载到组件容器上，事件也是如此，会直接挂载到组件容器上。可通过 inheritAttrs 选项阻止这种行为，通过指定这个属性为false，可以避免组件属性和事件向容器传递。可通过 $attrs 内置语法，给指定元素传递属性和事件，代码如下：

```vue
<div id="app">
    <my-head title="hello world" class="box" @click="handleClick"></my-head>
</div>
<script>
    let app = Vue.createApp({
      data(){
        return {
        }
      },
      methods: {
        handleClick(ev){
          console.log(ev.currentTarget);
        }
      }
    })
    app.component('MyHead', {
      template: `
        <header>
          <h2 v-bind:title="$attrs.title">logo</h2>
          <ul v-bind:class="$attrs.class">
            <li>首页</li>
            <li>视频</li>
            <li>音乐</li>
          </ul>
        </header>
      `,
      mounted(){
        console.log( this.$attrs );   // 也可以完成父子通信操作
      },
      inheritAttrs: false   // 阻止默认的属性传递到容器的操作
    });
    let vm = app.mount('#app');
</script>
```

$attrs也可以实现组件之间的间接通信。