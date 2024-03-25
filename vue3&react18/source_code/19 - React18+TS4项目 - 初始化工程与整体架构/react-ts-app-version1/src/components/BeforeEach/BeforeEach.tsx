import React from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom'
import { routes } from '../../router'
interface BeforeEachProps {
  children?: React.ReactNode
}

export default function BeforeEach(props: BeforeEachProps) {

  const location = useLocation()
  const matchs = matchRoutes(routes, location)
  if( Array.isArray(matchs) ){
    const meta = matchs[matchs.length-1].route.meta
    /* if(meta?.auth){
      return <Navigate to="/login" />
    } */
  }
  return (
    <>{ props.children }</>
  )
}
