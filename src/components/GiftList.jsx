import React from "react"

import { styled } from '@mui/material/styles'
import { Stack,Paper } from "@mui/material"

import GiftListItem from 'components/GiftListItem'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const GiftList = () =>{
    const gifts = [
    {
        "id": 1,
        "createdAt": "2023-05-10T19:03:29.555Z",
        "updatedAt": "2023-05-10T19:03:29.555Z",
        "memberName": "FAM Macias & Morillo",
        "amount": "100000",
        "currency": "COP",
        "isPrivate": false,
        "giftGroupID": 5,
        "giftGroup": {
            "id": 5,
            "name": "Cancun-Hospedaje",
            "type": "ACOMODATION",
            "numMaxGifts": 5,
            "cityID": 2
        }
    },
    {
        "id": 2,
        "createdAt": "2023-05-10T19:03:29.563Z",
        "updatedAt": "2023-05-10T19:03:29.563Z",
        "memberName": "FAM Macias & Morillo",
        "amount": "100",
        "currency": "USD",
        "isPrivate": false,
        "giftGroupID": 8,
        "giftGroup": {
            "id": 8,
            "name": "Cancun-Actividades",
            "type": "ACTIVITIY",
            "numMaxGifts": 15,
            "cityID": 2
        }
    },
    {
        "id": 3,
        "createdAt": "2023-05-10T19:03:29.566Z",
        "updatedAt": "2023-05-10T19:03:29.566Z",
        "memberName": "FAM Macias & Morillo",
        "amount": "50",
        "currency": "USD",
        "isPrivate": true,
        "giftGroupID": 6,
        "giftGroup": {
            "id": 6,
            "name": "Cancun-Transporte",
            "type": "TRANSPORTATION",
            "numMaxGifts": 5,
            "cityID": 2
        }
    },
    {
        "id": 4,
        "createdAt": "2023-05-10T19:11:33.600Z",
        "updatedAt": "2023-05-10T19:11:33.600Z",
        "memberName": "JSM",
        "amount": "100",
        "currency": "USD",
        "isPrivate": false,
        "giftGroupID": 2,
        "giftGroup": {
            "id": 2,
            "name": "Bogota, CO-Transporte",
            "type": "TRANSPORTATION",
            "numMaxGifts": 5,
            "cityID": 1
        }
    }
]

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