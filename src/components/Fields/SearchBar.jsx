import React from 'react'

import { 
    TextField,
    InputAdornment,
    SvgIcon,
    IconButton
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export default function SearchBar({placeholder,searchPhraseValue,clearSearchFunc,searchOnChangeFunc}) {

    return (
        <TextField
            fullWidth
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                    </SvgIcon>
                </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={clearSearchFunc} edge="end">
                        <HighlightOffIcon/>
                    </IconButton>
                </InputAdornment>
                )
            }}
            placeholder={placeholder}
            variant="outlined"
            onChange={searchOnChangeFunc}
            value={searchPhraseValue}
            />
    )
}