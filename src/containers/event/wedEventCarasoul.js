import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useSelector } from "react-redux";
import { commonStyle, eventStyle } from 'styles';
import Carousel from 'react-material-ui-carousel'
import { strings } from 'constant';
import moment from "moment";
const { events } = strings;

export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const { event = {} } = useSelector(({ event }) => event);
    const { images, spouse_name = "", event_date = "", event_location = "" } = event;
    return (
        <div className={classes.crEventMain}>
            <Grid container justify="center" className={classes.eventInfoV}>
                <Grid item sm={12} xs={12} md={12} className={classes.crImageV}>
                    <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                        {images&&images.map((image,i) => <img key={Math.random()+'image-vend'+i} src={image} className={classes.eventDetailsCRImge} />)}
                    </Carousel>
                </Grid>
                <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                    <Typography noWrap component="div" className={classes.eventInfoTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.CoupleName}
                        </Box>
                        <Box  fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {spouse_name}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={4} className={classes.eventInfoGV}>
                    <Typography component="div" className={classes.imageGridTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.EventDate}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {event_date&&moment(event_date).format('DD MMM YYYY')}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={12} className={classes.eventInfoGV}>
                    <Typography noWrap component="div" className={classes.imageGridTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.WeddingLocation}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {event_location}
                        </Box>
                        {/* <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {address2}
                        </Box> */}
                    </Typography>
                </Grid>
                <div className={commClasses.hairline} />
            </Grid>
        </div>
    )
}