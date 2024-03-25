# react-transition-group模块实现动画功能

## react-transition-group模块

这是一个第三方模块，主要用于完成React动画的，官网地址：http://reactcommunity.org/react-transition-group，需要提前下载安装。

```shell
npm install react-transition-group
```

首先在使用react-transition-group完成动画之前，需要对涉及到的样式做一定的了解，主要有三组样式选择器：

- *-enter  *-enter-active  *-enter-done
- *-exit  *-exit-active  *-exit-done
- *-appear  *-appear-active  *-appear-done

enter表示从隐藏到显示的动画；exit表示从显示到隐藏的动画；appear表示初始添加的动画。

其中带有active标识的表示动画过程中，带有done标识的表示动画结束时。

下面就创建两个文件，即：animate.jsx 和 animate.scss，代码如下：

```jsx
// animate.jsx
import React, { useState, useRef } from 'react'
import './animate.scss'
import { CSSTransition } from 'react-transition-group'
export default function App() {
  const [prop, setProp] = useState(true)
  const nodeRef = useRef(null)
  const handleClick = () => {
    setProp(!prop)
  }
  const handleEntered = () => {
    console.log('entered')
  }
  return (
    <div className="Animate">
      <h2>hello animate</h2>
      <button onClick={handleClick}>点击</button>
      <CSSTransition appear nodeRef={nodeRef} in={prop} timeout={1000} classNames="fade" unmountOnExit onEntered={handleEntered}>
        <div className="box" ref={nodeRef}></div>
      </CSSTransition>
    </div>
  )
}
```

```scss
// animate.scss

.Animate{
    .box{
        width: 150px;
        height: 150px;
        background: red;
        opacity: 1;
    }
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        opacity: 1;
        transition: 1s;
    }
    .fade-enter-done{
        opacity: 1;
    }
    .fade-exit{
        opacity: 1;
    }
    .fade-exit-active{
        opacity: 0;
        transition: 1s;
    }
    .fade-exit-done{
        opacity: 0;
    }
    .fade-appear{
        opacity: 0;
    }
    .fade-appear-active{
        opacity: 1;
        transition: 1s;
    }
    .fade-appear-done{
        opacity: 1;
    }
}
```

首先模块会提供一个<CSSTransition>组件用于实现动画功能，classNames="fade"来匹配对应的CSS动画选择器。

in={prop}用于控制显示隐藏的状态切换，timeout={1000}要跟选择器中的过渡时间相匹配，这样才可以完成动画的时间。

nodeRef={nodeRef} 和 ref={nodeRef} 在内部会把要动画的元素联系起来。

appear属性是添加初始动画效果，unmountOnExit属性用于动画结束后删除元素。

onEntered={handleEntered}是动画结束后触发的回调函数。

最终完成了一个具有淡入淡出的动画效果。
