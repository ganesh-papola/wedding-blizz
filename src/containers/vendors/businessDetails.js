import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, commonStyle, primaryLoaderStyle, btSmallIcon, vendorStyle } from 'styles';
import { strings } from 'constant';
import Carousel from 'react-material-ui-carousel'
import { BreadCrumb, Loader, NoRecordFound, QuoteModal } from "components";
import { fetchVendorBusiness, getBooking } from "actions";
import { userIcon, calendarIcon, locationPinIcon } from "assets";
import moment from "moment";
const { events, common, vendors } = strings;

export default props => {
    const classes = eventStyle();
    const commClasses = commonStyle();
    const [quote, showQuote] = useState(false);
    const breads = [
        { title: common.Home, path: '/' }
    ];
    const dispatch = useDispatch();
    const { user: { type, uid } } = useSelector(({ user }) => user);
    const { categories = [] } = useSelector(({ app }) => app);
    const { business = {}, loader = false, bloader = false, booking = [] } = useSelector(({ vendor }) => vendor);
    useEffect(() => {
        const get = async () => {
            if (type === 3) {
                const busines = await dispatch(fetchVendorBusiness());
                if (busines && !busines?.business_name || !busines?.id) props.history.push('/vendor');
            } else props.history.push('/event');
            return dispatch(getBooking());
        }
        return get();
    }, [type])

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
                                    {business?.tempImages && business?.tempImages.map((image, i) =>
                                        <img key={Math.random() + 'image-vend-detail' + i} src={image} className={classes.eventVendDetailsCRImge} />)}
                                </Carousel>
                            </Grid>
                            <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                                <Typography noWrap component="div" className={classes.eventInfoTV}>
                                    <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                        {vendors.BusinessName}
                                    </Box>
                                    <Box fontFamily='GothamBook' className={classes.eventInfoIT}>
                                        {business?.business_name}
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
                                        {`${business?.address}, ${business?.city} ${business?.state}, ${business?.zip_code} ${business?.country}`}
                                    </Box>
                                </Typography>
                            </Grid>
                            <div className={commClasses.hairline} />
                            <Grid item sm={12} xs={12} md={12} >
                                <Typography component="div" className={classes.eventSubV}>
                                    <Box fontFamily='CormorantBold' className={classes.eventSubT}>
                                        {common.ServiceOffered}
                                    </Box>
                                </Typography>
                                <div className={classes.vendorCategoryV}>
                                    {categories.filter(it => business?.categories && business?.categories.length && business?.categories.includes(it.id))
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
                            <Grid item sm={12} xs={12} md={12} >
                                <Typography component="div" className={classes.eventSubV}>
                                    <Box fontFamily='CormorantBold' className={classes.eventSubT}>
                                        {vendors.Bookings}
                                    </Box>
                                </Typography>
                                <div>
                                    {bloader ? <Loader /> :
                                        booking && booking.length ? booking.map((item, index) => (
                                            <BookingEvent data={item} key={'vendor-booking-listing' + index} />
                                        )) :
                                            <NoRecordFound text={vendors.NoBookingAvail} />
                                    }
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </div>
            }
            {quote && <QuoteModal modal={quote} onClose={() => showQuote(false)} />}
        </Grid>
    )
}
const BookingEvent = ({ data = {} }) => {
    const classes = vendorStyle();
    const eclasses = eventStyle();
    return (
        <div className={classes.bookingEventCard}>
            <div className={classes.bookingEventBody}>
                <Box noWrap fontFamily='Gotham' className={classes.bookingEventHT}>
                    {data?.event?.theme}
                </Box>
                <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                    <img src={userIcon} alt="" className={eclasses.eventFrIcons} />
                    {data?.event?.spouse_name}
                </Box>
                <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                    <img src={calendarIcon} alt="" className={eclasses.eventFrIcons} />
                    {data&&data.event&&data.event.event_date?moment(new Date(data.event.event_date)).format('DD MMM YYYY'):''}
                </Box>
                <Box noWrap fontFamily='GothamBook' className={eclasses.eventFrCT}>
                    <img src={locationPinIcon} alt="" className={eclasses.eventFrIcons} />
                    {data?.event?.event_location}
                </Box>
            </div>
        </div>
    )
}