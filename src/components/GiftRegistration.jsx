import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { Typography,Stack,Button,Box  } from "@mui/material"
import { FormProvider,useForm } from 'react-hook-form'

// ------------------ Components ------------------
import BasicCheckbox from 'components/Fields/BasicCheckbox'
import BasicTextField from 'components/Fields/BasicTextField'
import BasicSelect from 'components/Fields/BasicSelect'

// ------------------ Async Thunks ------------------
import { createMyGifts } from 'reducers/myGifts'

import { selectMemberName } from 'reducers/user'

// ------------------ Hook ------------------

import { useAnyErrorAlerts } from 'hooks/useAnyErrorAlerts'

const GiftRegistration = ({giftGroupName}) =>{
    const formMethods = useForm({
        defaultValues: {
            isPrivate: false,
          }
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { handleSubmit } = formMethods
    const memberName = useSelector(selectMemberName)

    const onSubmit = (data) => {
        Object.assign(data,{memberName:memberName,giftGroupName:giftGroupName})
        dispatch(createMyGifts(data))
    } 

    return (<Stack spacing={2} alignItems="center">
        <Typography variant="subtitle1" textAlign={'center'}>Aca pueden registar o reservar sus regalos</Typography>
        <FormProvider { ...formMethods }>
        <form onSubmit={handleSubmit(onSubmit)}>
            <BasicTextField name="amount" label="Cantidad" type="number" required fullWidth inputProps={{ min: '10' }} sx={{mb:4}} ></BasicTextField>
            <BasicSelect name='currency' label='Moneda' options={['COP','USD']} required sx={{mb:4}}></BasicSelect>
            <BasicTextField name="message" label="Mensaje" type="text" optionalvalue={'true'} fullWidth multiline rows={5} sx={{mb:4}}></BasicTextField>
            <Typography variant="h5" textAlign={'center'}>Quieres que sea privado tu valor y mensaje?</Typography>
            <Box alignContent={'center'}><BasicCheckbox name="isPrivate" textAlign="center"></BasicCheckbox></Box>
            <Button type='submit' fullWidth color='primary' variant='contained'>Enviar</Button>
        </form>
        </FormProvider>
    </Stack>)
}

export default GiftRegistration