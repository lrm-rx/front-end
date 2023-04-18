# react

### setState

- 不可变值 - setState不能提前修改值, 如数组追加元素时使用不修改原数据的方法

  ```js
  // 不可变值（函数式编程，纯函数） - 数组
  const list5Copy = this.state.list5.slice()
  list5Copy.splice(2, 0, 'a') // 中间插入/删除
  this.setState({
      list1: this.state.list1.concat(100), // 追加
      list2: [...this.state.list2, 100], // 追加
      list3: this.state.list3.slice(0, 3), // 截取
      list4: this.state.list4.filter(item => item > 100), // 筛选
      list5: list5Copy // 其他操作
  })
  // 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值
  
  // 不可变值 - 对象
  this.setState({
      obj1: Object.assign({}, this.state.obj1, {a: 100}),
      obj2: {...this.state.obj2, a: 100}
  })
  // 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值
  ```

  

- 可能是异步更新

  - 在合成事件中是异步的

  - 在setTimeout或自定义事件中是同步的

  - > 但在*react18* 之后,*setState* 都为异步

- 可能会被合并

  - 传入对象会被合并
  - 传入函数不会被合并

### react生命周期

![](F:\front-end\images\react.png)

### react高级特性

- 函数组件

- 非受控组件

  - ref

  - defaultValue defaultChecked

  - 手动操作DOM元素

  - 使用场景

    - 必须手动操作DOM元素, setState实现不了
    - 文件上传
    - 某些富文本编辑器,需要传入DOM元素

  - > 受控组件 VS 非受控组件
    >
    > - 优先使用受控组件,符合React设计原则
    > - 必须操作DOM时,再使用非受控组件

- Portals(传送门)
  - ReactDOM.createPortal(jsx, 节点位置(dom节点))
  - Portals使用场景
    - overflow: hidden
    - 父组件 z-index值太小
    - fixed需要放在body第一层级
  
- context

  ```js
  import React from 'react'
  
  // 创建 Context 填入默认值（任何一个 js 变量）
  const ThemeContext = React.createContext('light')
  
  // 底层组件 - 函数是组件
  function ThemeLink (props) {
      // const theme = this.context // 会报错。函数式组件没有实例，即没有 this
  
      // 函数式组件可以使用 Consumer
      return <ThemeContext.Consumer>
          { value => <p>link's theme is {value}</p> }
      </ThemeContext.Consumer>
  }
  
  // 底层组件 - class 组件
  class ThemedButton extends React.Component {
      // 指定 contextType 读取当前的 theme context。
      // static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext
      render() {
          const theme = this.context // React 会往上找到最近的 theme Provider，然后使用它的值。
          return <div>
              <p>button's theme is {theme}</p>
          </div>
      }
  }
  ThemedButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context。
  
  // 中间的组件再也不必指明往下传递 theme 了。
  function Toolbar(props) {
      return (
          <div>
              <ThemedButton />
              <ThemeLink />
          </div>
      )
  }
  
  class App extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              theme: 'light'
          }
      }
      render() {
          return <ThemeContext.Provider value={this.state.theme}>
              <Toolbar />
              <hr/>
              <button onClick={this.changeTheme}>change theme</button>
          </ThemeContext.Provider>
      }
      changeTheme = () => {
          this.setState({
              theme: this.state.theme === 'light' ? 'dark' : 'light'
          })
      }
  }
  
  export default App
  
  ```

  

- 异步组件

  - import()
  - React.lazy
  - React.Suspense

- 性能优化

  - shouldComponentUpdate(SCU)
    - 必须配合"不可变值"一起使用
    - 有需要才使用
  - PureComponent和React.memo(函数组件使用)
  - 不可变值immutable.js
    - 彻底拥抱"不可变值"
    - 基于共享数据(不是深拷贝), 速度快
    - 有一定学习和迁移成本,按需使用

- 高阶组件HOC

  - 目的: 组件公共逻辑抽离
  - mixin, 已被React弃用

- Render Props

## redux

### 基本概念

- store state
- action
- reducer

### 单向数据流

- dispatch(action)
- reducer -> newState
- subscribe触发通知

### react-redux



### 异步action

- redux-thunk
- redux-promise
- redux-saga



### 中间件

