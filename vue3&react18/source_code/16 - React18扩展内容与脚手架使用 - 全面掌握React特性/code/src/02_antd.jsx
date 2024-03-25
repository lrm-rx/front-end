import React from 'react'
import './antd.scss'
import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('xiaoming')
  const handleFinish = (values) => {
    console.log(values)
  }
  const handleValuesChange = (values) => {
    setUsername(values.username)
  }
  const handleClick = () => {
    message.success('成功')
    notification.open({
      message: 'Notification Title',
      description: 'Notification description',
      placement: 'bottomRight'
    })
  }
  return (
    <div>
      <h2>hello antd</h2>
      <Form
        className="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleFinish}
        onValuesChange={handleValuesChange}
        initialValues={{username}}
      >
        <Form.Item 
          label="用户名" 
          name="username"
          rules={[
            {
              required: true,
              message: '用户名不能为空!',
            },
          ]}
        >
          <Input /> 
        </Form.Item>
        <Button onClick={handleClick}>{ username } </Button>
        <Form.Item
         wrapperCol={{
          offset: 8,
          span: 16,
        }}>
          <Checkbox />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
        }}>
          <Button htmlType='submit'>登录</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
