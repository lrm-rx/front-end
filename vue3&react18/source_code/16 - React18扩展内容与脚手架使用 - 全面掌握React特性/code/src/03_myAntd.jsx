import React from 'react'
import { MyButton, MyRate } from './MyAntd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function App() {
  const [value, setValue] = useState(3)
  return (
    <div>
      <h2>hello myAntd</h2>
      <MyButton>按钮1</MyButton>
      <MyButton type="primary">按钮2</MyButton>
      <MyButton danger>按钮3</MyButton>
      <MyButton type="primary" danger>按钮4</MyButton>
      <MyButton type="primary" size="large">按钮5</MyButton>
      <MyButton type="primary" size="small">按钮6</MyButton>
      <MyButton type="primary" icon={<PlayCircleOutlined />}>按钮7</MyButton>
      <MyRate></MyRate>
      <MyRate count={4}></MyRate>
      <MyRate value={value} onChange={setValue} ></MyRate> { value }
    </div>
  )
}
