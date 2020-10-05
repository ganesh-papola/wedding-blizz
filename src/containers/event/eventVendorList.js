import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, primaryLoaderStyle } from 'styles';
import { strings } from 'constant';
import { userIcon, calendarIcon, locationPinIcon } from "assets";
import { BreadCrumb, Loader, NoRecordFound } from "components";
import { fetchVendors, setEventVendor } from "actions";

const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title: common.Home, path: '/' },
        { title: events.WeddingEvent, path: '/eventdetail' },
        { title: common.Category, path: '/category' },
    ];
    const dispatch = useDispatch();
    const { loader = false } = useSelector(({ event }) => event);
    const [vendors, setVendors] = useState([])
    useEffect(() => {
        const get = async () => {
            setVendors(await dispatch(fetchVendors()))
        }
        get();
    }, []);
    const onVendor = (vendor)=>{
        dispatch(setEventVendor(vendor));
        props.history.push('/eventvendordetail');
    }
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.Vendors} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.Vendors}
                </Box>
            </Typography>
            {loader ? <Loader style={primaryLoaderStyle} /> :
                <>
                    { vendors && vendors.length ? vendors.map((vendor, index) =>
                        <Grid item sm={12} xs={12} md={12} lg={4} key={`${index}-event-fair-vendors-list`}
                         onClick={()=>onVendor(vendor)} className={classes.eventVendorListMain}>
                            <div className={classes.eventFrListV}>
                                <Box fontFamily='GothamBold' className={classes.eventFrHT}>
                                    {vendor.business_name}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={userIcon} alt="" className={classes.eventFrIcons} />
                                    {vendor.vendorName}
                                </Box>
                                {/* <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={calendarIcon} alt="" className={classes.eventFrIcons} />
                                    {vendor.date}
                                </Box> */}
                                <Box noWrap fontFamily='GothamBook' className={classes.eventFrCT}>
                                    <img src={locationPinIcon} alt="" className={classes.eventFrIcons} />
                                    {`${vendor.city} ${vendor.state}, ${vendor.zip_code}`}
                                </Box>
                            </div>
                        </Grid>
                    ) :
                    <NoRecordFound /> }
                </>
                }
        </Grid>
    )
}