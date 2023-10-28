import React, { useEffect } from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import request from "../request"
import "./style.css";

interface Iform {
  password: string
}
const Login: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    request.get("/api/isLogin").then(res => {
      if (res?.data) {
        navigate("/")
      }
    }).catch(error => {
      message.error(error)
    })
  })

  const onFinish = (values: Iform) => {
    request.post("/api/login", values).then(res => {
      if (res?.data) {
        navigate("/")
      } else {
        message.error("登录失败!")
      }
    }).catch(error => {
      message.error(error)
    })
  };

  return (
    <div className="login-page">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
