import React, { useEffect } from 'react'
import { Grid, Typography,Button } from '@mui/material'

import CityList from 'components/CityList'

// ------- Hooks ----

export default function Home (){
    return (
        // <Grid container spacing={1} alignItems='center'>
        //     <Grid item xs={12} textAlign='center' sx={{mt:3}}>
        //         <Typography variant='h2'>
        //             Hola Inicio
        //         </Typography>
        //     </Grid>
        // </Grid>
        <CityList/>
    )
} 