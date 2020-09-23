import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle } from 'styles';
import { TextField, DatePicker, DropDown, Radio, FilePicker, BreadCrumb } from "components";
import { Room } from '@material-ui/icons';
import { strings } from 'constant';
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
                    {events.NewWeddingEvent}
                </Box>
            </Typography>
            <form className={classes.addNewEventFormV} noValidate autoComplete="off">
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={events.SpouseName} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DatePicker label={events.WeddingDate} />
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.addNewEventFormGV}>
                        <Typography component="div" className={classes.mapTV}>
                            <Room />
                            <Box fontFamily='GothamBook' className={classes.mapT}>
                                {common.Map}
                            </Box>
                        </Typography>
                        <TextField label={events.WeddingLocation} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.State} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.Country} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={events.GuestCount} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV} />

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.EventType} value="private" va="private" vb="public" />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.EventType} value="traditional" va="traditional" vb="family" />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <FilePicker label={common.Images} onImage={images => { }} />
                    </Grid>
                    <Typography component="div" className={classes.eventTV}>
                        <Box fontFamily='CormorantBold' className={classes.eventT}>
                            {events.WeddingTheme}
                        </Box>
                    </Typography>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={events.WeddingTheme} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <FilePicker label={common.Images} onImage={images => { }} />
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6} className={classes.addNewEventFormGBtV}>
                        <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                            {common.Submit}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}