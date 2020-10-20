
import React, { useState } from 'react';
import { InputLabel, FormControl, FormHelperText, Select, MenuItem, Typography, Box } from '@material-ui/core';
import { commonStyle } from 'styles';

export default ({label='', value='', error='', data=[], onChange=()=>{} }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onDateChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <div className={classes.dropdownV}>
            {/* <Typography component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography> */}
            <FormControl variant="outlined" className={classes.formControlDropD} error={!!error}>
                <InputLabel label={`${label}-label-${Math.random()}`}>{label}</InputLabel>
                <Select
                    labelId={`${label}-select-id`}
                    id={label}
                    value={val}
                    onChange={({ target: { value } }) => onDateChange(value)}
                    label={label}>
                    {data.map((it,i) => <MenuItem key={it.label&&it.label+i} value={it.value}>{it.label}</MenuItem>)}
                </Select>
                {error&&<FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}