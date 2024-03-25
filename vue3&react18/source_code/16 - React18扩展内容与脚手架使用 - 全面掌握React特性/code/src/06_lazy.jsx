import React, { lazy, Suspense, startTransition } from 'react'
import { useState } from 'react'
import ErrorBoundary from './07_ErrorBoundary'
//import Welcome from './components/Welcome'

const Welcome = lazy(()=> import('./components/Welcome'))
const Welcome2 = lazy(()=> import('./components/Welcome2'))

export default function App() {
  const [ show, setShow ] = useState(true)
  const handleClick = () => {
    startTransition(()=>{
      setShow(false)
    })
  }
  return (
    <div>
      <h2>hello lazy</h2>
      <button onClick={handleClick}>点击</button>
      <ErrorBoundary>
        <Suspense fallback={ <div>loading...</div> }>
          { show ? <Welcome /> : <Welcome2 /> }
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
