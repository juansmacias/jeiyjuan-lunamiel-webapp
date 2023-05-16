import React from "react"
import { Grid, Typography, Chip,Button} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const GiftGroupListItem = ({giftGroup})=>{

return (
<Grid container spacing={2}>
    <Grid item xs={12} container spacing={1} direction='column'>
        <Grid item xs={10} > 
            <Typography variant="subtitle1">{giftGroup.name}</Typography>
        </Grid>
        <Grid item xs={2} > 
            <Typography variant="body">Regalos:{giftGroup.numMaxGifts}</Typography>
        </Grid>
    </Grid>
    <Grid item xs={12}>
        <Grid item xs={10} > 
            <Typography variant="body1">{giftGroup.type}</Typography>
        </Grid>
        <Grid item xs={2} > 
            <Chip icon={<CheckIcon />}
          color='primary' 
          variant='outlined' />
        </Grid>
    </Grid>
    <Grid item xs={12}>
        <Button variant="outline" fullWidth>
            Ver Detalle
        </Button>
    </Grid>
</Grid>)
}

export default GiftGroupListItem