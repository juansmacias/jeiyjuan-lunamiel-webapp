import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Routes, HashRouter, Route } from 'react-router-dom'

// --------- Components ----------

// --------- Pages ----------
import Layout from 'pages/Layout'
import NotFound from 'pages/NotFound'

import Home from 'pages/Home'
import Config from 'pages/Config'
import Regalos from 'pages/Regalos'
import DetailGiftGroup from 'src/pages/DetailGiftGroup'

// ------ Reducers -------
import { fetchCities } from 'reducers/cities'
// ------ Utils ------

const App = () =>  {
const gg = {
  "id": 105,
  "name": "Bogota, CO-Hospedaje",
  "type": "ACOMODATION",
  "numMaxGifts": 5,
  "cityID": 29,
  "gifts":[{
    "id": 1,
    "createdAt": "2023-05-10T19:03:29.555Z",
    "updatedAt": "2023-05-10T19:03:29.555Z",
    "memberName": "FAM Macias & Morillo",
    "amount": "100000",
    "currency": "COP",
    "isPrivate": false,
    "giftGroupID": 5
}]
}
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchCities())
    })

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='config' element={<Config/>}/>
          <Route path='regalos' element={<Regalos/>}/>
          <Route path='detallePaqueteRegalo/:id' element={<DetailGiftGroup cityName='Bogota' giftGroup={gg}/>} />
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}


export default App
