import React from 'react'
import './About.scss'
import { Outlet, useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  const handleClick1 = () => {
    navigate('/about/foo')
  }
  const handleClick2 = () => {
    navigate('/about/bar')
  }
  return (
    <div>
      <h3>About</h3>
      <button onClick={handleClick1}>foo</button> | <button onClick={handleClick2}>bar</button>
      <Outlet />
    </div>
  )
}
