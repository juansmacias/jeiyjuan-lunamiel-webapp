import React from "react"
import { useNavigate } from "react-router-dom"
import { Grid, Typography, Chip, Button, Paper, Box} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const GiftGroupListItem = ({giftGroup})=>{
const navigate = useNavigate()

function goToDetail(id){
    navigate(`/detallePaqueteRegalo/${id}`)
}

return (
<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          p:2,
          width: '100%',
        },
      }}
>
<Paper variant="outlined" elevation={3}>    
<Grid container spacing={1}>
    <Grid item xs={12} container spacing={1} direction='column'>
        <Grid item xs={10} > 
            <Typography variant="subtitle1">{giftGroup.name}</Typography>
        </Grid>
        <Grid item xs={2} > 
            <Typography variant="body">Regalos:{giftGroup.numMaxGifts}</Typography>
        </Grid>
    </Grid>
    {/* <Grid item xs={12} container spacing={1} direction='column'>
        <Grid item xs={10} > 
            <Typography variant="body1">{giftGroup.type}</Typography>
        </Grid>
        <Grid item xs={2} > 
            <Chip icon={<CheckIcon />}
          color='primary' 
          variant='outlined' />
        </Grid>
    </Grid> */}
    <Grid item xs={12}>
        <Button variant="contained" fullWidth 
        onClick={()=>{goToDetail(giftGroup.id)}}>
            Ver Detalle
        </Button>
    </Grid>
</Grid>
</Paper>
</Box>)
}

export default GiftGroupListItem