# Ant Design框架的安装与使用（二）

本小节我们继续来看一下，antd中的一些复杂组件的使用。

主要就是表单组件涉及的操作是比较多的，下面就一起来看一下。

```jsx
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
export default function App() {
    const [username, setUsername] = useState('xiaoming')
    const handleFinish = (values) => {
        console.log(values)
    }
    const handleValuesChange = (values) => {
        setUsername(values.username)
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
```

这里可以先把表单组件的结构编写完成，主要使用到<Form>和<Form.Item>这两个组件。

labelCol，wrapperCol属性主要是完成布局位置的，rules属性主要是进行表单校验的。

initialValues属性来添加初始值的，onFinish属性用于按钮触发提交后的事件函数。

## 逻辑组件

在antd中，还提供了很多逻辑组件，就是可以在JS中进行调用的组件，例如：弹出提示，通知框等。

```jsx
import { Button, message, notification } from 'antd';
export default function App() {
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
      <Button onClick={handleClick}>按钮</Button>
    </div>
  )
}
```


