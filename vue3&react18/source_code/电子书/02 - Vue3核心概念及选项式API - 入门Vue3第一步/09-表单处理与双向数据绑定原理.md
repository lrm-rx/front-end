# 表单处理与双向数据绑定原理

表单是开发过程中经常要进行操作的，一般需要收集表单数据，发送给后端，或者把后端的数据进行回显等。在Vue中是通过v-model指令来操作表单的，可以非常灵活的实现响应式数据的处理。

```html
<div id="app">
	<input type="text" v-model="message"> {{ message }}
</div>
<script>
let vm = Vue.createApp({
    data() {
        return {
            message: 'hello'
        }
    }
}).mount("#app")
</script>
```

尽管有些神奇，但 `v-model` 本质上不过是语法糖。可通过value属性 + input事件来实现同样的效果。

```html
<div id="app">
	<input type="text" :value="message" @input="message = $event.target.value"> {{ message }}
</div>
<script>
let vm = Vue.createApp({
    data() {
        return {
            message: 'hello'
        }
    }
}).mount("#app")
</script>
```

v-model除了可以处理输入框以外，也可以用在单选框、复选框、以及下拉菜单中。

```vue
<div id="app">
    <input type="checkbox" v-model="fruits" value="苹果">苹果<br>
    <input type="checkbox" v-model="fruits" value="西瓜">西瓜<br>
    <input type="checkbox" v-model="fruits" value="哈密瓜">哈密瓜<br>
    {{ fruits }
    <input type="radio" v-model="gender" value="女">女<br>
    <input type="radio" v-model="gender" value="男">男<br>
    {{ gender }}
    <select v-model="city">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="杭州">杭州</option>
    </select>
    {{ city }}
</div>
<script>
    let vm = Vue.createApp({
        data(){
            return {
                fruits: ['西瓜', '哈密瓜'],
                gender: '男',
                city: '杭州'
            }
        }
    }).mount('#app');
</script>
```

