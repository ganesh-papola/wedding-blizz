import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, commonStyle, primaryLoaderStyle, btSmallIcon } from 'styles';
import { strings } from 'constant';
import Carousel from 'react-material-ui-carousel'
import { BreadCrumb, Loader, QuoteModal } from "components";
import { venueRoundImage } from "assets";
import {Chat, Assignment} from '@material-ui/icons';
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const [quote, showQuote] = useState(false);
    const breads = [
        { title: common.Home, path: '/' },
        { title: events.WeddingEvent, path: '/eventdetail' },
        { title: common.Category, path: '/category' },
        { title: events.Vendors, path: '/eventvendorlist' },
    ];
    const dispatch = useDispatch();
    const { vendor = {}, loader = false } = useSelector(({ event }) => event);
    const dummy = [
        { title: 'Venue', image: venueRoundImage },
    ]
    const images = ["https://firebasestorage.googleapis.com/v0/b/weddingblizz-cdf0a.appspot.com/o/events%2F1601550137298-IMG_20181111_125028.jpg?alt=media&token=9ca58bdb-e121-4667-bd2f-2d085be98d9e",
                    "https://firebasestorage.googleapis.com/v0/b/weddingblizz-cdf0a.appspot.com/o/events%2F1601550137302-IMG_20181111_130036.jpg?alt=media&token=3aa6a6b9-46dd-4b3f-8d23-51d5e7463828"]
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.VendorDetail} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.VendorDetail}
                </Box>
            </Typography>
            { loader ? <Loader style={primaryLoaderStyle} /> :
                <div className={classes.detailParentV}>
                    <Grid container justify="center" className={classes.eventInfoV}>
                        <Grid item sm={12} xs={12} md={12} className={classes.crImageV}>
                            <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                                {images && images.map((image, i) =>
                                    <img key={Math.random() + 'image-vend-detail' + i} src={image} className={classes.eventVendDetailsCRImge} />)}
                            </Carousel>
                        </Grid>
                        <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                            <Typography noWrap component="div" className={classes.eventInfoTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {events.VendorName}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                    {vendor.business_name}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={4} className={classes.eventInfoGV}>
                            <Typography noWrap component="div" className={classes.eventInfoTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {common.Rating}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventVendDetailHT}>
                                    <Rating value={4} size="small" readOnly />
                                    {'(4.0)'}
                                    <div className={classes.smallDot} />
                                    {'5 Reviews'}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={12} className={classes.eventInfoGV}>
                            <Typography noWrap component="div" className={classes.eventInfoTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {common.Address}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                    {`${vendor.city} ${vendor.state}, ${vendor.zip_code}`}
                                </Box>
                            </Typography>
                        </Grid>
                        <div className={commClasses.hairline} />
                        <Grid item sm={12} xs={12} md={12} >
                            <Typography component="div" className={classes.eventSubV}>
                                <Box fontFamily='CormorantBold' className={classes.eventSubT}>
                                    {events.VendingServicesOffered}
                                </Box>
                            </Typography>
                            {dummy.map((item, index) => (
                        <div className={classes.eventVendorsV} key={ Math.round()+ '-' + item.title + index + "vend-round"}>
                            <img src={item.image} className={classes.vendorImg} />
                            <Box fontFamily='Gotham' className={classes.vendorImgAlt}>
                                {item.title}
                            </Box>
                        </div>
                    ))}
                        </Grid>
                        <div className={commClasses.hairline} />
                        <Grid item sm={12} xs={12} md={5} className={classes.vendorDetailBLV} >
                            <div className={classes.chatButtonV}>
                                <Box fontFamily='GothamBook' className={classes.vendorDetButT}>
                                    <Chat style={btSmallIcon} />
                                    {common.Chat}
                                </Box>   
                            </div>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} className={classes.vendorDetailBRV}>
                            <div className={classes.chatButtonV} onClick={()=>showQuote(true)}>
                                <Box fontFamily='GothamBook' className={classes.vendorDetButT}>
                                    <Assignment style={btSmallIcon} />
                                    {common.GetAQuote}
                                </Box>   
                            </div>
                        </Grid>
                    </Grid>
                </div>
            }
            {quote&&<QuoteModal modal={quote} onClose={()=>showQuote(false)}/>}
        </Grid>
    )
}