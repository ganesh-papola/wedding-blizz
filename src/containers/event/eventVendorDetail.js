import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, primaryLoaderStyle } from 'styles';
import { strings } from 'constant';
import Carousel from 'react-material-ui-carousel'
import { BreadCrumb, Loader } from "components";
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title: common.Home, path: '/' },
        { title: events.WeddingEvent, path: '/eventdetail' },
        { title: common.Category, path: '/category' },
        { title: events.Vendors, path: '/eventvendorlist' },
    ];
    const dispatch = useDispatch();
    const { vendor={}, loader=false } = useSelector(({ event }) => event);

    const images = ['https://firebasestorage.googleapis.com/v0/b/weddingblizz-cdf0a.appspot.com/o/venders%2FB6831139-6016-4181-AAAD-B3428470F4F6.jpg?alt=media&token=39860ff2-8db2-43e6-a50f-6c283338fbed']
    return (
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={events.VendorDetail} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {events.VendorDetail}
                </Box>
            </Typography>
            { loader? <Loader style={primaryLoaderStyle} /> :
            <>
                <Grid container justify="center" className={classes.eventInfoV}>
                    <Grid item sm={12} xs={12} md={12} className={classes.crImageV}>
                        <Carousel navButtonsAlwaysInvisible={true} indicators={true} autoPlay={false} timeout={500} animation="slide">
                            {images&&images.map((image,i) => 
                            <img key={Math.random()+'image-vend-detail'+i} src={image} className={classes.eventVendDetailsCRImge} />)}
                        </Carousel>
                    </Grid>
                    <div className={classes.eventVendorDetailTV}>
                    <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                        <Typography noWrap component="div" className={classes.eventInfoTV}>
                            <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                {events.VendorName}
                            </Box>
                            <Box  fontFamily='GothamBook' className={classes.eventInfoIT}>
                                {vendor.business_name}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} md={8} className={classes.eventInfoGV}>
                        <Typography noWrap component="div" className={classes.eventInfoTV}>
                            <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                                {common.Address}
                            </Box>
                            <Box  fontFamily='GothamBook' className={classes.eventInfoIT}>
                                {`${vendor.city} ${vendor.state}, ${vendor.zip_code}`}
                            </Box>
                        </Typography>
                    </Grid>
                    </div>
                </Grid>
            </>
            }
        </Grid>
    )
}