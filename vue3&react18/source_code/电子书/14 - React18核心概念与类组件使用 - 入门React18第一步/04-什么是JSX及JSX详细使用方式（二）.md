# 什么是JSX及JSX详细使用方式（二）

## JSX语法详解

在上一小节介绍了一些JSX的语法，本小节将继续学习JSX的语法，具体如下：

- { } 模板语法
- 添加注释
- 属性渲染变量
- 事件渲染函数
- style渲染对象
- { } 渲染 JSX

```jsx
let app = document.querySelector('#app');
let root = ReactDOM.createRoot(app); 
let myClass = 'box';
let handleClick = () => {
    console.log(123);
}
let myStyle = {
    color: 'red'
};
let element = (
    <div>
        { /* <p>{ 1 + 1 }</p> */ }
        <p className={myClass}>{ 'hello' }</p>
        <p onClick={handleClick}>{ 'hello'.repeat(3) }</p>
        <p style={myStyle}>{ true ? 123 : 456 }</p>
        <p>{ <span>span111</span> }</p>
        <p><span>span222</span></p>
    </div>
); 
root.render(element);
```

这里可以看到react中的模板语法采用的是单大括号，这一点跟Vue不太一样，Vue采用的是双大括号。

在React模板中，可以直接渲染JSX进去，是非常强大的，后面也会经常利用这一点特性去进行操作。

