import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle, loaderStyle } from 'styles';
import { TextField, DatePicker, DropDown, Radio, FilePicker, BreadCrumb, Loader } from "components";
import { Room } from '@material-ui/icons';
import { strings, country } from 'constant';
import { addEvent } from 'actions';
const { events, common } = strings;

const initialState = {
    event_date : new Date().getTime(),
    spouse_name : '',
    event_location : '',
    event_type : 0,
    function_type : 0,
    images : [],
    createdAt : new Date().getTime(),
    modifiedAt : new Date().getTime(),
    isDeleted : false,
    guest_count : 1,
    city : '',
    state : '',
    country : '',
    zip_code : ''
}
export default props => {
    const classes = eventStyle();
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const { loader=false }= useSelector(({event})=>event);
    const breads = [
        { title : common.Home, path : '/' }
    ];
    const changeState = (key, value) => {
        setState({ ...state, [key] : value })
    }
    const onSubmit = () => {
        if(state.spouse_name && state.event_location){
            dispatch(addEvent(state));
        }
    }
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
                        <TextField label={events.SpouseName} value={state.spouse_name} onChange={value=>changeState('spouse_name', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DatePicker minDate={new Date()} label={events.WeddingDate} value={state.event_date} onChange={value=>changeState('event_date', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.addNewEventFormGV}>
                        <Typography component="div" className={classes.mapTV}>
                            <Room />
                            <Box fontFamily='GothamBook' className={classes.mapT}>
                                {common.Map}
                            </Box>
                        </Typography>
                        <TextField label={events.WeddingLocation}   onChange={value=>changeState('event_location', value)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City}value={state.city} onChange={value=>changeState('city', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.State} value={state.state} onChange={value=>changeState('state', value)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown data={country} label={common.Country} value={state.country} onChange={value=>changeState('country', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} value={state.zip_code} onChange={value=>changeState('zip_code', value)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={events.GuestCount} min={1} value={state.guest_count} type='number' onChange={value=>changeState('guest_count', value)} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV} />

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.EventType}  value={state.event_type?'public':'private'}  va="private" vb="public" onChange={value=>changeState('event_type', value==='private'?0:1)} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <Radio label={events.WeddingFunction} value={state.event_type?'family':'traditional'} va="traditional" vb="family" onChange={value=>changeState('function_type',value==='family'?0:1)}/>
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
                        <Button variant="contained" disabled={loader} size="large" color='primary' style={commonButtonStyle} onClick={onSubmit}>
                            {loader?<Loader {...loaderStyle} size={15} />:common.Submit}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle} disabled={loader}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}