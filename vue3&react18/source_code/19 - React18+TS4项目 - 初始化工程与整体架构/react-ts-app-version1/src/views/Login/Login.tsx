import React from 'react'
import styles from './Login.module.scss'
import { Button, message } from 'antd'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import { loginAction, updateToken } from '../../store/modules/users'
export default function Login() {
  const token = useSelector((state: RootState)=> state.users.token)
  const dispatch = useAppDispatch()
  const handleLogin = () => {
    dispatch(loginAction({ email: 'huangrong@imooc.com', pass: 'huangrong' })).then((action)=>{
      const {errcode, token} = (action.payload as {[index: string]: unknown}).data as {[index: string]: unknown}
      if( errcode === 0 && typeof token === 'string' ){
        dispatch(updateToken(token))
        message.success('登录成功');
      }
      else{
        message.error('登录失败');
      }
    })
  }
  return (
    <div>
      Login
      <br />
      <Button onClick={handleLogin}>登录</Button>
      { token }
    </div>
  )
}