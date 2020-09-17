import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useSelector } from "react-redux";
import { commonStyle, eventStyle } from 'styles';
import Carousel from 'react-material-ui-carousel'
import { strings } from 'constant';
import { couple } from "assets";
const { events } = strings;

const dummy = [
    couple, couple, couple, couple, couple
]
export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const { event = {} } = useSelector(({ event }) => event);
    const { images = dummy, name = "Joe Root & Maria Clerk", date = "02 Sep 2020", address1 = "Radisson Blue Hotel",
        address2 = "63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684" } = event;
    return (
        <div className={classes.crEventMain}>
            <Grid container justify="center" className={classes.eventInfoV}>
                <Grid item sm={12} xs={12} md={12} className={classes.crImageV}>
                    <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                        {images.map(image => <img key={Math.random()} src={image} className={classes.eventDetailsCRImge} />)}
                    </Carousel>
                </Grid>
                <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                    <Typography component="div" className={classes.eventInfoTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.CoupleName}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {name}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={4} className={classes.eventInfoGV}>
                    <Typography component="div" className={classes.imageGridTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.EventDate}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {date}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={12} className={classes.eventInfoGV}>
                    <Typography component="div" className={classes.imageGridTV}>
                        <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                            {events.WeddingLocation}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {address1}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                            {address2}
                        </Box>
                    </Typography>
                </Grid>
                <div className={commClasses.hairline} />
            </Grid>
        </div>
    )
}