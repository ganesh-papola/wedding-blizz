import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { vendorStyle } from 'styles';
import {
    groupMessageIcon, bulbIcon, cardIcon,
} from "assets";
import { strings } from 'constant';
const { vendors, common } = strings;


export default props => {
    const classes = vendorStyle();
    return (
        <Grid container className={classes.findVendorMain}>
            <Typography component="div" className={classes.findVendorHV}>
                    <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorHT}`}>
                        {vendors.FindingaVendorH}
                    </Box>
                    <Box fontFamily='GothamBook' className={`${classes.findVendorHST}`}>
                        {vendors.FindingaVendorSubH}
                    </Box>
                </Typography>
                <Grid item justify="center" sm={12} xs={12} md={12} lg={4} align='center' className={classes.findVendorSubGV}>
                    <img src={cardIcon} className={classes.subImage} />
                    <Typography component="div" className={classes.findVendorSubTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorSubT}`}>
                            {vendors.StartYourStyle}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.findVendorSubInfoT}`}>
                            {vendors.StartYourStyleInfo}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item justify="center" sm={12} xs={12} md={12} lg={4} align='center' className={classes.findVendorSubGV}>
                    <img src={bulbIcon} className={classes.subImage} />
                    <Typography component="div" className={classes.findVendorSubTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorSubT}`}>
                            {vendors.UnderstandOptions}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.findVendorSubInfoT}`}>
                            {vendors.UnderstandOptionsInfo}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item justify="center" sm={12} xs={12} md={12} lg={4} align='center' className={classes.findVendorSubGV}>
                    <img src={groupMessageIcon} className={classes.subImage} />
                    <Typography component="div" className={classes.findVendorSubTV}>
                        <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorSubT}`}>
                            {vendors.StartConversation}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.findVendorSubInfoT}`}>
                            {vendors.StartConversationInfo}
                        </Box>
                    </Typography>
                </Grid>
        </Grid>
    )
}