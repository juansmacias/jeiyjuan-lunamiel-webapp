import React from "react"
import { useSelector } from "react-redux"
import { styled } from '@mui/material/styles'
import { Stack,Paper } from "@mui/material"

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
  }));

const GiftList = () =>{
    const gifts = useSelector(selectMyGifts)

    return(
        <Stack spacing={2}>
        {gifts.map((g)=>(
            <Item key={g.id}>
                <GiftListItem gift={g}/>
            </Item>
        ))}
        </Stack>
    )
}

export default GiftList