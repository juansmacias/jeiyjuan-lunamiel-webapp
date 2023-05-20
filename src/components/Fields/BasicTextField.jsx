import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

export default function BasicTextField(passThroughProps){
    const { name,defaultstate,optionalvalue='false' } = passThroughProps
    const [textValue, setTextValue ] = useState(defaultstate?defaultstate:'')
    const { register, errors } = useFormContext()
    const errorMessage = errors?.[name]?.message

    if(optionalvalue)
        return (
            <TextField { ...register(name)}
                value={ textValue }
                helperText={errorMessage}
                error={!!errorMessage}
                onChange= {({ currentTarget: { value } }) => { setTextValue(value)}}
                { ...passThroughProps }
            />
        )
    else 
        return (<TextField { ...register(name,{ required:'Requerido' })}
                value={ textValue }
                helperText={errorMessage}
                error={!!errorMessage}
                onChange= {({ currentTarget: { value } }) => { setTextValue(value)}}
                { ...passThroughProps }
        />)
}
