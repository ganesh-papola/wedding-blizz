import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { strings } from 'constant';
const { events } = strings;

export default props => {
    const classes = eventStyle();
    return (
        <Grid container className={classes.eventMain}>
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