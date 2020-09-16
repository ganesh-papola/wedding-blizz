import React, { useState } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
import { commonStyle } from "styles";

export default ({ value=null, onChange=()=>{}, label, maxLength, error, secure = false, ...tprops }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onDateChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.inputFieldsV}>
            <Typography fontFamily="Gotham" component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <KeyboardDatePicker
                className={classes.inputFields}
                margin="normal"
                id={label}
                label={label}
                value={val}
                format="MM/dd/yyyy"
                variant="outlined"
                {...tprops}
                onChange={onDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
        </MuiPickersUtilsProvider>
    )
}