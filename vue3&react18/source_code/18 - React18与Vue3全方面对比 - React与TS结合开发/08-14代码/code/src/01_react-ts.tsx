import React from 'react'

interface WelcomeProps {
  msg?: string
  count?: number
  list: string[]
  info: { username: string; age: number }
  status?: 'loading' | 'success' | 'error'
}

function Welcome(props: WelcomeProps) {
  const { count = 0 } = props;
  return (
    <div>
      <h2>hello Welcome, {count}</h2>
    </div>
  )
}
/* Welcome.defaultProps = {
  count: 0
} */

/* const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <div>
      <h2>hello Welcome</h2>
    </div>
  )
} */

export default function App() {
  return (
    <div>
      <h2>01_react-ts</h2>
      <Welcome msg="hello" count={123} list={['a', 'b', 'c']} info={{username: 'xiaoming', age: 20}} />
      <Welcome list={['a', 'b', 'c']} info={{username: 'xiaoming', age: 20}} />
      <Welcome status="loading" list={['a', 'b', 'c']} info={{username: 'xiaoming', age: 20}} />
    </div>
  )
}
