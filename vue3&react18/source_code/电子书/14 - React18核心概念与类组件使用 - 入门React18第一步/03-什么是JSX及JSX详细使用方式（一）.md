# 什么是JSX及JSX详细使用方式（一）

## 什么是JSX

在上一个小节中，我们利用`React.createElement()`方法创建了虚拟DOM。但是这种方法非常的麻烦，如果结构非常复杂的情况下，那么是灾难性的，例如多添加一个`span`标签，代码如下：

```javascript
let element = React.createElement('h2', {title: 'hi'}, [
    'hello world',
    React.createElement('span', null, '!!!!!!')
]);
```

所以才有了JSX语法，即：这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。

```jsx
let element = <h2 title="hi">hello world<span>!!!!!!</span></h2>
```

JSX写起来就方便很多了，在内部会转换成`React.createElement()`，然后再转换成对应的虚拟DOM，但是JSX语法浏览器不认识，所以需要利用babel插件进行转义处理。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../react.development.js"></script>
  <script src="../react-dom.development.js"></script>
  <script src="../babel.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let element = (
      <h2 title="hi">
        hello world
        <span>!!!!!!</span>
      </h2>
    ); 
    root.render(element);
  </script>
</body>
</html>
```

## JSX语法详解

JSX 实际上等于 JavaScript + XML 的组合，那么就有很多结构限制，具体如下：

- 标签要小写
- 单标签要闭合
- class属性与for属性
- 多单词属性需驼峰，data-*不需要
- 唯一根节点

```jsx
let app = document.querySelector('#app');
let root = ReactDOM.createRoot(app); 
let element = (
    <React.Fragment>
        <h2 title="hi" className="box">
            hello world
            <span>!!!!!!</span>
            <label htmlFor="elemInput">用户名：</label>
            <input id="elemInput" type="text" tabIndex="3" data-userid="123" />
        </h2>
        <p>ppppppp</p>
    </React.Fragment>
); 
root.render(element);
```



