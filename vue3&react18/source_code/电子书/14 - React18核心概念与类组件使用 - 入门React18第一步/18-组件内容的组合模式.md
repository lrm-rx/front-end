# 组件内容的组合模式

React组件也是可以进行内容分发的，但是并不想Vue一样通过插槽来进行接收，而是通过props.children这个属性进行接收的。

```jsx
class Welcome extends React.Component {
    render(){
        return (
            <div>
                hello world, { this.props.children }
            </div>
        );
    }
}
let element = (
    <Welcome>
        <h2>这是一个标题</h2>
    </Welcome>
);
```

那么如何进行多内容的分区域处理呢？也就是Vue中多插槽的概念。这个就不能利用props.children来实现了，只能采用React模板的能力，通过传递JSX元素的方式进行实现。

```jsx
class Welcome extends React.Component {
    render(){
        return (
            <div>
                { this.props.title }
                hello world
                { this.props.content }
            </div>
        );
    }
}
let element = (
    <Welcome title={ <h2>这是一个标题</h2> } content={ <p>这是一个段落</p> } />
);
```
