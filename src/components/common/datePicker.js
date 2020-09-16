import React, { useState } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { commonStyle } from "styles";

export default ({ value = null, onChange = () => { }, label, maxLength, error, secure = false, ...tprops }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onDateChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.dateFieldsV}>
                <Typography fontFamily="Gotham" component={'span'}>
                    <Box className={classes.inputFLabelT}>{label}</Box>
                </Typography>
                <KeyboardDatePicker
                    className={classes.inputFields}
                    id={label}
                    label={label}
                    value={val}
                    format="MM/dd/yyyy"
                    variant="inline"
                    inputVariant="outlined"
                    {...tprops}
                    onChange={onDateChange}
                    height={60}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </div>
        </MuiPickersUtilsProvider>
    )
}