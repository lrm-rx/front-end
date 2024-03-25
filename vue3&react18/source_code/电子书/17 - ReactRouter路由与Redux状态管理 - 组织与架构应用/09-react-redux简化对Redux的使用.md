# react-redux简化对Redux的使用

## react-redux库

因为Redux是一个独立的库，所以和React结合还是不够方便，因此就诞生了react-redux这个库，这个库可以让Redux于React结合的更加简单轻松，属于Redux的一个辅助模块。

主要提供的API有：

- <Provider store={store}> 
- useSelector
- useDispatch

<Provider>组件主要是注册状态管理与React结合，并且可以自动完成重渲染的操作。

useSelector，useDispatch都是react-redux库提供的use函数，可以获取共享状态以及修改共享状态。

```jsx
import React from 'react'
import './Bar.scss'
import { useSelector } from 'react-redux'
export default function Bar() {
  const count = useSelector((state)=> state.counter.count)
  const handleClick = () => {
    dispatch({
      type: 'inc',
      payload: 5
    })
  }
  return (
    <div>
     <button onClick={handleClick}>修改count</button>     
     Bar, { count }
    </div>
  )
}
```

在主模块中进行注册。

```javascript
import { RouterProvider } from 'react-router-dom'
import router from './router';
import { Provider } from 'react-redux'
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
```

