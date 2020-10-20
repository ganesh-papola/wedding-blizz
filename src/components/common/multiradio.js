import React, { useState } from 'react';
import { Typography, Box, Radio } from '@material-ui/core';
import { commonStyle } from "styles";

export default ({ value='', onChange=()=>{}, label, data=[] }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value);
    const onTextChange = v => {
        setValue(v);
        onChange(v)
    }
    if (!data||!data.length)
        return null
    return (
        <div className={classes.inputFieldsV}>
            {/* <Typography component={'span'}>
                <Box fontFamily="Gotham" className={classes.inputFLabelT}>{label}</Box>
            </Typography> */}
            <div className={classes.radioPv}>
                {data.map((item,index)=>(
                <div className={classes.radioV} key={`${index}-sweet-radio`}>
                    <Radio
                        checked={item.value === val}
                        onChange={({ target: { value } }) => onTextChange(value)}
                        value={item.value}
                    />
                    <Typography component={'span'} onClick={() => onTextChange(item.value)}>
                        <Box fontFamily="GothamBook" className={classes.radioT}>{item.label}</Box>
                    </Typography>
                </div>))
                }
            </div>
        </div>
    )
}