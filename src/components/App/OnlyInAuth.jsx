import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

// -------  Hook ---------
import useAuth from 'hooks/useAuth'

const OnlyInAuth = () => {
  const auth = useAuth() 

  return !auth.finishedOnboarding ? 
  ( <Outlet /> ) :
  ( <Navigate to='/' /> )
}

export default OnlyInAuth
