import React from "react"
import { useSelector } from "react-redux"
import { styled } from '@mui/material/styles'
import { Stack,Paper,Typography } from "@mui/material"

// ---- Components ------
import GiftListItem from 'components/GiftListItem'
// ----- Selector -------
import {selectMyGifts} from 'reducers/myGifts'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:'75%'
  }));

const GiftList = () =>{
    const gifts = useSelector(selectMyGifts)

    return(
        <Stack spacing={2} alignItems={'center'}>
            <Typography variant='h2' sx={{mt:2}}>Mis Regalos Reservados</Typography>
            {gifts.map((g)=>(
                <Item key={g.id}>
                    <GiftListItem gift={g} giftGroupName={g.giftGroup?.name}/>
                </Item>
            ))}
        </Stack>
    )
}

export default GiftList