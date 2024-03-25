import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const elemInput = useRef()
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch({
      type: 'user/change',
      payload: elemInput.current.value
    })
    navigate('/user')
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" ref={elemInput} />
      <button onClick={handleClick}>登录</button>
    </div>
  )
}
