import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { aboutStyle } from 'styles';
import { laptopWork } from "assets";
import { strings } from 'constant';
const { about } = strings;

export default props => {
    const classes = aboutStyle();
    return (
        <Grid container className={classes.weddingServicesMain}>
                <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesV}>
                    <Typography component="div"  className={classes.weddingServicesTV}>
                        <Box fontFamily='CormorantBoldItalic' className={classes.weddingServicesT}>
                            {about.ProvidesWeddingServices}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.ProvidesWeddingServicesS1}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.ProvidesWeddingServicesS2}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.ProvidesWeddingServicesS3}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.ProvidesWeddingServicesS4}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesIV}>
                    <img src={laptopWork} className={classes.weddingServicesI} />
                </Grid>
        </Grid>
    )
}