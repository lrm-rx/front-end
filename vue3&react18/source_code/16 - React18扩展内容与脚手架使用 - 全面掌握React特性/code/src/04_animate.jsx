import React, { useState, useRef } from 'react'
import './04_animate.scss'
import { CSSTransition } from 'react-transition-group'

export default function App() {
  const [prop, setProp] = useState(true)
  const nodeRef = useRef(null)
  const handleClick = () => {
    setProp(!prop)
  }
  const handleEntered = () => {
    console.log('entered')
  }
  return (
    <div className="Animate">
      <h2>hello animate</h2>
      <button onClick={handleClick}>点击</button>
      <CSSTransition appear nodeRef={nodeRef} in={prop} timeout={1000} classNames="fade" unmountOnExit onEntered={handleEntered}>
        <div className="box" ref={nodeRef}></div>
      </CSSTransition>
    </div>
  )
}
