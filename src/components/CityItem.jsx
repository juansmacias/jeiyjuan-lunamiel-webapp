import React from 'react'
import { styled } from '@mui/material/styles'
import { lightGreen } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton';
import { Card,CardHeader,CardMedia,CardContent,CardActions,
    Collapse,Avatar,Typography } from '@mui/material'

import CityItemExpendedContent from 'components/CityItemExpendedContent'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    }))

const CityItem = ({city}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (<Card sx={{ width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: lightGreen[500] }}>
              {city.index}
            </Avatar>
          }
          title={city.name}
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/bogota.jpeg"
          alt="Bogota"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {city.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h4' textAlign={'center'}> Grupo de Regalos </Typography>
            <CityItemExpendedContent giftGroups={city.giftGroups}/>
          </CardContent>
        </Collapse>
      </Card>)
}

export default CityItem