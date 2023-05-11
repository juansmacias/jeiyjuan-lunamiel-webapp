import React,{ useState } from 'react'
import {FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import {Controller} from 'react-hook-form'

export default function BasicSelect (props) {
    const {name,options,control} = props
    const [selectValue, setSelectValue ] = useState("")
    
    return (<FormControl fullWidth {...props}>
        <InputLabel id={`${name}`}>{name}</InputLabel>
        <Controller
        control={control}
        name={`${name}`}
        defaultValue=""
        render={({ field }) => (
          <Select {...field} label={`${name}`} fullWidth>
             {options.map((o,i)=>(
                 <MenuItem value={o} key={i}>{o}</MenuItem>
             ))}
          </Select>
        )}
      /></FormControl>)
}