import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { aboutStyle } from 'styles';
import { dressingBride } from "assets";
import { strings } from 'constant';
const { about } = strings;

export default props => {
    const classes = aboutStyle();
    return (
        <Grid container className={classes.attentionDetailMain}>
                <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesIV}>
                    <img src={dressingBride} className={classes.attentionDetailI} />
                </Grid>
                <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.weddingServicesV}>
                    <Typography component="div"  className={classes.weddingServicesTV}>
                        <Box fontFamily='CormorantBoldItalic' className={classes.weddingServicesT}>
                            {about.AmazingValue}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.AmazingValueS1}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.AmazingValueS2}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.AmazingValueS3}
                        </Box>
                    </Typography>
                </Grid>
        </Grid>
    )
}