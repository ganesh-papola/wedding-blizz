
import React from 'react';
import { Box } from '@material-ui/core';
import { strings } from "constant";
import { commonStyle } from 'styles';
const { common } = strings;
export default ({text}) => {
    const classes = commonStyle();
    return (
        <div className={classes.notFoundMain}>
            <Box fontFamily='Gotham' className={`${classes.noReordT}`}>
                {text?text:common.NoRecordFound}
            </Box>
        </div>
    )
}