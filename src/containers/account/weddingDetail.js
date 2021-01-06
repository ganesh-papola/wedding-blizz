import React, { useState } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, accountStyle, commonButtonStyle } from 'styles';
import { TextField, DatePicker, DropDown, Radio, FilePicker } from "components";
import { Room } from '@material-ui/icons';
import { strings } from 'constant';
import { ArrowDropDown } from '@material-ui/icons';
import Menus from './popupMenu';

const { events, common, account } = strings;

export default props => {
    const evntClasses = eventStyle();
    const classes = accountStyle();
    const [menu, setMenu] = React.useState(null);
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const closeMenu = () => {
        setMenu(null);
    };
    const onMenu = (ind) => {
        props.setSelected(ind)
    }

    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.WeddingDetails}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick} />
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>

            <Grid container>
                <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                    <TextField label={events.SpouseName} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={evntClasses.addNewEventFormGV}>
                    <DatePicker label={events.WeddingDate} />
                </Grid>
                <Grid item sm={12} xs={12} className={evntClasses.addNewEventFormGV}>
                    {/* <Typography component="div" className={evntClasses.mapTV}>
                        <Room />
                        <Box fontFamily='GothamBook' className={evntClasses.mapT}>
                            {common.Map}
                        </Box>
                    </Typography> */}
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
                <Grid item sm={12} xs={12} md={6} lg={6} />
                <Grid item sm={12} xs={12} md={12} lg={6} className={classes.buttonsV}>
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