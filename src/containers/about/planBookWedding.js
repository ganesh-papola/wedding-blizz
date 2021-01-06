import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { aboutStyle } from 'styles';
import { aboutCouple } from "assets";
import { strings } from 'constant';
const { about } = strings;


export default props => {
    const classes = aboutStyle();
    
    
    return (
        <Grid container className={classes.planBookWedMain}>
            <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.planBookWedIV}>
                    <img src={aboutCouple} className={classes.planBookWedI} />
            </Grid>
            <Grid item   sm={12} xs={12} md={6} lg={6} className={classes.planBookWedV}>
                    <Typography component="div"  className={classes.planBookWedTV}>
                        <Box fontFamily='CormorantBoldItalic' className={classes.planBookWedHT}>
                            {about.PlannBookWedding}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.PlannBookWeddingS1}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.PlannBookWeddingS2}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.weddingServicesST}>
                            {about.PlannBookWeddingS3}
                        </Box>
                    </Typography>
                </Grid>
        </Grid>
    )
}