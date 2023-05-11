import React, { useEffect } from 'react'
import { Routes, HashRouter, Route } from 'react-router-dom'
import { Typography } from '@mui/material'
// import '@nosferatu500/react-sortable-tree/style.css'

// --------- Components ----------

// --------- Pages ----------
import Home from 'pages/Home'
import Config from 'pages/Config'
import Regalos from 'pages/Regalos'
import Layout from 'pages/Layout'
import NotFound from 'pages/NotFound'

// ------ Reducers -------

// ------ Utils ------

const App = () =>  {

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='config' element={<Config/>}/>
          <Route path='regalos' element={<Regalos/>}/>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}


export default App;
