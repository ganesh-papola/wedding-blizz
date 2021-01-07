import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, commonStyle, primaryLoaderStyle, btSmallIcon } from 'styles';
import { strings } from 'constant';
import Carousel from 'react-material-ui-carousel'
import { BreadCrumb, Loader, QuoteModal, ReviewModal } from "components";
import { Chat, Assignment } from '@material-ui/icons';
import { fetchProposal } from "actions"
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const [quote, showQuote] = useState(false);
    const [review, showReview] = useState(false);
    const breads = [
        { title: common.Home, path: '/' },
        { title: events.WeddingEvent, path: '/eventdetail' },
        { title: common.Category, path: '/category' },
        { title: events.Vendors, path: '/eventvendorlist' },
    ];
    const dispatch = useDispatch();
    const { vendor = {}, loader = false, event, category } = useSelector(({ event }) => event);
    const { uid } = useSelector(({ user }) => user.user);
    const { categories = [] } = useSelector(({ app }) => app);
    useEffect(()=>{
        setTimeout(() => {
            if(!vendor||vendor&&!vendor.id||!vendor.id)
            props.history.push('/');
        }, 2000);
    },[])
    const { booked=false } = props.location.state
    // useEffect(()=>{
    //     const proposals = async () => {
    //         const proposal = await dispatch(fetchProposal(event?.id, uid, category.id));
    //         console.log("proposal proposal",proposal)
    //     };
    //     proposals()
    // },[])
    const handleQuaoteReview = () => {
        if(booked){
            showReview(true)
            showQuote(false);
        }else {
            showQuote(true);
            showReview(false)
        }
    }
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.VendorDetail} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.VendorDetail}
                </Box>
            </Typography>
            { loader ? <Loader style={primaryLoaderStyle} /> :
                <div className={classes.eventVendorDetailMain}>
                    <div className={classes.eventVendorInfoVendV}>
                        <Grid container justify="center" >
                            <Grid item sm={12} xs={10} md={12} className={classes.crImageV}>
                                <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                                    {vendor?.displayImages && vendor?.displayImages.map((image, i) =>
                                        <img key={Math.random() + 'image-vend-detail' + i} src={image} className={classes.eventVendDetailsCRImge} />)}
                                </Carousel>
                            </Grid>
                            <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                                <Typography noWrap component="div" className={classes.eventInfoTV}>
                                    <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                        {events?.VendorName}
                                    </Box>
                                    <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                        {vendor?.business_name}
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
                                        {`${vendor?.city} ${vendor?.state}, ${vendor?.zip_code}`}
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
                                <div className={classes.vendorCategoryV}>
                                    {categories.filter(it => vendor?.categories && vendor?.categories.length && vendor?.categories.includes(it.id))
                                        .map((item, index) => (
                                            <div className={classes.eventVendorsV} key={Math.round() + '-' + item.title + index + "vend-round"}>
                                                <img src={item.icon} className={classes.vendorImg} />
                                                <Box fontFamily='Gotham' className={classes.vendorImgAlt}>
                                                    {item.name}
                                                </Box>
                                            </div>
                                        ))}
                                </div>
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
                                <div className={classes.chatButtonV} onClick={handleQuaoteReview}>
                                    <Box fontFamily='GothamBook' className={classes.vendorDetButT}>
                                        <Assignment style={btSmallIcon} />
                                        {booked?common.WriteReview:common.GetAQuote}
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            }
            {quote && <QuoteModal modal={quote} onClose={() => showQuote(false)} />}
            {review && <ReviewModal modal={review} onClose={() => showReview(false)} />}
        </Grid>
    )
}