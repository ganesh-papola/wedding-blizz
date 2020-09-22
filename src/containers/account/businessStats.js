import React, { useState } from "react";
import { Box } from '@material-ui/core'
import { accountStyle } from "styles";
import { strings } from 'constant';
import Menus from './popupMenu';

const { account, common } = strings;
export default (props) => {
    const classes = accountStyle();
    const dummy = [
        { title: common.Discussions, value: 15 },
        { title: common.Events, value: 10 },
        { title: common.Photos, value: 17 },
    ]
    return (
        <div className={classes.businessStatV}>
            {dummy.map(item => <div className={classes.businessStatInV}>
                <Box fontFamily='GothamLight' className={classes.busStatsValuT}>
                    {item.value}
                </Box>
                <Box fontFamily='Gotham' className={classes.busStatsTitleT}>
                    {item.title}
                </Box>
            </div>
            )}
        </div>
    );
};