// import React from 'react'
// import './Bar.scss'
// import store from '../../store'

// export default function Bar() {
//   return (
//     <div>Bar, { store.getState().count }</div>
//   )
// }


//---------------------------react-redux

import React from 'react'
import './Bar.scss'
import { useSelector } from 'react-redux'
export default function Bar() {
  const count = useSelector((state)=> state.counter.count)
  return (
    <div>Bar, { count }</div>
  )
}