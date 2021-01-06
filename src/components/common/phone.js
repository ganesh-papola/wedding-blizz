import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, FormHelperText } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import { commonStyle } from "styles";
import { colors } from 'constant';

export default ({ value = '', onChange=()=>{}, label, maxLength=100, error, secure = false, ...tprops }) => {
    const classes = commonStyle();
    const [val, setValue] = useState('');
    useEffect(()=>setValue(value),[value])
    const onTextChange = v => {
        setValue(v);
        onChange(v)
    }
    return (
        <div className={!!error?classes.phoneInputFieldVErr:classes.phoneInputFieldV}>
            {/* <Typography component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography> */}
            <PhoneInput label={label} color={colors.primary} inputClass={!!error?classes.phoneInputFieldEr:classes.phoneInputField} error={error} 
            country={'us'} value={val} onChange={onTextChange}/>
            {error&&<FormHelperText className={classes.phoneInputError}>{error}</FormHelperText>}
        </div>
    )
}