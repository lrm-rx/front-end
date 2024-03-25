
import React, { useState } from 'react'

export default function userList() {
  const [ users, setUsers ] = useState([
    {id: 1, name: 'xiaoming'},
    {id: 2, name: 'xiaoqiang'}
  ])
  return {
    users,
    setUsers
  }
}
