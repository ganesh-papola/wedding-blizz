import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { vendorStyle } from 'styles';

import { strings } from 'constant';
const { vendors } = strings;

const alldata = [
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
    vendors.AbiaWeddings,
]
const VendorsList = () => {
    const classes = vendorStyle();
    return (
        alldata.map(label =>
            <Grid item   sm={12} xs={12} md={3} lg={3} className={classes.allVendorStateV}>
                <Typography component="div" className={classes.allCatRoundTV}>
                    <Box fontFamily='Gotham' className={`${classes.allVendorStateT}`}>
                        {label}
                    </Box>
                </Typography>
            </Grid>
        )
    )
}

export default props => {
    const classes = vendorStyle();
    return (
        <Grid container className={classes.allStateVendMain}>
            <Typography component="div" className={classes.findVendorHV}>
                <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorHT}`}>
                    {vendors.WeddingVendorsState}
                </Box>
            </Typography>
            <VendorsList />
        </Grid>
    )
}