# useSearchParams与useLocation函数

## useLocation函数

用于获取路由URL的信息的，返回一个location对象。

```jsx
import { useLocation } from 'react-router-dom'
export default function Bar() {
  const location = useLocation()
  console.log(location)
  return (
    <div>Bar</div>
  )
}
```

location对象相关属性如下：

- hash：哈希值
- key：唯一标识
- pathname：路径
- search：query值
- state：隐式数据

一般传递的数据就是需要拿到query值，不过要通过search去解析对应的query值是比较麻烦的，需要把字符串解析成对象。

所以可以利用useSearchParams函数来获取query数据。

## useSearchParams函数

用于处理URL中的携带数据。

```jsx
import { useSearchParams } from 'react-router-dom'

export default function Bar() {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log( searchParams.get('age') );
  const handleClick = () => {
	setSearchParams({ age: 22 })
  }
  return (
    <div onClick={handleClick}>Bar</div>
  )
}
```

可以进行数据的获取，也可以对URL的query进行设置操作，非常的方便。

