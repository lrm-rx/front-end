# redux-thunk中间件处理异步操作

## redux-thunk中间件

在Redux中进行异步处理需要使用，redux-thunk这个中间件来完成。首先需要安装：`npm i redux-thunk`。

然后需要让redux-thunk中间件在Redux配置文件中生效。

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import counterReducer from './modules/counter';
import messageReducer from './modules/message';
const store = createStore(combineReducers({
  counter: counterReducer,
  message: messageReducer
}), composeWithDevTools(applyMiddleware(thunk)))
export default store;
```

redux-thunk中间件，可以使dispatch方法除了可以接收对象以外，还可以接收回调函数。

```javascript
// /store/modules/counter.js
export function counterTestAction(){
  return (dispatch) => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('response data')
      }, 2000)
    })
  }
}
```

```javascript
import { counterTestAction } from '../../store/modules/counter'

dispatch(counterTestAction()).then((res)=>{
    dispatch({type: 'counter/inc', payload: 5})
    console.log(res)   // 'response data'
})
```

这样就可以在异步操作完成后，再次调用同步的reducer函数了，从而完成异步加同步的联动操作。

