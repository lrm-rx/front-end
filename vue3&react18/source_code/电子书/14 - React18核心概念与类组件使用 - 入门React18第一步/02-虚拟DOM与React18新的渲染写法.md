# 虚拟DOM与React18新的渲染写法

## 对虚拟DOM的理解

在学习React18之前，还是要对虚拟DOM进行深入了解。Vue和React框架都会自动控制DOM的更新，而直接操作真实DOM是非常耗性能的，所以才有了虚拟DOM的概念。

下面是一个多次触发DOM更新的例子和只触发一次DOM的一个对比。

```html
<ul></ul>
<script>
	// 多次触发DOM操作，非常耗时：1000ms左右
    console.time(1)
    let ul = document.querySelector('ul');

    for(let i=0;i<1000;i++){
        ul.innerHTML += `<li>${i}</li>`;
    }
    console.timeEnd(1)
  </script>
```

```html
<ul></ul>
<script>
	// 只触发一次DOM操作，节约时间：1ms左右
   	console.time(1)
    let ul = document.querySelector('ul');
    let str = '';
    for(let i=0;i<1000;i++){
      str += `<li>${i}</li>`;
    }
    ul.innerHTML = str;
    console.timeEnd(1)
</script>
```

所以在React18中，我们并不直接操作真实DOM，而是操作虚拟DOM，再一次性的更新真实DOM。

在React18中，需要使用两个文件来初始化框架：

- react.development.js 或  react模块  -> 生成虚拟DOM
- react-dom.development.js 或 react-dom/client模块  ->  Diff算法 + 处理真实DOM

下面就是初始化React程序的代码。

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
</head>
<body>
  <div id="app"></div>
  <script>
    // React对象 -> react.development.js
    // ReactDOM对象 -> react-dom.development.js
    let app = document.querySelector('#app');
    // root根对象，react渲染的
    let root = ReactDOM.createRoot(app); 
    // React.createElement() -> 创建虚拟DOM 
    let element = React.createElement('h2', {title: 'hi'}, 'hello world');
    root.render(element);
  </script>
</body>
</html>
```

这样在页面中就可以渲染一个`h2`标签，并显示`hello world`字样。

<div align=center>
    <img src="./img/14-01-虚拟DOM渲染到页面.png" />
    <div>虚拟DOM渲染到页面</div>
</div>


