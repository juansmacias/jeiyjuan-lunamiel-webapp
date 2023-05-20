import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Typography, Button,Stack,List,ListItem,ListItemText,ListItemIcon } from '@mui/material'

// --------- Icons ----------
import SendIcon from '@mui/icons-material/Send'
import HotelIcon from '@mui/icons-material/Hotel'
import SavingsIcon from '@mui/icons-material/Savings'
import CommuteIcon from '@mui/icons-material/Commute'
import MessageIcon from '@mui/icons-material/Message'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'


// ------ Actions -----------
import { nextOnboardingStep } from 'reducers/user'

const OnboardingStep2 = ({isinstruccions='false'}) => {

    const dispatch = useDispatch()
    
    const onContinue = () => { 
        dispatch(nextOnboardingStep())
    }

    return (<Grid container spacing={2} sx={{pb:8}}>
        <Grid item xs={12} >
            <Stack spacing={1} alignItems="center" >
                <SavingsIcon fontSize={'large'} color={'primary'} sx={{mt:5}}/>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h2'textAlign={'center'}> Instrucciones de Regalo </Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={2} alignItems={'center'} sx={{p:5}}> 
                <Typography variant='h5' textAlign={'center'} sx={{ml:5,mr:5}}> Como esto es nuevo para todos vamos a explicarlo lo mejor posible {'(Se que no sera suficiente y nos pueden llamar :) '} </Typography>
                <Typography variant='body1' textAlign={'center'} sx={{ml:5,mr:5}}> La idea es evolucionar un poco el sistema de lluvia de sobres y hacerlo lo más divertido posible. En la pantalla principal vamos a poner los destinos a los que vamos a viajar de luna de miel y nos gustaria que ustedes sean parte de nuestro viaje. </Typography>
                <Typography variant='body1' textAlign={'center'} sx={{ml:5,mr:5}}> Dentro de cada destino encontraran un grupo de regalos. Cada grupo es está relacionado con algo especifico en el viaje. Encontraron 4 tipos de grupos:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CommuteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transporte" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <FastfoodIcon />
                        </ListItemIcon>
                        <ListItemText primary="Comida" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <HotelIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hospedaje" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LocalActivityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Actividades" />
                    </ListItem>
                </List>
                <Typography variant='body1' textAlign={'center'} sx={{ml:5,mr:5}}>Dentro de cada grupo se pueden ver los regalos que se han reservado. Para reservar un regalo dentro de grupo. Seguir los siguientes pasos:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <PriceChangeIcon />
                        </ListItemIcon>
                        <ListItemText primary="1. Ingresar monto. (Valores superiores a 20 mil COP o 10 USD) Gracias!" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CurrencyYenIcon />
                        </ListItemIcon>
                        <ListItemText primary="2. Selecionar Moneda. (No nos restringimos a solo Pesos....) " />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="3. Escribamos un mensaje muy chido para quedar más enamorados de ustedes." />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <VisibilityOffIcon />
                        </ListItemIcon>
                        <ListItemText primary="4. Si quieren que el monto y el mensaje sea quede solo con nosotros. Active el switch para se la info sea privada." />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="5. Presionar Enviar" />
                    </ListItem>
                </List>
                <Typography variant='body1' textAlign={'center'} sx={{ml:5,mr:5}}> Eso es todo. Bueno no todo. Para hacer llegar el valor reservado pensamos en varias formas. La forma más fácil. La lluvia de sobres. Pero tambien tenemos estas opciones: </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="1. Nequi" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="2. Bancolombia Ahorros (Me da miedo poner la cuenta. Me preguntar la cuenta si es la opcion que quieren)" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="3. Zelle, Me preguntan por interno mi correo. :)" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="4. Lluvias de sobres" />
                    </ListItem>
                </List>
                <Typography variant='body1' textAlign={'center'} sx={{ml:5,mr:5}}>Disculpen todo este texto. Se le quiere.</Typography>
                {isinstruccions==='false'&&<Button fullWidth color='primary' variant='contained' onClick={onContinue}>Continuar</Button>
}

            </Stack>
        </Grid>
    </Grid>)
}

export default OnboardingStep2