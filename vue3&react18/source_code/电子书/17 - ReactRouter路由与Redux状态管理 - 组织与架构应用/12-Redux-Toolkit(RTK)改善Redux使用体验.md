# Redux-Toolkit(RTK)改善Redux使用体验

## Redux-Toolkit(RTK)库

Redux在使用上还是有很多不方便的地方，所以提供了Redux-Toolkit(RTK)这个模块，通过这么模块可以更方便的处理Redux的操作，下面列举一些RTK的好处：

- 可以自动跟redux devtools结合，不需要再下载模块进行生效
- 数据不需要再通过返回值进行修改，像Vue一样可以直接修改
- 内置了 redux-thunk 这个异步插件
- 代码风格更好，采用选项式编写程序

下面就采用RTK的方式来编写状态管理模块counter.js和message.js。

```jsx
// /store/modules/counter.js
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  count: 0
}
const counterSlice = createSlice({
  // dispatch('counter/inc')
  name: 'counter',
  initialState: {
    ...initialState,
    doubleCount: initialState.count * 2
  },
  reducers: {
    inc(state, action){
      state.count += action.payload
      state.doubleCount = state.count * 2
    }
  }
})
export default counterSlice.reducer
```

```javascript
// /store/modules/message.js
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  msg: 'hello'
}
const messageSlice = createSlice({
  // dispatch('message/change')
  name: 'message',
  initialState: {
    ...initialState,
    upperMsg: initialState.msg.toUpperCase()
  },
  reducers: {
    change(state, action){
      state.msg = action.payload
      state.upperMsg = state.msg.toUpperCase()
    }
  }
})
export default messageSlice.reducer
```

可以发现RTK采用配置写法，更加清晰并且一目了然。而且RTK下可以直接进行数据的修改，不再需要通过返回值来进行修改，底层类似于Vuex的方式就是利用new Proxy直接监控数据的改变。

下面是在主模块中进行配置RTK模块的具体步骤。

```javascript
// /store/index.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter';
import messageReducer from './modules/message';
const store = configureStore({
  reducer: {
    // state.counter.count
    counter: counterReducer,
    message: messageReducer
  }
})
export default store;
```

配置好后，在使用上是没有任何变化的，依然采用react-redux来进行操作。

