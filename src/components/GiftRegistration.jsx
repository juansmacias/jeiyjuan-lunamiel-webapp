import React from "react"
import { Typography,Stack,Button  } from "@mui/material"
import { FormProvider,useForm } from 'react-hook-form'

import BasicCheckbox from 'components/Fields/BasicCheckbox'
import BasicTextField from 'components/Fields/BasicTextField'
import BasicSelect from 'components/Fields/BasicSelect'


const GiftRegistration = () =>{

    const formMethods = useForm()
    const { handleSubmit } = formMethods

    return (<Stack spacing={2}>
        <Typography variant="body2">Aca pueden registar o reservar sus regalos</Typography>
        <FormProvider { ...formMethods }>
        <form onSubmit={handleSubmit(()=>{console.log('hola print')})}>
            <BasicTextField name="amount" label="Cantidad" type="number" required fullWidth sx={{mb:4}}></BasicTextField>
            <BasicSelect name={'currency'} options={['COP','USD']} sx={{mb:4}}></BasicSelect>
            <BasicTextField name="mensaje" label="Mensaje" type="text" required fullWidth multiline rows={4} sx={{mb:4}}></BasicTextField>
            <BasicCheckbox label='Quieres que sea privado?'></BasicCheckbox>
            <Button type='submit' fullWidth color='primary' variant='contained'>Continuar</Button>
        </form>
        </FormProvider>
    </Stack>)
}

export default GiftRegistration