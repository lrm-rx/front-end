# 脚手架下样式处理方式及Sass支持

在脚手架下对样式的处理方式非常的多，主要有：全局样式，Sass/Less支持，模块化CSS，CSS-in-JS，样式模块classnames等，下面就分别来看一下。

## 全局样式

在对应的jsx文件下创建的.css文件就是一个全局样式，在jsx引入后就可以在全局环境下生效。

```jsx
import './Welcome.css'
export default function Welcome() {
  return (
    <div className='Welcome'>
      <div className='box'>Welcome</div>
      <div className='box2'>Welcome</div>
    </div>
  )
}
```

这样操作很容易产生冲突，所以可以采用命名空间的方式来避免冲突，即最外层元素添加跟当前组件一样名字的选择器。

内部的其他选择器都是这个最外层选择器的后代选择器。

```css
// Welcome.css
.Welcome .box{
  color: yellow;
}
.Welcome .box2{
  width: 100px;
  height: 100px;
  background: blue;
}
```

不过这样写样式会很麻烦，可利用预编译CSS的嵌套写法来对代码进行改进，这里以Sass作为演示。

## 预编译CSS的支持

首先默认脚手架是不支持Sass或其他预编译CSS的，所以需要安装第三方模块来进行生效。

```shell
npm install sass
```

安装好后，就可以编写已.scss为后缀的文件了。

```scss
.Welcome{
  .box{
    width: 100px;
    height: 100px;
    background: red;
  }
  .box2{
    width: 100px;
    height: 100px;
    background: blue;
  }
}
```

## 模块化CSS

模块化的CSS，主要就是实现局部样式的能力，这样就只能在当前组件内生效，不会影响到其他的组件。模块化的CSS有格式上的要求，即`[name].module.css`

下面以Welcome组件举例：

```jsx
import style from './Welcome.module.css'
export default function Welcome() {
  return (
    <div>
      <div className={style.box}>Welcome</div>
      <div className={style.box2}>Welcome</div>
    </div>
  )
} 
```

这种局部的操作，style.box只会给指定的元素添加样式。

## CSS-in-JS

这种方法主要会把CSS代码直接写入到JSX文件内，这样可以不分成两个文件，而是只需要一个文件就可以完成一个独立的组件开发。

这种CSS-in-JS的实现是需要借助于第三方模块的，目前比较流行的是：`styled-components`这个模块。首先是需要下载。

```shell
npm install styled-components
```

```jsx
import styled from 'styled-components'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
  background: red;
`;
const Text = styled.a`
  color: blue;
  background: red;
  &:hover {
    color: yellow;
  };
`;
export default function Welcome() {
    return (
        <div>
            <Title>我是一个标题</Title>
            <Text href="http://www.imooc.com">我是一个链接</Text>
        </div>
    )
}
```

## 样式模块classnames

有时候操作class样式的时候，往往普通的字符串很难满足我们的需求，所以可以借助第三方模块`classnames`，他允许我们操作多样式的时候可以以对象的形式进行控制。

```jsx
import './Welcome.css'
import classnames from 'classnames'
export default function Welcome() {
  //const myClass = 'box box2'
  const myClass = classnames({
    box: true,
    box2: true
  })
  return (
    <div className='Welcome'>
      <h2 className={myClass}>这是一个标题</h2>
    </div>
  )
}
```

