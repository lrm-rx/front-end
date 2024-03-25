import React, { useEffect, useState, useRef } from 'react'

interface WelcomeProps {
}

function Welcome(props: WelcomeProps) {
  return (
    <div>
      <h2>hello Welcome</h2>
    </div>
  )
}

type Info = {username: string; age: number}

export default function App() {
  //const [count, setCount] = useState(0)
  const [count, setCount] = useState<number|string>(0)
  const [list, setList] = useState<string[]>([])
  //const [info, setInfo] = useState<{username: string; age: number}|null>(null)
  const [info, setInfo] = useState<Info>({} as Info)
  const myRef = useRef<HTMLButtonElement>(null)
  
  useEffect(()=>{

    console.log( myRef.current?.innerHTML )  // 可选链(类型保护)
    //console.log( myRef.current!.innerHTML )  // 非空断言(慎用)
    
    return ()=>{
    }
  }, [])
  
  
  const handleClick = () => {
    setCount(1)
    setList(['a', 'b'])
  }
  return (
    <div>
      <h2>04_react-ts</h2>
      <button onClick={handleClick} ref={myRef}>点击</button>
      { info.username }, { info.age }
      <Welcome />      
    </div>
  )
}
