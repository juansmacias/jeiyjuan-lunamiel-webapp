import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

// -------  Hook ---------
import useAuth from 'hooks/useAuth'

const RequireAuth = () => {
  const auth = useAuth()

  return auth.finishedOnboarding ? 
    (<Outlet/>):
    (<Navigate to="/onboarding"/>)

}

export default RequireAuth
