import React from 'react';
import { vendorFrontImage } from 'assets';
import { vendorStyle } from 'styles';
import { Typography, Box, Grid } from '@material-ui/core'
import { strings, } from 'constant';
import DropBoxs from './dropboxs';

const { vendors } = strings;
export default () => {
    const classes = vendorStyle();
    return (
        <div className={classes.frontImageView}>
            <Grid container >
                <Grid item sm={12} xs={12} md={12} lg={12}>
                    <img src={vendorFrontImage} className={classes.frontImage} />
                </Grid>
                <Grid item sm={12} xs={12} md={12} lg={12} className={classes.frontImageTextView}>
                    <Typography component="div" className={classes.headingBox}>
                        <Box fontFamily='CormorantBold' className={`${classes.headingImageText1}`}>
                            {vendors.MeetWeddingTeam}
                        </Box>
                        <DropBoxs />
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}