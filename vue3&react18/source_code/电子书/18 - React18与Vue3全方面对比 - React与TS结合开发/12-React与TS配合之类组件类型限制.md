# React与TS配合之类组件类型限制

## 类组件类型限定

类组件在React中并不是重点，但是也要了解怎么对类组件进行类型的限制。

```tsx
import React, { Component } from 'react'
interface WelcomeProps {
  msg: string
  count: number
}
interface WelcomeState {
  username: string
}
class Welcome extends Component<WelcomeProps, WelcomeState> {
  state = {
    username: 'xiaoming'
  }
  render() {
    return (
      <div>hello Welcome {this.state.username}</div>
    )
  }
}
export default function App() {
  return (
    <div>
      <h2>05_react-ts</h2>
      <Welcome msg="hello" count={123} />      
    </div>
  )
}
```

主要就是给继承的类Component传递泛型，Props和State，这样可以实现父子通信的数据进行类型限制，又可以对内部的state进行类型限制。
