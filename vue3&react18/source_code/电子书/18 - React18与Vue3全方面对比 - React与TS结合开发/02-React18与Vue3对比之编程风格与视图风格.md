# React18与Vue3对比之编程风格与视图风格

## 编程风格对比

React语法少，难度大

Vue语法多，难度小

例如：在react中是没有指令的，所有的功能都要通过原生JavaScript来实现。所以说当使用Vue框架的时候，真的就是在操作Vue，而使用React框架其实更贴近于原生JS操作。

举一个实例：比如表单操作的时候，在Vue中可以直接通过v-model指定进行操作。而React则比较麻烦，需要通过受控组件的方式给表单添加value和onChange配置来进行操作。

```html
<!-- vue -->
<input v-model="username">
```

```html
<!-- react -->
<input value={username} onChange={(ev)=> setUsername(ev.target.value)} />
```

## 视图风格对比

Vue采用<template>字符串模板。更贴近HTML，学习成本低，但有时候不灵活。

React采用JSX语法，限制比较多，但是可以跟模板语法很好的进行结合。

所以两个框架各有优缺点。

下面看一下JSX灵活的地方。

```html
<!-- vue -->
<template>
    <h1 v-if="leave === 1">
        标题1
    </h1>
    <h2 v-if="leave === 2">
        标题2
    </h2>
</template>
```

```jsx
<!-- react -->
let Welcome = () => {
    const leave = 1;
    const Tag = 'h' + leave;
    return (
    	<div>
        	{ <Tag>标题{leave}</Tag> }
        </div>
    );
}
```

