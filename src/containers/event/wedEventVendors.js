import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, commonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from "react-redux";
import {
    plusIcon, giftIcon, usersIcon,
    venueRoundImage, weddingcateringRoundImage, weddingBandRoundImage
} from "assets";

const { events, common } = strings;
const dummy = [
    { title: 'Venue', image: venueRoundImage },
    { title: 'Catering', image: weddingcateringRoundImage },
    { title: 'Wedding Band', image: weddingBandRoundImage },
]
export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const { event = {} } = useSelector(({ event }) => event);
    const { vendors = dummy, guests = 150, gifts = 5, totalGifts = 15 } = event;
    return (
        <Grid container justify="center" className={classes.eventVendorsMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.Vendors}
                </Box>
            </Typography>
            <div className={classes.vendorHorV}>
                {
                    vendors.map((item, index) => (
                        <div className={classes.eventVendorsV} key={ Math.round()+ '-' + item.title + index + "vend-round"}>
                            <img src={item.image} className={classes.vendorImg} />
                            <Box fontFamily='Gotham' className={classes.vendorImgAlt}>
                                {item.title}
                            </Box>
                        </div>
                    ))
                }
                <div className={classes.eventVendorsV}>
                    <div className={classes.roundVenV} onClick={() => alert("In progress..")}>
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
                    <div className={classes.eventStatBox}>
                        <img src={usersIcon} />
                        <Box fontFamily='GothamBook' className={classes.eventstatsT}>
                            {`${guests} ${events.Guests}`}
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
                    <div className={classes.eventStatBox}>
                        <img src={giftIcon} />
                        <Box fontFamily='GothamBook' className={classes.eventstatsT}>
                            {`${gifts} ${common.outOf} ${totalGifts}`}
                        </Box>
                    </div>
                </div>
            </div>
        </Grid>

    )
}