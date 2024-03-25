# 路由loader函数与redirect方法

## loader函数

loader函数进行路由前触发，配合redirect做权限拦截。还可以通过useLoaderData()获取loader函数返回的数据。

```jsx
{
    path: 'bar',
    element: <Bar />,
    loader: async() => {
        let ret = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({errcode: 0})
            }, 2000)
        })
        return ret; 
    }
}
```

在<Bar>这个组件内就可以通过`useLoaderData`函数来获取到ret的值。

```jsx
import { useLoaderData } from 'react-router-dom'
export default function Bar() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>Bar</div>
  )
}
```

## redirect方法

在`loader`函数中是没有办法使用<Navigate>组件进行重定向操作的，所以在React路由中提供了，另一种重定向的操作，即`redirect`函数。

```javascript
{
    path: 'bar',
    element: <Bar />,
    loader: async() => {
        let ret = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({errcode: Math.random() > 0.5 ? 0 : -1})
            }, 2000)
        })
        if(ret.errcode === 0){
            return ret;
        }
        else{
            return redirect('/login')
        }
    }
}
```

