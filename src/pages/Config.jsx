import React, { useEffect } from 'react'
import { Stack, Typography,Button } from '@mui/material'

import ConfigList from 'components/ConfigList'


// ------- Hooks ----

export default function Config (){
    return (
        <Stack spacing={3} alignItems={'center'}>
            <Typography variant='h2' sx={{mt:2}}> Configuraciones </Typography>
            <ConfigList/>
        </Stack>
    )
} 