import React, { useEffect } from 'react'
import { Stack, Typography,Button } from '@mui/material'

import GiftList from 'components/GiftList'

// ------- Hooks ----

export default function Regalos (){
    return (
        <Stack spacing={3}>
            <Typography variant='h2' textAlign={'center'}> Mis Regalos Reservados</Typography>
            <GiftList/>
        </Stack>
    )
} 