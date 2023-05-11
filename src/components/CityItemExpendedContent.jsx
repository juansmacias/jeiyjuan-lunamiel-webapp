import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography,Button } from '@mui/material'

function getGiftTypeName(type){
    switch(type){
        case 'TRANSPORTATION':
            return 'Transporte'
        case 'FOOD':
            return 'Alimentación'
        case 'ACOMODATION':
            return 'Hospedaje'
        case 'ACTIVITIY':
            return 'Actividades'
    }
}

const CityItemExpendedContent = ({giftGroups}) => {

    return (<Box sx={{ width: '100%' }}>
        {giftGroups.map((gg)=>(
            <Accordion key={gg.id}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`"Item-"${gg.name}`}
                id={`"Item-"${gg.name}-header`}
                >
                <Typography>{gg.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Tipo regalo: {getGiftTypeName(gg.type)}
                </Typography>
                <Typography>
                    Posibles Regalos: {gg.numMaxGifts} 
                </Typography>
                <Button variant='contained'>Detalle</Button>
                </AccordionDetails>
          </Accordion>
        ))}
    </Box>)
}

export default CityItemExpendedContent