// import React from 'react'
// import './Bar.scss'
// import { useLocation, useSearchParams } from 'react-router-dom'

// export default function Bar() {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const location = useLocation()
//   //console.log(location)
//   //console.log( searchParams.get('age') );
//   const handleClick = () => {
//     setSearchParams({ gender: 'male' })
//   }
//   return (
//     <div onClick={handleClick}>Bar</div>
//   )
// }


//------------------------------------------

import React from 'react'
import './Bar.scss'
import { useLoaderData } from 'react-router-dom'

export default function Bar() {
  // const data = useLoaderData()
  // console.log(data)
  return (
    <div>Bar</div>
  )
}
