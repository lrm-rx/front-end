# 条件渲染与列表渲染及注意点

## 条件渲染

v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

在 JavaScript 中，truthy（真值）指的是在[布尔值](https://so.csdn.net/so/search?q=布尔值&spm=1001.2101.3001.7020)上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 falsy 假值（即除 false、0、-0、0n、“”、null、undefined 和 NaN 以外皆为真值）。

```vue
<div id="app">
    <div v-if="isShow">aaaaa</div>
    <div v-else>bbbbb</div>
</div>
<script>
    let vm = Vue.createApp({
        data(){
            return {
                isShow: 0
            }
        }
    }).mount('#app');
</script>
```

## 列表渲染

v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。

```vue
<div id="app">
	<div v-for="item, index in list">{{ item }}, {{ index }}</div>
    <div v-for="value, key, index in info">{{ value }}, {{ key }}, {{ index }}</div>
    <div v-for="item in num">{{ item }}</div>
    <div v-for="item in text">{{ item }}</div>
</div>
<script>
    let vm = Vue.createApp({
        data(){
            return {
                list: ['a', 'b', 'c'],
                info: { username: 'xiaoming', age: 20 },
                num: 10,
                text: 'hello'
            }
        }
    }).mount('#app');
</script>
```

## 条件渲染与列表渲染需要注意的点

- 列表渲染需要添加key属性，用来跟踪列表的身份
- v-if 和 v-for 尽量不要一起使用，可利用计算属性来完成筛选这类功能（因为v-if优先级高于v-for，这样v-if拿不到v-for中的item属性）
- template标签起到的作用，形成一个整体容器

