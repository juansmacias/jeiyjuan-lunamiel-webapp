import React, { useEffect } from 'react'
import { Grid, Typography,Button } from '@mui/material'

// ------- Hooks ----

export default function Config (){
    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={12} textAlign='center' sx={{mt:3}}>
                <Typography variant='h2'>
                    Hola Config
                </Typography>
            </Grid>
        </Grid>
    )
} 