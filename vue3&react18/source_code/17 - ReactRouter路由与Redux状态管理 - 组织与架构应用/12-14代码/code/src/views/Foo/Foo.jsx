import React from 'react'
import './Foo.scss'
import { useSelector, useDispatch } from 'react-redux'
import { messageTestAction } from '../../store/modules/message'
export default function Foo() {
  const count = useSelector((state)=> state.counter.count)
  const doubleCount = useSelector((state)=> state.counter.doubleCount)
  const msg = useSelector((state)=> state.message.msg)
  const upperMsg = useSelector((state)=> state.message.upperMsg)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({
      type: 'counter/inc',
      payload: 5
    })
    dispatch({
      type: 'message/change',
      payload: 'hi'
    })
    /* dispatch(messageTestAction()).then((res)=>{
      //console.log(res.payload)
      dispatch({
        type: 'message/change',
        payload: res.payload
      })
    }) */
    //dispatch(messageTestAction())


  }
  return (
    <div>
      <button onClick={handleClick}>修改count</button>
      Foo, {count}, {doubleCount}, {msg}, {upperMsg}</div>
  )
}
