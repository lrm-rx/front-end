import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
  const name = useSelector((state)=> state.user.name)
  return (
    <div>
      <h2>User：{name}</h2>
    </div>
  )
}
