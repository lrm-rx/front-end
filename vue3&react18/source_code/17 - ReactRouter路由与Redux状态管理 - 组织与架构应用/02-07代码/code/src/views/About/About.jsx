import React from 'react'
import './About.scss'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  const handleClick1 = () => {
    navigate('/about/foo/123')
  }
  const handleClick2 = () => {
    navigate('/about/foo/456')
  }
  const handleClick3 = () => {
    navigate('/about/bar', { state: { id: 123 } })
  }
  return (
    <div>
      <h3>About</h3>
      {/* <Link to="/about/foo">foo</Link> | <Link to="/about/bar">bar</Link> */}
      {/* <Link to="/about/foo/123">foo 123</Link> | <Link to="/about/foo/456">foo 456</Link> */}
      {/* <NavLink to="/about/foo/123">foo 123</NavLink> | <NavLink to="/about/foo/456">foo 456</NavLink> */}
      {/* <NavLink to="/about/foo/123" className={({isActive})=> isActive ? 'active2' : '' }>foo 123</NavLink> | <NavLink to="/about/foo/456" className={({isActive})=> isActive ? 'active2' : '' }>foo 456</NavLink> */}
      <button onClick={handleClick1}>foo 123</button> | <button onClick={handleClick2}>foo 456</button> | <button onClick={handleClick3}>bar</button>
      <Outlet />
    </div>
  )
}
