

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
