import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

// -------  Selector ---------
import { selectMemberName } from 'reducers/user'

const OnlyInAuth = () => {
  const memberName = useSelector(selectMemberName)
  
  return memberName==='N/A' ? 
  ( <Outlet /> ) :
  ( <Navigate to='/' /> )
}

export default OnlyInAuth
