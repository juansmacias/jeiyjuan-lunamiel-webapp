import React, {useState} from "react"
import {Controller} from 'react-hook-form'

import {FormGroup, FormControlLabel,Switch,Checkbox} from '@mui/material'

const BasicCheckbox = (props) => {
    const {name,control,label} = props

    const [check, setCheck ] = useState(false)

    // return (<Controller
    //     name={name}
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => <Checkbox {...field} />} />)
    return (<FormControlLabel 
        control={<Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Switch
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                />
            )} />} label={label} />)
}

export default BasicCheckbox