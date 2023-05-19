import React from 'react'
import { styled } from '@mui/material/styles'

import { Typography,Stack,Grid,Paper,Chip } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const GiftListItem = ({gift,giftGroupName}) =>{

    return (
    <Stack spacing={2}>
        <Grid container spacing={2} direction='column'>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>Regalo para {giftGroupName}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>De: {gift.memberName} Por Cantidad: {gift.amount} {gift.currency}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Stack>)
}

export default GiftListItem