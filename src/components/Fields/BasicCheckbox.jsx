import React, {useState} from "react"
import {Controller} from 'react-hook-form'

import {FormGroup, FormControlLabel,Checkbox} from '@mui/material'

const BasicCheckbox = (props) => {
    const {name,options,control,label} = props

    const [check, setCheck ] = useState(false)

    return (<FormControlLabel control={<Checkbox value={check} />} label={label} />)
}

export default BasicCheckbox