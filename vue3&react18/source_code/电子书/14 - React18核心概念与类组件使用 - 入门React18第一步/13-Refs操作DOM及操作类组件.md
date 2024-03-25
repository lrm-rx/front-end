# Refs操作DOM及操作类组件

React操作原生DOM跟Vue框架是类似的，都是通过ref属性来完成的，主要使用`React.createRef()`这个方法和`callbackRef()`这个回调函数写法。

## React.createRef()

这个方法可以创建一个ref对象，然后把这个ref对象添加到对应的JSX元素的ref属性中，就可以控制原生DOM了。

```jsx
class Welcome extends React.Component {
    myRef = React.createRef()
    handleClick = () => {   
        //console.log(this.myRef.current);  // 原生DOM 
        this.myRef.current.focus();
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <input type="text" ref={this.myRef} />
            </div>
        );
    }
}
```

## 回调函数写法

还可以编写一个回调函数来完成，原生DOM的操作。

```jsx
class Welcome extends React.Component {
    callbackRef = (element) => {
        element.focus();
    }
    handleClick = () => {   
        this.myRef.focus();
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <input type="text" ref={this.callbackRef} />
            </div>
        );
    }
}
```

## Ref操作类组件

除了可以把ref属性添加到JSX元素上，还可以把ref属性添加到类组件上，那么这样可以拿到类组件的实例对象。

```jsx
class Head extends React.Component {
    username = 'xiaoming';
    render(){
        return (
            <div>head component</div>
        );
    }
}

class Welcome extends React.Component {
    myRef = React.createRef()
    handleClick = () => {   
        console.log(this.myRef.current);   //组件的实例对象
        console.log(this.myRef.current.username);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <Head ref={this.myRef} />
            </div>
        );
    }
}
```

这样可以间接的实现父子组件之间的数据通信。

ref属性还可以进行转发操作，可以把ref传递到组件内，获取到子组件的DOM元素。

```jsx
class Head extends React.Component {
    render(){
        return (
            <div ref={this.props.myRef}>head component</div>
        );
    }
}
class Welcome extends React.Component {
    myRef = React.createRef()
    handleClick = () => {   
        console.log(this.myRef.current);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <Head myRef={this.myRef} />
            </div>
        );
    }
}
```



