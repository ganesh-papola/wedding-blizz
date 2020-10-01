import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { eventStyle, commonButtonStyle } from 'styles';
import { userIcon, calendarIcon, locationPinIcon } from "assets";
import { strings } from 'constant';
const { events, common } = strings;

const dummy = [
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
    { title: 'The Wedding Party', name: 'Moses Chikodinaka', date: '02 Sep 2020', location: 'Radisson Blue Hotel' },
]
export default (props) => {
    const classes = eventStyle();
    const { user:{type} }= useSelector(({user})=>user);
    useEffect(()=>{
        if(type!==3)
            return props.history.push('/event')
    },[type])
    return (
        <Grid justify='center' container className={classes.eventFrMain}>
            <Grid item className={classes.eventFrHeadV}>
                <div className={classes.eventFRheadingTV}>
                    <Box fontFamily='CormorantBold' className={classes.eventT}>
                        {events.TheEventFairy}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.eventFrNameHT}>
                        {events.TheEventFairy}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.eventFrReviewHT}>
                        <Rating value={3} size="small" readOnly />
                        {'(4.0)'}
                        <div className={classes.smallDot}/>
                        {'5 Reviews'}
                    </Box>
                </div>
            </Grid>
            <div className={classes.eventFrListContainer}>
                <Grid justify='center' container>
                    {dummy.map((event, index) =>
                        <Grid item sm={12} xs={12} md={12} lg={4} key={`${index}-event-fair`} className={classes.eventFrListMain}>
                            <div className={classes.eventFrListV}>
                                <Box fontFamily='GothamBold' className={classes.eventFrHT}>
                                    {event.title}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={userIcon} alt="" className={classes.eventFrIcons} />
                                    {event.name}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={calendarIcon} alt="" className={classes.eventFrIcons} />
                                    {event.date}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={locationPinIcon} alt="" className={classes.eventFrIcons} />
                                    {event.location}
                                </Box>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        </Grid>
    );
};
