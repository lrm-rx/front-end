import React from 'react'
import { Outlet, Navigate } from 'umi'

export default function auth() {
  if(Math.random() > 0.5){
    return (
      <div>
        <Outlet />
      </div>
    )
  }
  else{
    return (
      <div>
        <Navigate to="/user" />
      </div>
    )
  }
}
