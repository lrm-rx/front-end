import React from 'react'

interface HeaderProps {
  username: string
}

interface WelcomeProps {
  style: React.CSSProperties
  component: React.ComponentType<HeaderProps>
}

function Welcome(props: WelcomeProps) {
  return (
    <div>
      <h2>hello Welcome</h2>
      <props.component username="xiaoming"></props.component>
    </div>
  )
}

function Header(props: HeaderProps) {
  return (
    <div>hello Header</div>
  )
}

export default function App() {
  return (
    <div>
      <h2>03_react-ts</h2>
      <Welcome style={{'border': '1px red solid', display: 'none'}} component={Header} />
      
    </div>
  )
}
