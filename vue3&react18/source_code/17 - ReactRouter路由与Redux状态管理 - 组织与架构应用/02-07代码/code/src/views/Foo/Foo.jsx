import React from 'react'
import './Foo.scss'
import { useParams } from 'react-router-dom'

export default function Foo() {
  const params = useParams()
  return (
    <div>Foo, { params.id }</div>
  )
}
