import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { vendorStyle } from 'styles';
import {
    venueRoundImage, weddingBandRoundImage, weddingcateringRoundImage, weddingDressRoundImage, weddinggiftImage,
    transportRoundImage, photographyRoundImage, invitationRoundImage
} from "assets";
import { strings } from 'constant';
const { vendors } = strings;
const alldata = [
    { label: vendors.Venue, image: venueRoundImage },
    { label: vendors.Catering, image: weddingcateringRoundImage },
    { label: vendors.WedingBands, image: weddingBandRoundImage },
    { label: vendors.Photography, image: photographyRoundImage },
    { label: vendors.Invitation, image: invitationRoundImage },
    { label: vendors.WeddingGifts, image: weddinggiftImage },
    { label: vendors.Transportation, image: transportRoundImage },
    { label: vendors.Venue, image: venueRoundImage },
    { label: vendors.Catering, image: weddingcateringRoundImage },
    { label: vendors.WedingBands, image: weddingBandRoundImage },
    { label: vendors.Photography, image: photographyRoundImage },
    { label: vendors.Invitation, image: invitationRoundImage },
    { label: vendors.WeddingGifts, image: weddinggiftImage },
    { label: vendors.Transportation, image: transportRoundImage },
    { label: vendors.Venue, image: venueRoundImage },
    { label: vendors.Catering, image: weddingcateringRoundImage },
    { label: vendors.WedingBands, image: weddingBandRoundImage },
    { label: vendors.Photography, image: photographyRoundImage },
    { label: vendors.Invitation, image: invitationRoundImage },
    { label: vendors.WeddingGifts, image: weddinggiftImage },
    { label: vendors.Transportation, image: transportRoundImage },
    { label: vendors.Invitation, image: invitationRoundImage },
    { label: vendors.WeddingGifts, image: weddinggiftImage },
]

const ImagesGrids = props => {
    const classes = vendorStyle();
    return (
        alldata.map((item,i) =>
            <Grid item   sm={12} xs={12} md={3} lg={3} className={classes.allCategoryV} key={item.label+i+'-all-cats'}>
                <div className={classes.allCatRoundImgV}>
                    <img src={item.image} className={classes.allCatRoundImg} />
                </div>
                <Typography component="div" className={classes.allCatRoundTV}>
                    <Box fontFamily='Gotham' className={`${classes.allCatRoundT}`}>
                        {item.label}
                    </Box>
                </Typography>
            </Grid>
        )
    )
}

export default props => {
    const classes = vendorStyle();
    return (
        <Grid container className={classes.allCategoryMain}>
            <Typography component="div" className={classes.findVendorHV}>
                <Box fontFamily='CormorantBoldItalic' className={`${classes.findVendorHT}`}>
                    {vendors.AllVendorCategories}
                </Box>
                <Box fontFamily='GothamBook' className={`${classes.findVendorHST}`}>
                    {vendors.AllVendorCategoriesSub}
                </Box>
            </Typography>
            <ImagesGrids />
        </Grid>
    )
}