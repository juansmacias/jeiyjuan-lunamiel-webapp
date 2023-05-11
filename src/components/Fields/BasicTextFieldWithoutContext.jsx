import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

export default function BasicTextFieldWithoutContext(passThroughProps){

    return (
        <TextField { ...passThroughProps } />
    )
}
