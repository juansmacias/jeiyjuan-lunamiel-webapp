import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import { Box,Paper,Stack } from '@mui/material'

// ------ Reducers -------

import { selectCities } from 'reducers/cities' 

// ----- Components ------
import CityItem from 'components/CityItem'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CityList = () =>{
    const cities = useSelector(selectCities)

    return ( <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
    {cities.map((city)=>(
        <Item key={city.id}>
            <CityItem city={city}/>
        </Item>
    ))}
    </Stack>
    </Box>)
}

export default CityList