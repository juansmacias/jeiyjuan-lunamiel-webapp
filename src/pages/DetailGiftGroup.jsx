import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography,Box,Paper,Stack } from '@mui/material'

import GiftListItem from 'components/GiftListItem'
import GiftRegistration from 'components/GiftRegistration'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const DetailGiftGroup = ({giftGroup,cityName})=>{

return (<Box sx={{ width: '100%', paddingBottom:10 }}>
<Stack spacing={2}>
  <Typography textAlign= 'center' variant='h2'>{giftGroup.name}</Typography>
  <Typography align= 'center' variant='h4'>Regalos recibidos</Typography>
  <Paper variant="outlined">
    <GiftListItem />
  </Paper>
  <Typography align= 'center' variant='h4'>Reservar Regalo</Typography>
  <Paper variant="outlined">
    <GiftRegistration />
  </Paper>
</Stack>
</Box>)

}

export default DetailGiftGroup