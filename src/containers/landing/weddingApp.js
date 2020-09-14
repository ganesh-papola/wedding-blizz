import React, { useState } from 'react';
import { downloadPrApple, downloadPrAndroid } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box, Divider } from '@material-ui/core'
import { strings } from 'constant';

const { landing } = strings;

export default (props) => {
    const classes = landingStyle();

    return (
        <Grid container justify="center" className={classes.weddingAppView}>
                <Typography component="div" className={classes.weddingAppTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingAppT}`}>
                            {landing.PlanWeddingH1}
                        </Box>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingAppT}`}>
                            {landing.PlanWeddingH2}
                        </Box>
                    </Typography>
                <Box className={`${classes.weddingAppImageV}`}>
                    <img src={downloadPrApple} className={classes.downloadImage} onClick={()=>alert('In progress..')} />
                    <img src={downloadPrAndroid} className={classes.downloadImage} onClick={()=>alert('In progress..')}/>
                </Box>
        </Grid>
    );
};
