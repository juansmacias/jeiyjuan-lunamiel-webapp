import React, { useEffect } from 'react'
import { Routes, HashRouter, Route } from 'react-router-dom'
import { Typography } from '@mui/material'
// import '@nosferatu500/react-sortable-tree/style.css'

// --------- Components ----------

// --------- Pages ----------
import Layout from 'pages/Layout'
import NotFound from 'pages/NotFound'

import Home from 'pages/Home'
import Config from 'pages/Config'
import Regalos from 'pages/Regalos'
import DetailGiftGroup from 'src/pages/DetailGiftGroup'

// ------ Reducers -------

// ------ Utils ------

const App = () =>  {
const gg = {
  "id": 105,
  "name": "Bogota, CO-Hospedaje",
  "type": "ACOMODATION",
  "numMaxGifts": 5,
  "cityID": 29
}

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


export default App;
