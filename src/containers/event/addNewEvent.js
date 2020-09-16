import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle } from 'styles';
import { TextField, DatePicker, DropDown, Radio } from "components";
import { Room } from '@material-ui/icons';
import { strings } from 'constant';
const { events, common } = strings;

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
                        <Typography component="div" className={classes.mapTV}>
                            <Room/>
                            <Box fontFamily='GothamBook' className={classes.mapT}>
                                {common.Map}
                            </Box>
                        </Typography>
                        <TextField label={events.WeddingLocation} />
                    </Grid>

                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City} />
                    </Grid>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.State} />
                    </Grid>

                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.Country} />
                    </Grid>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} />
                    </Grid>

                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={events.GuestCount} />
                    </Grid>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}/>
                        
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.EventType} value="private" va="private" vb="public" />
                    </Grid>
                    <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.EventType} value="traditional" va="traditional" vb="family" />
                    </Grid>





                </Grid>
            </form>
        </Grid>
    )
}