import React, { useState } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import { commonStyle } from "styles";

export default ({ value = '', onChange=()=>{}, label, maxLength, error, rows = 4,  ...tprops }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onTextChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <div className={classes.inputFieldsV}>
            <Typography component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <TextField
                className={classes.textAreaTV}
                {...tprops}
                error={!!error}
                multiline
                rows={rows}
                id={label}
                label={label}
                value={val}
                helperText={error}
                variant="outlined"
                inputProps={{
                    maxLength,
                }}
                onChange={({ target: { value } }) => onTextChange(value)}
            />
        </div>
    )
}