![](F:\front-end\images\redux.png)

### redux数据流图

![](F:\front-end\images\redux-1.png)



## react原理

### 函数式编程

- 一种编程范式, 概念比较多
- 纯函数
- 不可变值

### vdom和diff

- 只比较同一层级,不跨级比较
- tag不相同, 则直接删除重建,不再深度比较
- tag和key, 两者都相同,则认为是相同节点, 不再深度比较

### JSX本质

- JSX等同于Vue模板
- Vue模板不是html
- JSX也不是JS
- React.createElement即h函数,返回vnode
- 第一个参数,可能是组件,也可能是html tag
- 组件名,首字母必须大写(React规定)

### 合成事件

- 所有事件挂载到document上

- event不是原生的, 是SyntheticEvent合成事件对象

- 和Vue事件不同,和DOM事件也不同

- 图示

  ![](F:\front-end\images\react-event.png)

  > 为什么要使用合成事件机制?
  >
  > - 更好的兼容性和跨平台
  > - 载到document, 减少内存消耗,避免频繁解绑
  > - 方便事件的统一管理(如事务机制)

### setState和batchUpdate

- 有时异步, 有时同步

- 有时合并(传对象), 有时不合并(传函数)

  >核心要点
  >
  >- setState主流程
  >
  >  ![](F:\front-end\images\setState.png)
  >
  >- batchUpdate机制
  >
  >- transaction(事务)机制

  - 哪些能命中batchUpdate机制
    - 生命周期(和它调用的函数)
    - React中注册的事件(和它调用的函数)
    - React可以"管理"的入口

### 组件渲染过程

- props state
- rendenr()生成vnode
- patch(elem, vnode)

## React和Vue的区别

### 相同点:

- 都支持组件化
- 都是数据驱动视图
- 都使用vdom操作DOM

### 不同点:

- React使用JSX拥抱JS, Vue2.X使用模板拥抱html, vue3.X也可以使JSX
- React函数式编辑, Vue声明式编程
- React更多需要自力更生, 灵活度更高, vue封装性更高

# React Hooks

### class组件的问题

- 大型组件很难拆分和重构,很难测试(即class不易拆分)
- 相同业务逻辑,分散到各个方法中,逻辑混乱
- 复用逻辑变得复杂,如Mixins, hoc, render prop

### React组件更易用函数表达

- React提倡函数式编程, view=fn(props)
- 函数更灵活,更易拆分, 更易测试
- 但函数组件太简单,需要增强能力 ---- hooks

### useEffect中返回函数fn

- useEffect依赖[], 组件销毁是执行fn, 等于WillUnMount
- useEffect无依赖或依赖[a, b], 组件更新时执行fn
- 即下一次执行useEffect之前,就会执行fn, 无论更新或卸载

### useReducer和redux的区别

- useReducer是useState的代替方案,用于state复杂变化
- useReducer是单个组件状态管理,组件通讯还需要props
- redux是全局的状态管理,多组件共享数据

### useMemo使用总结

> 使用 useMemo缓存数据

- React默认会更新所有子组件
- class组件使用SCU和PureComponent做优化
- Hooks中使用useMemo, 但优化的原理是相同的

### useCallback使用总结

> 使用useCallback缓存函数

- useMemo缓存数据
- useCallback缓存函数
- 两者是React Hooks的常见优化策略

### 总结

- useRef
- useContext
- useReducer
- useMemo
- useCallback

### 自定义Hook

- 封装通用的功能
- 开发和使用第三方hooks
- 自定义Hook带来了无限的扩展性,解耦代码 

  ### Hooks的使用规范

- 命名规范useXxx
- 关于Hooks的调用顺序
- 只能用于React函数组件和自定义Hook中,其他地方不可以
- 只能用于顶层代码, 不能在循环/判断中使用hooks
- eslint插件eslint-plugin-react-hooks可以帮到

### Hooks的调用顺序

- 无论是render还是re-render, hooks调用顺序必须一致
- 如果hooks出现在循环/判断里,则无法保证顺序一致
- hooks严重依赖于调用顺序

### React Hooks注意事项

- useState初始化值,只有第一次有效
- 第二个参数为空数组时, useEffect内部不能修改state
- 第二个参数存在引用类型数据时, useEffect可能出现死循环