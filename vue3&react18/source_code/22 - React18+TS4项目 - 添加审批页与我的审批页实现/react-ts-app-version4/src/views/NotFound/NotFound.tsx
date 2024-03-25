import React from 'react'
import img404 from '../../assets/images/404.png'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function NotFound() {
  return (
    <div className="status-wrapper">
      <img src={img404} alt="" />
      <p>没有找到</p>
      <Link to="/">
        <Button type="primary">回到首页</Button>
      </Link>
    </div>
  )
}
