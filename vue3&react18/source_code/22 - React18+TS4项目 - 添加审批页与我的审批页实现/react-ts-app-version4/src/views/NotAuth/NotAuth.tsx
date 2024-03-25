import React from 'react'
import img403 from '../../assets/images/403.png'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function NotAuth() {
  return (
    <div className="status-wrapper">
      <img src={img403} alt="" />
      <p>没有权限</p>
      <Link to="/">
        <Button type="primary">回到首页</Button>
      </Link>
    </div>
  )
}
