import { Alert } from '@mui/material'
import { useDispatch } from 'react-redux'
import React, {useEffect,useState} from "react"


// ----  Selector ------
import { removeAlert } from 'reducers/alerts'

const AutoHideAlert = ({ id, message, severity, autoHideDuration }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            onClose()
        }, autoHideDuration)
    
      }, [autoHideDuration])
    
      function onClose (){
        dispatch(removeAlert(id))
        setOpen(false)
      }

      if (!open) {
        return null
      }

      return (
      <Alert 
      severity={severity} 
      onClose={onClose}>
        {message}
      </Alert>)
}

export default AutoHideAlert