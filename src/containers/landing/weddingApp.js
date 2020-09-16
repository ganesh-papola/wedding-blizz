import React, { useState } from 'react';
import { downloadPrApple, downloadPrAndroid } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box, Container } from '@material-ui/core'
import { strings } from 'constant';

const { landing } = strings;

export default (props) => {
    const classes = landingStyle();

    return (
        <Grid container className={classes.weddingAppView}>
            <Grid item justify="center" align='center' sm={12} xs={12} md={12} lg={12}>
                <Typography className={classes.weddingAppTV}>
                    <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingAppT}`}>
                        {landing.PlanWeddingH1}
                    </Box>
                    <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingAppT}`}>
                        {landing.PlanWeddingH2}
                    </Box>
                </Typography>
                <Box className={`${classes.weddingAppImageV}`}>
                    <img src={downloadPrApple} className={classes.downloadImage} onClick={() => alert('In progress..')} />
                    <img src={downloadPrAndroid} className={classes.downloadImage} onClick={() => alert('In progress..')} />
                </Box>
            </Grid>
        </Grid>
    );
};
