import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography,Box,Paper,Stack } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DetailGiftGroup = ({giftGroup,cityName})=>{

return (<Box sx={{ width: '100%' }}>
<Stack spacing={2}>
  <Typography textAlign= 'center' variant='h2'>{giftGroup.name}</Typography>
  <Item><Typography align= 'center' variant='h4'>Regalos recibidos</Typography></Item>
  <Item>Item 3</Item>
</Stack>
</Box>)

}

export default DetailGiftGroup