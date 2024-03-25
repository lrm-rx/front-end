# 指令系统与事件方法及传参处理

指令系统就是通过自定义属性实现的一套功能，也是声明式编程的体现。

通常在标签上添加 v-* 字样，常见的指令有：

- v-bind -> 操作标签属性，可通过 : 简写
- v-on -> 操作事件，可通过 @ 简写

```html
<div id="app">
    <p :title="message">这是一个段落</p>
    <button @click=" message = 'hi' ">点击</button>
</div>
{{ message }}
<script>
    let vm = Vue.createApp({
        data(){
            return {
                message: 'hello'
            }
        }
    }).mount('#app')
</script>
```

如何添加事件方法，通过methods选项API实现，并且Vue框架已经帮我们帮事件传参机制处理好了。

```html
<div id="app">
	<button @click="toClick($event, 123)">点击</button>
</div>
<script>
    let vm = Vue.createApp({
      methods: {
        toClick(ev, num){
        }
      }
    }).mount('#app')
</script>
```
