# Vue3 系统入门与项目实战

**注意点:**

- 在侦听器中, 侦听值是一个对象时, 因为引用地址一样, handler 函数的两个参数(newValue, oldValue)的值是相等的
  > 解决办法:
  1. 监听对象的值 ''
  2. 通过计算属性 深拷贝再监听
- **在侦听器中, 当 immediate: true 时, 首次执行, 第二个(oldValue)参数值为 undefined (oldValue 一般情况下不会使用到). 侦听值是一个对象一定要注意这一点.**

- 绑定多个事件: @click="click1(), click2()"

### vue3 事件绑定

Vue 的事件传递

> Vue 的默认事件传递是由里而外的【与安卓 自上而下的事件分发机制 恰恰相反】
> 可以使用.stop 修饰符，拦截事件外传
> @click 的.self 修饰符
> @click 的.capture 修饰符
> @click 的.once/.prevent 修饰符
> @click 的鼠标修饰符 left、right、middle
> @click 的精确修饰符.exact
> @scroll.passive 的.passive 可以提高滚动性能
> 按键事件指令@keydown
> @keydown 的按键修饰符.enter
> @keydown 的按键修饰符 tab、delete、esc、up、down、left、right 等

### 单向数据流

> v-bind="params"
> :content="params.content" :a="params.a" :b="params.b" :c="params.c"
