import React, { useState } from 'react';
import { Typography, Box, Radio } from '@material-ui/core';
import { commonStyle } from "styles";

export default ({ value = '', onChange = () => { }, label, secure = false, va, vb }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onTextChange = v => {
        setValue(v);
        onChange(v)
    }
    if (!va || !vb || va === vb)
        return null
    return (
        <div className={classes.inputFieldsV}>
            <Typography component={'span'}>
                <Box fontFamily="Gotham" className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <div className={classes.radioPv}>
                <div className={classes.radioV}>
                    <Radio
                        checked={va === val}
                        onChange={({ target: { value } }) => onTextChange(value)}
                        value={va}
                    />
                    <Typography component={'span'} onClick={() => onTextChange(va)}>
                        <Box fontFamily="GothamBook" className={classes.radioT}>{va}</Box>
                    </Typography>
                </div>
                <div className={classes.radioV}>
                    <Radio
                        checked={vb === val}
                        onChange={({ target: { value } }) => onTextChange(value)}
                        value={vb}
                    />
                    <Typography component={'span'} onClick={() => onTextChange(vb)}>
                        <Box fontFamily="GothamBook" className={classes.radioT}>{vb}</Box>
                    </Typography>
                </div>
            </div>
        </div>
    )
}