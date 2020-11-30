import React, { useEffect, useState } from "react";
import { guestLandStyle, eventStyle } from "styles";
import { Typography, Box } from '@material-ui/core'
import Gallery from "react-photo-gallery";
import { useDispatch, useSelector } from 'react-redux';
import {
    weddingPlanner1, weddingPlanner2, WeddingPhotographers, DJs, WeddingPlanners, flowersPotDec,
    aboutCouple, dressingBride, largeHallRestrau, weddingServicesCover
} from "assets";
import { userIcon, calendarIcon, locationPinIcon } from "assets";
import { strings } from 'constant';
import { Loader, NoRecordFound } from 'components';
import { getGuestEvents, setEvent } from "actions";
import moment from "moment";
const { common } = strings;

const photos = [
    { src: WeddingPhotographers, height: 3, width: 5 },
    { src: DJs, height: 1, width: 2 },
    { src: WeddingPlanners, height: 3, width: 4 },
    { src: dressingBride, height: 1, width: 1 },
    { src: flowersPotDec, height: 4, width: 4 },
    { src: aboutCouple, height: 3, width: 4 },
    { src: weddingPlanner1, height: 100, width: 200 },
]
export default props => {
    const classes = guestLandStyle();
    const eclasses = eventStyle();
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    const [loader, setLoader] = useState(true);
    const { type='' } = useSelector(({ user }) => user)?.user;
    useEffect(() => {
        const events = async () => {
            setTimeout(() => {
                setLoader(false)
            }, 5000);
            const evnts = await dispatch(getGuestEvents());
            console.log("evnts evnts evnts", evnts)
            setEvents(evnts);
            setLoader(false)
        }
        if(type!==2)
            props.history.push('/eventdetail')
        else
        events();
    }, []);
    const getOwnerName = id => {
        const { owners = [] } = events;
        const user = owners.filter(ow => ow.userId === id);
        return user[0]?.name;
    }
    const handleEvent = (item) => {
        dispatch(setEvent(item));
        props.history.push('/guest-event')
    }
    return (
        <div className={classes.container}>
            <div className={classes.headerImageV}>
                <img src={weddingPlanner2} className={classes.headerImage} />
            </div>
            <div className={classes.subImagesV}>
                <Gallery photos={photos} />
            </div>
            <Typography component="div" className={eclasses.eventTV}>
                <Box fontFamily='CormorantBold' className={eclasses.eventT}>
                    {common.Invitations}
                </Box>
            </Typography>
            <div className={classes.invitesV}>
                {
                    loader ? <Loader /> :

                        events && events.events && events.events.length ? events.events.map((item, i) =>
                            (
                                <div className={classes.eventsLisCardV}>
                                    <div key={'guest-events invites-' + i} className={classes.eventsLisCard} onClick={() => handleEvent(item)}>
                                        <Box fontFamily='Gotham' className={classes.eventT}>
                                            {item.event_name}
                                        </Box>

                                        <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                                            <img src={userIcon} alt="" className={eclasses.eventFrIcons} />
                                            {getOwnerName(item.owners)}
                                        </Box>
                                        <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                                            <img src={calendarIcon} alt="" className={eclasses.eventFrIcons} />
                                            {item.event_date && moment(new Date(item.event_date)).format('MM/DD/YYYY')}
                                        </Box>
                                        <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                                            <img src={locationPinIcon} alt="" className={eclasses.eventFrIcons} />
                                            {item.event_location}
                                        </Box>

                                    </div></div>)) : <NoRecordFound />}
            </div>
        </div>
    )
}