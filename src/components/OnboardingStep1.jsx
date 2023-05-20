import React from 'react'
import { useDispatch } from 'react-redux'
import { FormProvider,useForm } from 'react-hook-form'
import { Grid, Typography, Button,Stack } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

// ------ Components -------
import BasicTextField from 'components/Fields/BasicTextField'

// ------ Actions -----------
import { setMemberName,nextOnboardingStep } from 'reducers/user'

const OnboardingStep1 = () => {

    const dispatch = useDispatch()
    const formMethods = useForm()
    const { handleSubmit } = formMethods
    
    const onSubmit = data =>{
        console.log('data: ',data)
        dispatch(setMemberName(data.memberName))
    }

    return (<Grid container spacing={2}>
        <Grid item xs={12} >
            <Stack spacing={1} alignItems="center" >
                <EmojiEmotionsIcon fontSize={'large'} color={'primary'} sx={{mt:5}}/>

            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h2'textAlign={'center'}> Bienvenidos! </Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={2} alignItems={'center'}> 
                <Typography variant='subtitle1' textAlign={'center'}> Gracias por querer apoyarnos en la luna de miel!</Typography>
                <Typography variant='body1' textAlign={'center'}> Antes de comenzar queremos pedirles unos datos y contarles que aca pueden buscar los detalles que nos gustaria recibir de usted.</Typography>
                <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)} id='onboardingForm'>
                    <BasicTextField name="memberName" label="Nombre Familia/Invitado" type="text" required fullWidth sx={{mb:4}}></BasicTextField>
                    <Button type='submit' fullWidth color='primary' variant='contained'>Continuar</Button>
                </form>
                </FormProvider>
            </Stack>
        </Grid>
    </Grid>)
}

export default OnboardingStep1