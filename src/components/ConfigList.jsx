import React from "react"

import { styled } from '@mui/material/styles'
import { Stack,Paper } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import BasicListItem from 'components/BasicListItem'

const ConfigList = () =>{
    const configItems = [{
        id:1,
        name:'Reinicar Nombre Familia'
    }]

   return ( <Stack spacing={2}>
    {configItems.map((c)=>(
        <BasicListItem key={c.id} title={c.name} icon={<ArrowForwardIosIcon/>}/>
    ))}
    </Stack>)
}

export default ConfigList