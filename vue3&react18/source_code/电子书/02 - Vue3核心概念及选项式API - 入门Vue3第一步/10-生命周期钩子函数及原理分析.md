# 生命周期钩子函数及原理分析

每个组件在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

就是工厂的流水线，每个工人站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作。

简单来说生命周期钩子函数就是回调函数，在Vue的某个时机去调用对应的回调函数。就像定时器一样，谁调用的定时器的回调函数呢？其实就是定时器内部在调用的。

```javascript
setTimeout(()=>{
	console.log('2秒后被执行了');
}, 2000)
```

官方提供的**[生命周期图示](https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)**

生命周期可划分为三个部分：

1. 初始阶段：beforeCreate、created、beforeMount、mounted
2. 更新阶段：beforeUpdate、updated
3. 销毁阶段：beforeUnmout、unmounted

注：一般在，created，mounted中都可以发送数据请求，但是，大部分时候，会在created发送请求。因为这样可以更短的时间去响应数据。
