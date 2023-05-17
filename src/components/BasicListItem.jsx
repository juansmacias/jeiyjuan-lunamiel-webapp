import React from "react"
import { Paper,Typography,IconButton } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const BasicListItem = (props) =>{
    const {title,icon,onClicK} = props
    return (
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100px',
            padding: '8px',
          }}
        >
          <Typography
            sx={{
              flex: '1',
              marginRight: '16px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            variant="body1"
          >
            {title}
          </Typography>
          <IconButton
            sx={{
              width: '48px',
              height: '48px',
            }}
          >
            {icon}
          </IconButton>
        </Paper>
      );
}

export default BasicListItem