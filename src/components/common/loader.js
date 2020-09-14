import React from "react";
import { CircularProgress } from '@material-ui/core';
import { commonStyle } from 'styles';

export default ({size=30, style={}, color='white'}) => {
    const classes = commonStyle();
    return (
        <div className={classes.loaderV}>
            <CircularProgress size={size} {...style} color={color} />
        </div>
    )
}