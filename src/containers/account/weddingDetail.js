import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, accountStyle, commonButtonStyle } from 'styles';
import { TextField, DatePicker, DropDown, Radio, FilePicker } from "components";
import { Room } from '@material-ui/icons';
import { strings } from 'constant';
const { events, common, account } = strings;

export default props => {
    const evntClasses = eventStyle();
    const classes = accountStyle();

    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.WeddingDetails}
            </Box>

                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <TextField label={events.SpouseName} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <DatePicker label={events.WeddingDate} />
                    </Grid>
                    <Grid item sm={12} xs={12} className={evntClasses.addNewEventFormGV}>
                        <Typography component="div" className={evntClasses.mapTV}>
                            <Room />
                            <Box fontFamily='GothamBook' className={evntClasses.mapT}>
                                {common.Map}
                            </Box>
                        </Typography>
                        <TextField label={events.WeddingLocation} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <TextField label={common.City} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <DropDown label={common.State} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <DropDown label={common.Country} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <TextField label={common.Zipcode} />
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <TextField label={events.GuestCount} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV} />

                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <Radio label={events.EventType} value="private" va="private" vb="public" />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <Radio label={events.EventType} value="traditional" va="traditional" vb="family" />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                        <FilePicker label={common.Images} onImage={images => { }} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6}/>
                    <Grid item sm={6} xs={6} md={6} lg={6} >
                        <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                            {common.Update}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>

        </div>
        
    )
}