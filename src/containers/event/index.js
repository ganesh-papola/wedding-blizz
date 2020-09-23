import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { strings } from 'constant';
import { BreadCrumb } from "components";
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    return (
        <Grid container className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.WeddingEvent} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.WeddingEvent}
                </Box>
            </Typography>
            <div className={classes.addNewEventV}>
                <Box fontFamily='CormorantBold' className={classes.addNewEventBox} onClick={()=>props.history.push('/addevent')}>
                    <img src={plusIcon} className={classes.plusIcon}/>
                    {events.AddUrWeddingEvent}
                </Box>
            </div>
        </Grid>
    )
}