import React, { useState } from 'react';
import { Typography, Box, Radio } from '@material-ui/core';
import { commonStyle } from "styles";

export default ({ value = '', onChange = () => { }, label, secure = false, va,vb }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onTextChange = v => {
        setValue(v);
        onChange(v)
    }
    if(!va||!vb|| va===vb)
    return null
    return (
        <div className={classes.inputFieldsV}>
            <Typography fontFamily="Gotham" component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <div>
                <Radio
                    checked={va === val}
                    onChange={({target:{value}})=>onTextChange(value)}
                    value={va}
                />
                <Radio
                    checked={vb === val}
                    onChange={({target:{value}})=>onTextChange(value)}
                    value={vb}
                />
            </div>
        </div>
    )
}