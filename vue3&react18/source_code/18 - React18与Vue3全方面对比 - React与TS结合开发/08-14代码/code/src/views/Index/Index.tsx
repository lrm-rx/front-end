import React, { useState } from 'react'
//import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import { change, loginAction } from '../../store/modules/user'
import { Button, Rate } from 'antd'
export default function Index() {
  // const location = useLocation()
  // const navigate = useNavigate()
  // console.log( location.search )
  const [count, setCount] = useState(3)
  const name = useSelector((state: RootState)=> state.user.name)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    /* dispatch({    // 对payload限制不了类型
      type: 'user/change',
      payload: 'xiaoqiang'
    }) */
    dispatch(change('xiaoqiang'))   // 对payload进行限制类型

    dispatch(loginAction(123))

  }
  //navigate('/login')
  return (
    <div>
      <Button type="primary" onClick={handleClick}>点击</Button>
      <Rate value={count} onChange={setCount}></Rate> { count }
      Index, { name }
    </div>
  )
}
