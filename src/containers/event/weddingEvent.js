import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { strings } from 'constant';
import WedEventCarasoul from './wedEventCarasoul';
import WedEventVendors from './wedEventVendors';

const { events } = strings;

export default props => {
    const classes = eventStyle();
    return (
        <Grid container justify="center" className={classes.eventMain}>
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