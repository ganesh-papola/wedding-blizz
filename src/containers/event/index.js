import React, { useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { strings } from 'constant';
import { BreadCrumb, Loader } from "components";
import { fetchEvent, fetchCategory } from "actions";
import { notification } from "helpers";
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    const dispatch = useDispatch();
    const { loader=false }= useSelector(({event})=>event);
    const { user:{type,roles=[],uid}, fcm }= useSelector(({user})=>user);
    useEffect(()=>{
        const get = async () =>{
            if(type===3||roles.indexOf(3)>-1)
            return props.history.push('/vendor')
            if(type===2||roles.indexOf(2)>-1)
            return props.history.push('/guestlanding')
            const event = await dispatch(fetchEvent());
            if(event) props.history.push('/eventdetail');
        }
        dispatch(fetchCategory());
        get();
        if(!fcm || fcm===[])
            notification(uid)
    },[type])
    return (
        <Grid container className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.WeddingEvent} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.WeddingEvent}
                </Box>
            </Typography>
            <div className={classes.addNewEventV}>
                {loader? <Loader />
                :<Box fontFamily='CormorantBold' className={classes.addNewEventBox} onClick={()=>props.history.push('/addevent')}>
                    <img src={plusIcon} className={classes.plusIcon}/>
                    {events.AddUrWeddingEvent}
                </Box>}
            </div>
        </Grid>
    )
}