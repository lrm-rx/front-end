# React18与Vue3对比之组件通信-逻辑复用-内容分发-DOM操作等功能

## 组件通信对比

Vue父子props，子父emits

React父子props，子父回调函数

emits自定义事件和回调函数，但实际上是一样的思想。

跨组件的通信方案也很类似，都是一种依赖注入的方式来实现的。

## 功能复用处理

Vue选项式采用：mixins混入；组合式采用：use函数

React类组件采用：Render Props、HOC；函数组件：use函数

可以发现组合式API和函数组件都是采用use函数，所以基本复用是差不多的思想，这也是两个框架推荐的用法。

## 内容分发处理

Vue通过<slot>插槽，进行接收

React通过props.children，进行接收

## 原生DOM处理

Vue通过ref属性

React也通过ref属性处理

思路都是差不多的，就是给元素添加ref属性，在跟对象或字符串绑定在一起，这样就可以直接获取到DOM元素。

