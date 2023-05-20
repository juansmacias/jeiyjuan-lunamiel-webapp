import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Stack,Paper,Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

// ---- Components -------
import BasicListItem from 'components/BasicListItem'

// ----- Actions -------
import { clearMemberName } from 'reducers/user'

const ConfigList = () =>{
    const configItems = [{
        id:1,
        name:'Reinicar Nombre Familia'
    }]

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function clearMemberNameFunc(){
        dispatch(clearMemberName())
    }
    function navigateToInstructions(){
        navigate('/config/instrucciones')
    }

   return ( <Stack spacing={2} alignContent={'center'}>
    {/* {configItems.map((c)=>(
        <BasicListItem key={c.id} title={c.name} icon={<ArrowForwardIosIcon/>} onClick={clearMemberNameFunc}/>
    ))} */}
    <Button variant="contained" fullWidth sx={{m:4}} onClick={navigateToInstructions}>Instrucciones</Button>
    <Button variant="contained" fullWidth sx={{m:4}} onClick={clearMemberNameFunc}>Reinicar Nombre Familia</Button>
    </Stack>)
}

export default ConfigList