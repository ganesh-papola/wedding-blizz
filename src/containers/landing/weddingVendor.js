import React, { useState } from 'react';
import { weddingVendor } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box, Divider } from '@material-ui/core'
import { strings } from 'constant';

const { landing } = strings;

const LText =  [landing.Photography, landing.BeautyNHealth, landing.Catering, landing.Videography, landing.Invitation],
     RText = [landing.Photography, landing.BeautyNHealth, landing.Catering, landing.Videography, landing.Invitation]
export default (props) => {
    const classes = landingStyle();
    return (
        <Grid container className={classes.weddingVenderV}>
                <Grid item sm={12} xs={12} md={6} className={classes.weddingVenderVL}>
                <Typography component="div" className={classes.weddingVLTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingVLHeadT}`}>
                            {landing.WeddingVendors}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.weddingVLHeadInfoT}`}>
                            {landing.WeddingVendorInfo}
                        </Box>
                        <Box className={classes.WVLListView}>
                            <Box className={classes.WVLListSubView}>
                                {LText.map((text,i) =>(<Box fontFamily='Gotham' key={`Black-Widow-R-${i}`} className={`${classes.weddingVLListT}`}>
                                    {text}
                                </Box>))}
                            </Box>
                            <div className={classes.WVLVDevider} />
                            <Box className={classes.WVLListSubView}>
                                {RText.map((text,i) =>(<Box fontFamily='Gotham' key={`Black-Widow-R-${i}`} className={`${classes.weddingVLListT}`}>
                                    {text}
                                </Box>))}
                            </Box>
                        </Box>
                    </Typography>
                </Grid>
                <Grid item  sm={12} xs={12} md={6} className={classes.weddingVenderVR}>
                    <img src={weddingVendor} className={classes.weddingVendImg} />
                    <Typography component="div" className={classes.weddingVRTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.weddingVRT}`}>
                            {landing.EasyFindBestWS}
                        </Box>
                    </Typography>
                </Grid>
        </Grid>
    );
};

