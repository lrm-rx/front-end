/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Message() {
  return ReactDOM.createPortal( <div>hello Message</div>, document.body )
}

export default function App() {
  const [ show, setShow ] = useState(false)
  const handleClick = () => {
    setShow(true)
  }
  return (
    <div>
      <h2>hello portal</h2>
      <button onClick={handleClick}>点击</button>
      { show && <Message /> }
    </div>
  )
} */


//------------------------------------------------------------
import { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client';
import './05_portal.scss'
import { CSSTransition } from 'react-transition-group'

const message = {
  success(text){
    const message = ReactDOM.createRoot(document.querySelector('#message'))
    message.render(<Message text={text} icon="✔" />)
  }
}
function Message(props) {
  const [prop, setProp] = useState(true)
  const nodeRef = useRef(null)
  const handleEntered = () => {
    setTimeout(()=>{
      setProp(false)
    }, 2000)
  }
  return (
    <CSSTransition appear nodeRef={nodeRef} in={prop} timeout={1000} classNames="Message" unmountOnExit onEntered={handleEntered}>
      <div className="Message" ref={nodeRef}>{props.icon} {props.text}</div>
    </CSSTransition>
  )
}

export default function App() {
  const handleClick = () => {
    message.success('登录成功');
  }
  return (
    <div>
      <h2>hello portal</h2>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}