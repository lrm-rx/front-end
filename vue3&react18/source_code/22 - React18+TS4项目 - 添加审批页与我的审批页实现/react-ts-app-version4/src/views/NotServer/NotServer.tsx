import React from 'react'
import img500 from '../../assets/images/500.png'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function NotServer() {
  return (
    <div className="status-wrapper">
      <img src={img500} alt="" />
      <p>服务异常</p>
      <Link to="/">
        <Button type="primary">回到首页</Button>
      </Link>
    </div>
  )
}

