import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router'
import { Typography,Box,Paper,Stack,Backdrop,CircularProgress } from '@mui/material'


// ----- Compoments -------
import GiftListItem from 'components/GiftListItem'
import GiftRegistration from 'components/GiftRegistration'

// ----- API --------
import { getGiftGroupById } from '../api/giftgroup'


const DetailGiftGroup = ()=>{
  const { id } = useParams()

  const [ giftGroup,setGiftGroup ] = useState()
  const [ isLoading,setIsLoading ] = useState(true)
  const [openBackdrop, setOpenBackdrop] = useState(false)


  const handleClose = () => {
    setOpenBackdrop(false)
}

const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop)
}

async function fetchData(){
  await getGiftGroupById(id).then(response=>{
    console.log('resultado gg: ',response)
    setGiftGroup(response.data)
    setIsLoading(false)
  }).catch(error=>{
    console.log('resultado error: ',error)
    setIsLoading(false)
  })
}

  useEffect(()=>{
    if (isLoading) {
      handleToggleBackdrop()
    } else {
      handleClose()
    }
  },[isLoading])

  useEffect(()=>{
    fetchData()
  },[id])

return (<Box sx={{ width: '100%', paddingBottom:10 }}>
  <Stack spacing={2}>
  <div>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openBackdrop}
      >
          <CircularProgress color="inherit" />
      </Backdrop>
  </div>
  {giftGroup&&(
    <Box>
      <Typography textAlign= 'center' variant='h2'>{giftGroup?.name}</Typography>
      <Typography align= 'center' variant='h4'>Regalos recibidos</Typography>
      <Paper variant="outlined">
        {giftGroup?.gifts.length===0&&(
          <Typography align= 'center' variant='h5'>Sin Regalos</Typography>
        )}
        {giftGroup?.gifts.map((g)=>(
          <GiftListItem key={g.id} gift={g}/>
        ))}
      </Paper>  
      {giftGroup?.gifts.length<giftGroup?.numMaxGifts&&(
        <Box>
          <Typography align= 'center' variant='h4'>Reservar Regalo</Typography>
          <Paper variant="outlined">
            <GiftRegistration />
          </Paper>
        </Box>
      )}
    </Box>
  )}
  {!giftGroup&&(
    <Typography variant='h2' textAlign={'center'}>Grupo # {id} No Existe</Typography>
  )}

</Stack>
</Box>)

}

export default DetailGiftGroup