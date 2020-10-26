import React, { useState } from "react";
import { Box } from '@material-ui/core'
import { accountStyle } from "styles";
import { strings } from 'constant';
import Menus from './popupMenu';
import { useSelector, useDispatch } from "react-redux";

const { account, common } = strings;
export default (props) => {
    const classes = accountStyle();
    const { business }= useSelector(({vendor})=>vendor)
    const dummy = [
        { title: common.Discussions, value: 0 },
        { title: common.Events, value: 0 },
        { title: common.Photos, value: business&&business.images?business.images.length:0 },
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