import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle } from 'styles';
import { TextField, DropDown } from "components";
import { strings } from 'constant';
const { guest, common } = strings;

export default props => {
    const classes = eventStyle();
    return (
        <Grid container className={classes.eventMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {guest.AddNGuest}
                </Box>
            </Typography>
            <form className={classes.addNewEventFormV} noValidate autoComplete="off">
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={guest.GuestName} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={guest.SelectGroup} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.PhoneNumber} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.EmailAddress} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Address} />
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
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}/>

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