import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { TextField, DatePicker } from "components";
import { strings } from 'constant';
const { events } = strings;

export default props => {
    const classes = eventStyle();
    return (
        <Grid container className={classes.eventMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.NewWeddingEvent}
                </Box>
            </Typography>
            <form className={classes.addNewEventFormV} noValidate autoComplete="off">
                <Grid container>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={events.SpouseName} />
                    </Grid>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DatePicker label={events.WeddingDate} />
                    </Grid>
                    <Grid item   sm={12} xs={12} className={classes.addNewEventFormGV}>
                        <TextField label={events.WeddingLocation} />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}