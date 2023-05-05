# vue2.x

## v-show和v-if区别

- v-show通过css display控制显示和隐藏

- v-if组件真正的渲染和销毁,而不是显示和隐藏

- 频繁切换显示状态用v-show, 否则用v-if

  > v-if不能和v-for一起使用的原因是v-for的优先级比v-if高,一起使用会造成性能浪费
  >
  > 有重复的ref会被覆盖

- 

## 为何v-for中要用key

- 必须用key, 且不能是index和random
- diff算法中通过tag和key来判断是否是相同的节点
- 减少渲染次数,提升渲染性能

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



## vuex



## Vue-router



## Vue原理

#### 组件化

#### 响应式

#### vdom和diff

#### 模板编译

#### 渲染过程

#### 前端路由



## Vue MVVM

### 数据驱动视图

![](F:\front-end\images\vue-mvvm.png)



## Vue响应式

### 核心API

> Object.defineProperty

#### Object.defineProperty实现响应式

- 监听对象,监听数组
- 复杂对象,深度监听
- 几个缺点
  - 深度监听,需要递归到底,一次性计算量大
  - 无法监听新增属性/删除属性(Vue.set Vue.delete)
  - 无法原生监听数组,需要特殊处理

### 用JS模拟DOM结构

![](F:\front-end\images\js-dom.png)





![](F:\front-end\images\w.png)



### 异步渲染

- 回顾$nextTick
- 汇总data的修改, 一次性更新视图
- 减少DOM操作次数,提高性能

## 前端路由

- hash - window.onhashchange
- H5 history - history.pushState和window.onpopstate
- H5 history 需要后端支持

## 如何将组件所有props传递给子组件

- $props
- <User v-bind="$props" />
- 优先级不高

## 何时需要使用boforeDestroy

- 解绑自定义事件 event.$off
- 清除定时器
- 解绑自定义的DOM事件

## Vuex中action和mutation有何区别

- action中处理异步, mutation不可以
- mutation做原子操作
- action可以整合多个mutation

## Vue为何是异步渲染, $nextTick何用?

- 异步渲染(以及合并data修改), 以提高渲染性能
- $nextTick在DOM更新完之后,触发回调

## Vue常见性能优化方式

- 合理使用v-show和v-if
- 合理使用computed
- v-for时加key,以及避免和v-if同时使用
- 自定义事件/dom事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- webpack层面的优化



# vue3.x

### Vue3比vue2有什么优势?

- **性能更好**
- 体积更小
- **更好的ts支持**
- **更好的代码组织**
- **更好的逻辑抽离**
- 更多新功能

### Vue3生命周期

- Options AP生命周期
  - beforeDestroy 改为beforeUnmount
  - destroyed改为unmouted
  - 其他沿用了vue2的生命周期
- Composition API生命周期

### 如何理解ref toRef和toRefs

#### ref

- 生成值类型的响应式数据
- 可用于模板和reactive
- 通过.value修改值

#### toRef

- 针对一个响应式对象(reactive封装)的prop
- 创建一个ref, 具有响应式
- 两者保持引用关系

#### toRefs

- toRef: 复制 reactive 里的单个属性并转成 ref
- toRefs: 复制 reactive 里的所有属性并转成 ref

### 为什么需要.value?

- ref是一个对象(不丢失响应式), value存储值
- 通过.value属性的get和set实现响应式
- 用于模板/reactive时,不需要.value, 其他情况都需要.value

### 为什么需要toRef和toRefs?

- 初衷: 不丢失响应式的情况下,把对象数据**分解/扩散**

- 前提: 针对的是响应式对象(reactive封装),非普通对象

- > 注意: 不创造响应式,而是延续响应式



### Vue3升级的功能

- createApp
- emits属性
- 生命周期
- 多事件
- Fragment
- 移除.sync
- 异步组件的写法
  - defineAsyncComponent
- 移除filter
- Teleport
- Suspense
- Composition API

### Proxy实现响应式

- 深度监听,性能更好(惰性递归, 什么时候使用到才去递归获取)
- 可监听新增/删除属性
- 可监听数组变化

### watch和watchEffect的区别

#### 相同点:

- 两者都可监听data属性变化

#### 不同点:

- watch需要明确监听哪个属性
- watchEffect会根据其中的属性, 自动监听其变化

### setup中如何获取组件实例

- 在setup和其他Composition API中没有this

- 可通过getCurrentInstance获取当前实例(弃用)

- 若使用options API可使用this

- > ## **`defineExpose` 暴露子组件属性**

### Vue3为何比Vue2快?

- Proxy响应式
- PatchFlag
- hoistStatic
- cacheHandler
- SSR优化
- tree-shaking

### vite为何启动快?

- 开发环境使用ES6 Module, 无需打包
- 生产环境使用rollup, 并不会快很多

### Composition API和React Hooks对比

- 前者setup只会被调用一次,而后者函数会被多次调用
- 前者无需useMemo useCallback, 因为setup只调用一次
- 前者无需顾虑调用顺序,而后者需要保证hooks的顺序
- 前者reactive + ref比后者useState要难理解
- 



### vue2和vue3的区别

- 响应式
  - `vue2` 的响应性主要依赖 `Object.defineProperty` 进行实现，但是 `Object.defineProperty` 只能监听 **指定对象的指定属性的 `getter` 行为和 `setter` 行为**，那么这样在某些情况下就会出现问题。
  - 在 `Vue3` 中，`Vue` 引入了反射和代理的概念，所谓反射指的是 `Reflect`，所谓代理指的是 `Proxy`。我们可以利用 `Proxy` 直接代理一个普通对象，得到一个 `proxy 实例` 的代理对象。在 `vue3` 中，这个过程通过 `reactive` 这个方法进行实现。但是 `proxy` 只能实现代理复杂数据类型，所以 `vue` 额外提供了 `ref` 方法，用来处理简单数据类型的响应性。`ref` 本质上并没有进行数据的监听，而是构建了一个 `RefImpl` 的类，通过 `set` 和 `get` 标记了 `value` 函数，以此来进行的实现。所以 `ref` 必须要通过 `.value` 进行触发，之所以要这么做本质是调用 `value 方法`。
- 运行时
- 编辑器



























