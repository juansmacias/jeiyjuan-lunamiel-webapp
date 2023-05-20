import React from 'react'
import { styled } from '@mui/material/styles'

import { Typography,Stack,Grid,Paper} from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const GiftListItem = ({gift,giftGroupName}) =>{
    console.log('gift: ',gift)
    return (
    <Stack spacing={2}>
        <Grid container spacing={2} direction='column'>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>Regalo para {giftGroupName}</Typography>
                </Grid>
                <Grid item xs={12}>
                    {gift.isPrivate?
                    <Typography variant='subtitle1'>De: {gift.memberName} </Typography>:
                    <Typography variant='subtitle1'>De: {gift.memberName} por: {gift.amount} {gift.currency}</Typography>}
                </Grid>
                {!gift.isPrivate&&gift.message&&
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>Asunto: </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' textAlign={'center'}>{gift.message} </Typography>
                    </Grid>
                </Grid>}
            </Grid>
        </Grid>
    </Stack>)
}

export default GiftListItem