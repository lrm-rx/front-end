# React18与Vue3对比之模板-样式-事件-表单等功能

## 模板对比

Vue的视图变化，主要通过：指令 + 模板的方式

React的视图变化，主要通过：原生JS + 模板的方式

React的模板比较强大，因为可以编写JSX结构，所以可以做出更加灵活的结构处理。

## 样式对比

Vue的class和style都有三种写法：字符串、数组、对象

React的style只能写对象，class只能字符串，可借助classnames这个库

两个框架基本上都可以满足常见的样式需求。

## 事件对比

Vue事件功能丰富

React事件传参需要高阶处理

```vue
<!-- Vue -->
<template>
    <ul>
        <li v-for="item,index in list" @click="handleClick(index)"></li>
    </ul>
</template>
<script>
methods: {
	handleClick(index){
	
    }
}
</script>
```

```jsx
<!-- React -->
<ul>
{ 
    list.map((v, i)=> <li onClick={handleClick(i)}></li>)
}
</ul>
const handleClick = (index) => {
    return () => {
        console.log(index)
    }    
}
```

## 表单对比

Vue表单双向绑定v-model

React表单受控与非受控

针对表单操作这一块来说，Vue的表单指令v-model还是非常灵活的，总体对比要比React使用方便且灵活。

