import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonStyle, commonButtonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from "react-redux";
import { setEventVendor } from "actions";
import { useDispatch } from "react-redux";
import {
    plusIcon, giftIcon, usersIcon,
    venueRoundImage, weddingcateringRoundImage, weddingBandRoundImage
} from "assets";

const { events, common } = strings;
export default props => {
    const classes = eventStyle();
    const dispatch  = useDispatch();
    const commClasses = commonStyle();
    const { event = {}, categories = [], vendor } = useSelector(({ event }) => event);
    const { guest_count = 150, gifts = 5, totalGifts = 15 } = event;
    const onBookedVendor = () => {
        dispatch(setEventVendor(vendor));
        props.history.push({pathname: '/eventvendordetail', state:{booked:true} });
    }
    return (
        <Grid container justify="center" className={classes.eventVendorsMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.Vendors}
                </Box>
            </Typography>
            <div className={classes.vendorHorV}>
                {
                    categories.map((item, index) => (
                        <div onClick={onBookedVendor} className={classes.eventVendorsV} key={Math.round() + '-' + item.title + index + "vend-round"}>
                            <img src={item.image} className={classes.vendorImg} />
                            <Box fontFamily='Gotham' className={classes.vendorImgAlt}>
                                {item.name}
                            </Box>
                        </div>
                    ))
                }
                <div className={classes.eventVendorsV}>
                    <div className={classes.roundVenV} onClick={() => props.history.push('/category')}>
                        <img src={plusIcon} className={classes.plusIcon1} />
                    </div>
                </div>
                <div className={commClasses.hairline} />
                <Typography component="div" className={classes.eventTV}>
                    <Box fontFamily='CormorantBold' className={classes.eventT}>
                        {events.Guest}
                    </Box>
                </Typography>
                <div className={commClasses.center}>
                    <div className={classes.eventStatBox} onClick={() => props.history.push("/guests")}>
                        <img src={usersIcon} />
                        <Box fontFamily='GothamBook' className={classes.eventstatsT}>
                            {`${guest_count} ${guest_count > 1 ? events.Guests : events.Guest}`}
                        </Box>
                    </div>
                </div>
                <div className={commClasses.hairline} />
                <Typography component="div" className={classes.eventTV}>
                    <Box fontFamily='CormorantBold' className={classes.eventT}>
                        {events.Gifts}
                    </Box>
                </Typography>
                <div className={commClasses.center}>
                    <div className={classes.eventStatBox} onClick={() => props.history.push("/gift")}>
                        <img src={giftIcon} />
                        <Box fontFamily='GothamBook' className={classes.eventstatsT}>
                            {`${gifts} ${common.outOf} ${totalGifts}`}
                        </Box>
                    </div>
                </div>

                <div className={commClasses.hairline} />
                {/* <Typography component="div" className={classes.eventTV}>
                    <Box fontFamily='CormorantBold' className={classes.eventT}>
                        {events.Gifts}
                    </Box>
                </Typography>
                <div className={commClasses.center}>
                    <div className={classes.eventStatBox} onClick={() => props.history.push("/gift")}>
                        <img src={giftIcon} />
                        <Box fontFamily='GothamBook' className={classes.eventstatsT}>
                            {`${gifts} ${common.outOf} ${totalGifts}`}
                        </Box>
                    </div>
                </div> */}

                {/* <div className={commClasses.hairline} />
                <Typography component="div" className={classes.eventTV}>
                    <Box fontFamily='CormorantBold' className={classes.eventT}>
                        {common.Gallery}
                    </Box>
                </Typography> */}
                <div className={commClasses.space100} />
                <div className={commClasses.center}>
                    <Button variant="contained" size="large" color='primary' style={commonButtonStyle} onClick={() => props.history.push("/gallery")}>
                        {common.GoToGallery}
                    </Button>
                </div>
            </div>
        </Grid>

    )
}