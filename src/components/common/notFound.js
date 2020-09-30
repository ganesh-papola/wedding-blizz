import React from 'react';
import { Box } from '@material-ui/core';
import { strings } from "constant";
import { commonStyle } from 'styles';
const { common } = strings;
export default () => {
    const classes = commonStyle();
    return (
        <div className={classes.notFoundMain}>
            <Box fontFamily="GothamBook" className={classes.notFoundT}>
                {common.notFoundN}
            </Box>
            <Box fontFamily="GothamBook" className={classes.notFoundTT}>
                {common.notFoundT}
            </Box>
        </div>
    )
}