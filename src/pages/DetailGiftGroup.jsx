import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { Typography,Box,Paper,Stack,Backdrop,CircularProgress } from '@mui/material'


// ----- Compoments -------
import GiftListItem from 'components/GiftListItem'
import GiftRegistration from 'components/GiftRegistration'

// ----- API --------
import { getGiftGroupById } from '../api/giftgroup'

// ----- Hooks -------
import { useFindMyGifts } from 'hooks/useFindMyGifts'
import { useMyGiftCount } from 'src/hooks/useMyGiftCount'

// ---- Action ------- 
import { setAlert } from 'reducers/alerts'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width:'50%',
  color: theme.palette.text.secondary,
}))

const DetailGiftGroup = ()=>{
  const { id } = useParams()

  const dispatch = useDispatch()
  const [ giftGroup,setGiftGroup ] = useState()
  const [ isLoading,setIsLoading ] = useState(false)
  const [openBackdrop, setOpenBackdrop] = useState(false)

  const currentMyGift = useFindMyGifts(id)
  const myGiftCount = useMyGiftCount()

  const handleClose = () => {
    setOpenBackdrop(false)
}

const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop)
}

async function fetchData(){
  await getGiftGroupById(id).then(response=>{
    setGiftGroup(response.data)
    setIsLoading(false)
  }).catch(error=>{
    setIsLoading(false)
    dispatch(setAlert({
      id:Math.floor(Math.random() * 9999),
      type:'error',
      message:'Error cargando pagina',
      duration:5000
    }))
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
    setIsLoading(true)
    fetchData()
  },[id,myGiftCount])

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
      <Stack spacing={3} alignItems={'center'}>
        {giftGroup?.gifts.length===0&&(
          <Typography align= 'center' variant='h5'>Sin Regalos</Typography>
        )}
        {giftGroup?.gifts.map((g)=>(
          <Item>
            <GiftListItem key={g.id} gift={g} giftGroupName={giftGroup?.name}/>
          </Item>
        ))}
      </Stack>  
      {giftGroup?.gifts.length<giftGroup?.numMaxGifts&&!currentMyGift&&(
        <Box>
          <Typography align= 'center' variant='h4'>Reservar Regalo</Typography>
          <Paper variant="outlined">
            <GiftRegistration giftGroupName={giftGroup?.name} />
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