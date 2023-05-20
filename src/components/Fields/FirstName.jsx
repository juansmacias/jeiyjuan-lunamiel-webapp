import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export default function FirstName(passThroughProps) {
  const [ firstName, setFirstName ] = useState("")
  const { register, errors } = useFormContext()
  const errorMessage = errors?.firstName?.message

  return (
    <TextField { ...register('firstName',{ required:'Requerido'})}
      label='First Name'
      name='firstName'
      type='text'
      required
      value = {firstName}
      error={!!errorMessage}
      helperText={errorMessage || '*Requerido'}
      onChange = {({ currentTarget: { value } }) => { setFirstName(value)}}
      { ...passThroughProps }
    />
  )
}
