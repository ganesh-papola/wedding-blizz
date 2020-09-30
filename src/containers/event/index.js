import React, { useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { strings } from 'constant';
import { BreadCrumb, Loader } from "components";
import { fetchEvent } from "actions";
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    const dispatch = useDispatch();
    const { loader=false }= useSelector(({event})=>event);
    const { user:{type=0} }= useSelector(({user})=>user);
    useEffect(()=>{
        const get = async () =>{
            if(type===3)
            return props.history.push('/eventfr')
            const event = await dispatch(fetchEvent());
            console.log("event event ", event);
            if(event) props.history.push('/eventdetail');
        }
        get();
    },[])
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