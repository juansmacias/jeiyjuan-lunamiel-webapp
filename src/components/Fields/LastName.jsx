import React, { useState }  from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export default function LastName(passThroughProps) {
  const [lastName, setLastName ] = useState('')
  const { register, errors } = useFormContext()
  const errorMessage = errors?.firstName?.message

  return (
    <TextField {... register('lastName',{ required:'Requerido'})}
      label='Apellido'
      name='lastName'
      type='text'
      required
      value={lastName}
      error={!!errorMessage}
      helperText={errorMessage || '*Requerido'}
      onChange= {({ currentTarget: { value } }) => { setLastName(value)}}
      { ...passThroughProps }
    />
  )
}
