# class样式与style样式的三种形态

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

- 字符串
- 数组
- 对象

```javascript
let vm = Vue.createApp({
    data() {
        return {
            myClass1: 'box box2',
            myClass2: ['box', 'box2'],
            myClass3: { box: true, box2: true },
            myStyle1: 'background: red; color: white;',
            myStyle2: ['background: red', 'color: white'],
            myStyle3: { background: 'red', color: 'white' },
        }
    },
}).mount("#app")
```

数组和对象的形式要比字符串形式更加的灵活，也更容易控制变化。
