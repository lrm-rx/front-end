import React from 'react'

interface WelcomeProps {
  children?: React.ReactNode
  handleMsg?: (ev: React.MouseEvent<HTMLButtonElement>)=> void
}

function Welcome(props: WelcomeProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.value)
  }
  return (
    <div>
      <h2>hello Welcome, {props.children}</h2>
      <button onClick={props.handleMsg}>点击</button>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h2>02_react-ts</h2>
      <Welcome />
      <Welcome handleMsg={(ev)=>{}}>
        aaaaa
      </Welcome>
      
    </div>
  )
}
