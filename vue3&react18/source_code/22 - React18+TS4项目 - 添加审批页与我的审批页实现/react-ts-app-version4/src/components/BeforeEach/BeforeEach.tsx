import React from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom'
import { routes } from '../../router'
import { useAppDispatch } from '../../store'
import { infosAction, updateInfos } from '../../store/modules/users'
import type { Infos } from '../../store/modules/users'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import _ from 'lodash'


interface BeforeEachProps {
  children?: React.ReactNode
}

export default function BeforeEach(props: BeforeEachProps) {
  const token = useSelector((state: RootState)=> state.users.token)
  const infos = useSelector((state: RootState)=> state.users.infos)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const matchs = matchRoutes(routes, location)
  if( Array.isArray(matchs) ){
    const meta = matchs[matchs.length-1].route.meta
    const name = matchs[matchs.length-1].route.name
    if(meta?.auth && _.isEmpty(infos) ){
      if(token){
        dispatch(infosAction()).then((action)=>{
          const {errcode, infos} = (action.payload as {[index: string]: unknown}).data as {[index: string]: unknown}
          if(errcode === 0){
            dispatch(updateInfos(infos as Infos))
          }
        })
      }
      else{
        return <Navigate to="/login" />
      }
    }
    else if( Array.isArray(infos.permission) && !infos.permission.includes(name) ){
      return <Navigate to="/403" />
    }
  }
  if( token && location.pathname === '/login' ){
    return <Navigate to="/" />
  }
  return (
    <>{ props.children }</>
  )
}
