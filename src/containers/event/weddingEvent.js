import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { strings } from 'constant';
import WedEventCarasoul from './wedEventCarasoul';
import WedEventVendors from './wedEventVendors';
import { BreadCrumb } from "components";

const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.WeddingEvent} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.WeddingEvent}
                </Box>
            </Typography>
            <WedEventCarasoul />
            <WedEventVendors />
        </Grid>
    )
}