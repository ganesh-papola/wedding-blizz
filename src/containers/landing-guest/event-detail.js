import React, { useEffect, useState } from "react";
import { guestLandStyle, eventStyle, primaryLoaderStyle, commonStyle, giftStyle, commonButtonSmStyle, btLoaderStyle } from "styles";
import { Typography, Box, Grid, Button, CircularProgress } from '@material-ui/core'
import Gallery from "react-photo-gallery";
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux';
import { strings } from 'constant';
import { Loader, BreadCrumb, NoRecordFound } from 'components';
import moment from "moment";
import { fetchGifts, updateGift } from "actions";
const { events, common } = strings;


export default (props) => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const gclasses = guestLandStyle();
    const gfclasses = giftStyle();
    const dispatch = useDispatch();
    const { event = {} } = useSelector(({ event }) => event);
    const { uid = '', type='', roles=[] } = useSelector(({ user }) => user)?.user;
    const { loader = false, gifts = [] } = useSelector(({ gift }) => gift);
    const { images, spouse_name = "", event_date = "", event_location = "" } = event;
    const breads = [
        { title: common.Home, path: '/' }
    ];
    console.log("gifts gifts ", gifts)
    useEffect(() => {
        if(type!==2)
            props.history.push('/eventdetail')
        else
        dispatch(fetchGifts());
    }, [])
    const onSelectRem = (item, status)=> {
        dispatch(updateGift(item, status))
    }
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={common.EventDetails} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {common.EventDetails}
                </Box>
            </Typography>
            {loader ? <Loader style={primaryLoaderStyle} /> :
                <div className={classes.crEventMain}>
                    <Grid container justify="center" className={classes.eventInfoV}>
                        <Grid item sm={12} xs={12} md={12} className={classes.crImageV}>
                            <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                                {images && images.map((image, i) => <img key={Math.random() + 'image-vend' + i} src={image} className={classes.eventDetailsCRImge} />)}
                            </Carousel>
                        </Grid>
                        <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                            <Typography noWrap component="div" className={classes.eventInfoTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {events.CoupleName}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                    {spouse_name}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={4} className={classes.eventInfoGV}>
                            <Typography component="div" className={classes.imageGridTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {events.EventDate}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                    {event_date && moment(event_date).format('DD MMM YYYY')}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={12} className={classes.eventInfoGV}>
                            <Typography noWrap component="div" className={classes.imageGridTV}>
                                <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                    {events.WeddingLocation}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                    {event_location}
                                </Box>
                            </Typography>
                        </Grid>
                        <div className={commClasses.hairline} />
                        <Typography component="div" className={classes.eventTV}>
                            <Box fontFamily='CormorantBold' className={classes.eventT}>
                                {common.Gift}
                            </Box>
                        </Typography>
                            {
                                loader ? <Loader /> :

                                    gifts && gifts.length ? gifts.map((data, i) =>
                                        data&&(<div className={gclasses.giftsLisCardV}>
                                            <div className={gfclasses.giftDetailModalBody}>
                                                <Box fontFamily='Gotham' className={gfclasses.dialogGiftTitleT}>
                                                    {data?.gift_title}
                                                </Box>
                                                {/* <Box fontFamily='GothamBook' className={gfclasses.dialogDetailT} >
                                                    {data.quantity}
                                                </Box> */}
                                                <Box fontFamily='Gotham' className={gfclasses.dialogTitleT}>
                                                    {common.Description}
                                                </Box>
                                                <Box fontFamily='GothamBook' className={gfclasses.dialogDetailT}>
                                                    {data?.gift_description}
                                                </Box>
                                                <Box fontFamily='Gotham' className={gfclasses.dialogTitleT} >
                                                    {common.DeliveryAddress}
                                                </Box>
                                                <Box fontFamily='GothamBook' className={gfclasses.dialogDetailT}>
                                                    {data?.delivery_address}
                                                </Box>

                                                {/* <Box fontFamily='Gotham' className={gfclasses.dialogTitleT} >
                                                    {gift.Giftedby}
                                                </Box>
                                                <Box fontFamily='GothamBook' className={gfclasses.dialogDetailT} >
                                                    {data.from}
                                                </Box> */}
                                                <Button disabled={loader} onClick={()=>onSelectRem(data,!!data?.selected_by&&data?.selected_by.length>0&&data.selected_by.indexOf(uid)>-1)} variant="contained" size="small" color='primary' style={commonButtonSmStyle}>
                                                    {!!data?.selected_by&&data?.selected_by.length>0&&data?.selected_by.indexOf(uid)>-1? common.RemoveSelection: common.Select}{' '+loader&&<CircularProgress size={'small'} style={btLoaderStyle}/>}
                                                </Button>
                                            </div>
                                        </div>)) : <NoRecordFound />}
                    </Grid>
                </div>
            }
        </Grid>
    )
}