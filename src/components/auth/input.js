import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { authModalStyle } from "styles";
import { TextField, DropDown } from "components";

export default ({ onChange = () => { }, fields = [], errors, state }) => {
    const classes = authModalStyle();
    return (
        <>
            {
                fields.map((item, i) => (
                    <div className={classes.inputFieldsV} key={item.key + i}>
                        {item.type==='textfield'&&
                        <TextField
                            secure={item.secure}
                            label={item.label}
                            value={state[item.key]}
                            error={errors[item.key]}
                            maxLength={item.maxLength}
                            onChange={value => onChange(item.key, value)}
                        />}
                        {
                            item.type==='dropdown'&&
                            <DropDown label={item.label}
                            data={item.data}
                            value={state[item.key]}
                            error={errors[item.key]}
                            onChange={value => onChange(item.key, value)}
                            />
                        }
                    </div>
                ))
            }
        </>
    )
}