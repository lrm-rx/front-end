# 计算属性与侦听器区别与原理

## 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护，所以过于复杂的逻辑可以移植到计算属性中进行处理。

```html
<div id="app">
{{ reverseMessage }}
</div>
<script>
    let vm = Vue.createApp({
      data(){
        return {
          message: 'hello'
        }
      },
      computed: {
        reverseMessage(){
          return this.message.split('').reverse().join('')
        }
      }
    }).mount('#app')
</script>
```

计算属性与方法比较像，如下所示：

```javascript
<div id="app">
{{ reverseMessageMethod() }}<br>
{{ reverseMessageMethod() }}<br>
{{ reverseMessage }}<br>
{{ reverseMessage }}<br>
</div>
<script>
    let vm = Vue.createApp({
        data(){
            return {
                message: 'hello world'
            }
        },
        methods: {
            reverseMessageMethod(){
                console.log(1);
                return this.message.split(' ').reverse().join(' ');
            }
        },
        computed: {
            reverseMessage(){
                console.log(2);
                return this.message.split(' ').reverse().join(' ');
            }
        }
    }).mount('#app');
</script>
```

计算属性跟方法相比，具备缓存的能力，而方法不具备缓存，所以上面代码执行完，会弹出两次1和一次2。

注意：默认是只读的，一般不会直接更改计算属性，如果想更改也是可以做到的，通过Setter写法实现，[官方地址](https://v3.cn.vuejs.org/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)。

既然计算属性编写的是一个函数，而调用的时候以函数名的形式进行使用，其实实现起来也不是特别难的事情：

```javascript
let computed = {
    num(){
        return 123;
    }
}
let vm = {}
for(let attr in computed){
    Object.defineProperty(vm, attr, {
        value: computed[attr]()
    })
}
```

## 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。侦听器的目的：侦听器用来观察和响应Vue实例上的数据变动,类似于临听机制+事件机制。当有一些数据需要随着其它数据变化而变化时,就可以使用侦听器。

```html
<div id="app">
    {{ message }}
</div>
<script>
    let vm = Vue.createApp({
        data(){
            return {
                message: 'hello'
            }
        },
        watch: {
            message(newVal, oldVal){
            }
        }
    }).mount('#app')
</script>
```

有时候，计算属性 和 侦听器 往往能实现同样的需求，那么他们有何区别呢？

- 计算属性适合：多个值去影响一个值的应用；而侦听器适合：一个值去影响多个值的应用
- 侦听器支持异步的程序，而计算属性不支持异步的程序
