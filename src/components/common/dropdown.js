
import React, { useState } from 'react';
import { InputLabel, FormControl, Select, MenuItem, Typography, Box } from '@material-ui/core';
import { commonStyle } from 'styles';

export default ({label='', value='', title='', data=[], onChange=()=>{} }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onDateChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <div className={classes.dropdownV}>
            <Typography fontFamily="Gotham" component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <FormControl variant="outlined" className={classes.formControlDropD}>
                <InputLabel label={`${label}-label-${Math.random()}`}>{label}</InputLabel>
                <Select
                    labelId={`${label}-select-id`}
                    id={title}
                    value={val}
                    onChange={({ target: { value } }) => onDateChange(value)}
                    label={label}>
                    {data.map(it => <MenuItem value={it.value}>{it.label}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}