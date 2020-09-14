import React from 'react';
import { vendorFrontImage } from 'assets';
import { vendorStyle } from 'styles';
import { Typography, Box } from '@material-ui/core'
import { strings,  } from 'constant';
import DropBoxs from './dropboxs';
const { vendors } = strings;

export default () => {
    const classes = vendorStyle();
    return (
        <div className={classes.frontImageView}>
            <img src={vendorFrontImage} className={classes.frontImage} />
            <div className={classes.frontImageTextView}>
                <Typography component="div" className={classes.headingBox}>
                    <Box fontFamily='CormorantBold' className={`${classes.headingImageText1}`}>
                        {vendors.MeetWeddingTeam}
                    </Box>
                    <DropBoxs/>
                </Typography>

            </div>
        </div>
    )
}