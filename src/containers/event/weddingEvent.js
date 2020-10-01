import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, primaryLoaderStyle } from 'styles';
import { strings } from 'constant';
import WedEventCarasoul from './wedEventCarasoul';
import WedEventVendors from './wedEventVendors';
import { BreadCrumb, Loader } from "components";
import { fetchEvent } from "actions";

const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    const dispatch = useDispatch();
    const { loader=false } = useSelector(({ event }) => event);
    useEffect(()=>{
        const get = async () =>{
            const event = await dispatch(fetchEvent());
            if(!event) props.history.push('/addEvent');
        }
        get();
    },[])
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.WeddingEvent} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.WeddingEvent}
                </Box>
            </Typography>
            {loader?<Loader style={primaryLoaderStyle} /> :
            <>
            <WedEventCarasoul history={props.history} />
            <WedEventVendors history={props.history} />
            </>}
        </Grid>
    )
}