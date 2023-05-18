import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

// -------  Selector ---------
import { selectMemberName } from 'reducers/user'


const RequireAuth = () => {
  const memberName = useSelector(selectMemberName)
  return memberName!=='N/A' ? 
    (<Outlet/>):
    (<Navigate to="/onboarding"/>)

}

export default RequireAuth
