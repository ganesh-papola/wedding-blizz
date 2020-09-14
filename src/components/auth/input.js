import React from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import { authModalStyle } from "styles";

export default ({onChange=()=>{}, fields=[], errors, state }) => {
    const classes = authModalStyle();
    return (
        <>
            {
                fields.map((item, i) => (
                    <div className={classes.inputFieldsV} key={item.key + i}>
                        <Typography fontFamily="Gotham" component={'span'}>
                            <Box className={classes.inputFLabelT}>{item.label}</Box>
                        </Typography>
                        <TextField
                            className={classes.inputFields}
                            error={!!errors[item.key]}
                            type={item.secure ? 'password' : 'text'}
                            id={item.label}
                            label={item.label}
                            value={state[item.key]}
                            helperText={errors[item.key]}
                            variant="outlined"
                            inputProps={{
                                maxLength: item.maxLength,
                            }}
                            onChange={({ target: { value } }) => onChange(item.key, value)}
                        />
                    </div>
                ))
            }
        </>
    )
}