import React, { useState, useEffect } from "react";
import { Button, Space } from 'antd';
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios";
import "./style.css"

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    axios.get("/api/isLogin").then(res => {
      if (!res.data?.data) {
        setIsLogin(false)
      }
    }).catch(error => {
      console.warn(error)
    })
  })

  const logout = () => {
    axios.get("/api/logout").then(res => {
      if (res.data?.data) {
        navigate("/login")
      }
    }).catch(error => {
      console.warn(error)
    })
  }

  if (!isLogin) {
    return <Navigate to="/login"></Navigate>;
  }
  return <div className="home-page">
    <Space wrap>
      <Button type="primary">抓取</Button>
      <Button type="primary">展示</Button>
      <Button type="primary" onClick={logout}>退出</Button>
    </Space>
  </div>
}

export default Home;