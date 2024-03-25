import React from 'react'
import './antd.scss'
import { Button, Space, Switch, Rate } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function App() {
  const [ checked, setChecked ] = useState(true)
  const [ value, setValue ] = useState(3)
  return (
    <div>
      <h2>hello antd</h2>
      <PlayCircleOutlined />
      <Space>
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" danger>Primary Danger Button</Button>
        <Button danger icon={<PlayCircleOutlined />}>Default Danger Button</Button>
      </Space>
      <div>
        <Switch checked={checked} onChange={setChecked} /> { checked ? 'on' : 'off' }
        <Rate value={value} onChange={setValue} /> { value }
      </div>
    </div>
  )
}
