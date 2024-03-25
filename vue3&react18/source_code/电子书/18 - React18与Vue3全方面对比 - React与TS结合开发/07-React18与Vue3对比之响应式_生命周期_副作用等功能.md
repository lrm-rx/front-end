# React18与Vue3对比之响应式-生命周期-副作用等功能

## 响应式数据对比

Vue采用响应式数据，底层通过new Proxy()进行监控，灵活性更高

React采用state状态，通过setState()方法进行内部re-render，可控性更强

## 生命周期对比

Vue生命周期钩子(常见)

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted

React生命周期钩子(常见)

- constructor
- componentDidMount
- componentDidUpdate
- componentWillUnmount
- render

整体对比来看，Vue的生命周期会更丰富一些，React生命周期会更简约一些。

## 副作用处理对比

vue使用，watchEffect()

react使用，useEffect()

都是处理副作用的方法，用法上还是有很大区别的。

watchEffect会自动根据所依赖的值进行重渲染，而useEffect要明确指定对应的值才能进行重渲染，React团队已经给出在未来的版本中可能会改成根据所依赖的值自动进行重渲染的操作，但暂时还不行。

watchEffect在更新前和卸载前触发的方式是通过回调函数的参数被调用来实现的，而useEffect是通过return的返回值来指定的。

```javascript
// Vue
watchEffect((cb)=>{
	cb(()=>{
       //更新前的触发
    })
})
```

```javascript
// React
useEffect(()=>{
   return ()=>{
      //更新前的触发
   }
})
```
