import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { aboutStyle } from 'styles';
import { largeHallRestrau } from "assets";
import { strings } from 'constant';
const { about } = strings;

export default props => {
    const classes = aboutStyle();
    return (
        <Grid container className={classes.attentionDetailMain}>
                <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesV}>
                    <Typography component="div"  className={classes.weddingServicesTV}>
                        <Box fontFamily='CormorantBoldItalic' className={classes.weddingServicesT}>
                            {about.Attention2Detail}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.Attention2DetailS1}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.Attention2DetailS2}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesIV}>
                    <img src={largeHallRestrau} className={classes.attentionDetailI} />
                </Grid>
        </Grid>
    )
}