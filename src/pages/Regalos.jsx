import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Stack, Typography,Button } from '@mui/material'

// ----- Components ------
import GiftList from 'components/GiftList'
// ---- Async Action Thunk
import { fetchMyGifts } from 'reducers/myGifts'

// ------- Hooks ----

export default function Regalos (){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchMyGifts())
    },[])

    return (
        <Stack spacing={3}>
            <Typography variant='h2' textAlign={'center'}> Mis Regalos Reservados</Typography>
            <GiftList/>
        </Stack>
    )
} 