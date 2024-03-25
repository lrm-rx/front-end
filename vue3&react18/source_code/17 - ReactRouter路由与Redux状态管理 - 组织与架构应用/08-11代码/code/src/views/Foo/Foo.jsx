// import React from 'react'
// import './Foo.scss'
// import store from '../../store'
// import { useState } from 'react'

// export default function Foo() {
//   const [count, setCount] = useState(store.getState().count)
//   const handleClick = () => {
//     store.dispatch({
//       type: 'inc'
//     })
//   }
//   store.subscribe(()=>{
//     setCount(store.getState().count)
//   })
//   return (
//     <div>
//       <button onClick={handleClick}>修改count</button>
//       Foo, { count }</div>
//   )
// }

//--------------------------------------react-redux

import React from 'react'
import './Foo.scss'
import { useSelector, useDispatch } from 'react-redux'
import { counterTestAction } from '../../store/modules/counter'
export default function Foo() {
  const count = useSelector((state)=> state.counter.count)
  const doubleCount = useSelector((state)=> state.counter.doubleCount)
  const msg = useSelector((state)=> state.message.msg)
  const upperMsg = useSelector((state)=> state.message.upperMsg)
  const dispatch = useDispatch();
  const handleClick = () => {
    /* dispatch({
      type: 'counter/inc',
      payload: 5
    })
    dispatch({
      type: 'message/change',
      payload: 'hi'
    }) */
    /* dispatch((dispatch)=>{
      setTimeout(()=>{
        dispatch({
          type: 'counter/inc',
          payload: 5
        })
      }, 2000)
    }) */

    dispatch(counterTestAction()).then((res)=>{
      dispatch({type: 'counter/inc', payload: 5})
      console.log(res)
    })
  }
  return (
    <div>
      <button onClick={handleClick}>修改count</button>
      Foo, {count}, {doubleCount}, {msg}, {upperMsg}</div>
  )
}
