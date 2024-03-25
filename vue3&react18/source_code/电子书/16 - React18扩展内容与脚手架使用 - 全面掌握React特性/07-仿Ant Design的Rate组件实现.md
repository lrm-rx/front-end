# 仿Ant Design的Rate组件实现

在本小节中将继续来仿造一个antd中的组件，就是Rate评分组件，仿造实现的地址如下：huhttps://ant.design/components/rate-cn/。

首先还是在/MyAntd文件夹下创建两个文件，即：/MyRate/MyRate.jsx 和 /MyRate/MyRate.scss。

具体要实现组件的功能需求：

- 最大分值
- 选中分值
- 事件交互

```jsx
// /MyRate/MyRate.jsx

import React, { useState } from 'react'
import './MyRate.scss'
import '../../iconfont/iconfont.css'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default function MyRate(props) {
    const [ clickValue, setClickValue ] = useState(props.value)
    const [ mouseValue, setMouseValue ] = useState(props.value)
    const stars = [];
    const handleMouseEnter = (index) => {
        return () => {
            setMouseValue(index+1)
        }
    }
    const handleMouseLeave = () => {
        setMouseValue(clickValue)
    }
    const handleMouseDown = (index) => {
        return () => {
            setClickValue(index+1)
            props.onChange(index+1)
        }
    }
    for(let i=0;i<props.count;i++){
        const rateClass = classnames({
            iconfont: true,
            'icon-xingxing': true,
            active: mouseValue > i ? true : false
        })
        stars.push(<i key={i} className={rateClass} onMouseEnter={handleMouseEnter(i)} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown(i)}></i>);
    }
    return (
        <div className="my-rate">{stars}</div>
    )
}
MyRate.propTypes = {
    count: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func
}
MyRate.defaultProps = {
    count: 5,
    value: 0,
    onChange: function(){}
}
```

```scss
// /MyRate/MyRate.scss

.my-rate{
  i{
    font-size: 20px;
    color: #ccc;
  }
  .active{
    color: #fadb14;
  }
}
```

开发好组件后，就去测试一下评分组件的各种功能。

```jsx
import React, { useState } from 'react'
import { MyRate } from './MyAntd'
export default function App() {
    const [value, setValue] = useState(3)
    return (
        <div>
            <h2>hello myAntd</h2>
            <MyRate></MyRate>
            <MyRate count={4}></MyRate>
            <MyRate value={value} onChange={setValue} ></MyRate> { value }
        </div>
    )
}
```

<div align=center>
    <img src="./img/16-06-仿antd评分组件.png" />
    <div>仿antd评分组件</div>
</div>
