import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Routes, HashRouter, Route } from 'react-router-dom'

// --------- Components ----------

// --------- Layout ----------
import Layout from 'pages/Layout'
import OnlyInAuth from './OnlyInAuth'
import NotFound from 'pages/NotFound'
import RequireAuth from './RequireAuth'
//------ Pages ----
import Home from 'pages/Home'
import Config from 'pages/Config'
import Regalos from 'pages/Regalos'
import DetailGiftGroup from 'src/pages/DetailGiftGroup'

//----  Components -------
import Onboarding from '../Onboarding'
import OnboardingStep2 from '../OnboardingStep2'

// ---- Async Action Thunk
import { fetchCities } from 'reducers/cities'
import { fetchMyGifts } from 'reducers/myGifts'
// -------  Hook ---------
import useAuth from 'hooks/useAuth'

const App = () =>  {
  const auth = useAuth()
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchCities())
  },[])

  useEffect(()=>{
    if(auth.finishedOnboarding){
      dispatch(fetchMyGifts())
    }
  },[auth.finishedOnboarding])

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route element={<RequireAuth/>}>
            <Route index element={<Home/>}/>
            <Route path='config' element={<Config/>}/>
            <Route path='config/instrucciones' element={<OnboardingStep2 isinstruccions={'true'}/>}/>
            <Route path='regalos' element={<Regalos/>}/>
            <Route path='detallePaqueteRegalo/:id' element={<DetailGiftGroup/>} />
          </Route>
          <Route element={<OnlyInAuth/>}>
            <Route path='onboarding' element={<Onboarding />} />
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}


export default App
