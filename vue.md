# vue

## v-show和v-if区别

- v-show是通过display: none隐藏

- v-if会把节点移除

  > v-if不能和v-for一起使用的原因是v-for的优先级比v-if高,一起使用会造成性能浪费

## 为何v-for中要用key



## 描述Vue组件生命周期(有父子组件的情况)



## Vue组件如何通讯



## 描述组件渲染和更新的过程



## 双向数据绑定v-model的实现原理



## 自定义 v-model





### computed和watch

- computed有缓存,data不变则不会重新计算



### keep-alive

- 缓存组件
- 频繁切换, 不需要重复渲染
- Vue常见性能优化中使用

## mixin

- 多个组件有相同的逻辑,抽离出来
- 问题:
  - 变量来源不明确, 不利于阅读
  - 多mixin可能会造成命名冲突
  - mixin和组件可能出现多对多的关系, 复杂度较高

## $nextTick

- Vue是异步渲染
- data改变之后, DOM不会立刻渲染
- $nextTick会在DOM渲染之后被触发, 以获取最新DOM节点

## slot

- this.$slots

- slot作用域
- 具名slot

## 动态组件

```js
<component :is="xxx"/>
```



