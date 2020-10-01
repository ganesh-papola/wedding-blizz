import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { CheckCircleRounded } from "@material-ui/icons";
import { eventStyle, commonButtonStyle, primaryLoaderStyle } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    venueRoundImage, weddingBandRoundImage, weddingcateringRoundImage, weddinggiftImage,
    transportRoundImage, photographyRoundImage, invitationRoundImage
} from "assets";
import { strings } from 'constant';
import { BreadCrumb, Loader } from "components";
import { fetchCategory } from "actions";
import loader from 'components/common/loader';
const { events, vendors, common } = strings;

export default props => {
    const classes = eventStyle();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const breads = [
        { title: common.Home, path: '/' }
    ];
    
    useEffect(()=>{
        const get = async () => {
            const data = await dispatch(fetchCategory());
            setCategories(data);
        }
        get();
    },[])
    return (
        <Grid container className={classes.eventMain}>
            <BreadCrumb breads={breads} current={common.Category} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {common.Category}
                </Box>
            </Typography>
            <ImagesGrids categories={categories} />
        </Grid>
    )
}

const ImagesGrids = ({categories=[]}) => {
    const classes = eventStyle();
    const [selected, setSelected] = useState(null);
    const { loader=false } = useSelector(({ event }) => event);
    return (
        <Grid container className={classes.categoriesV}>
            
            {loader? <Loader style={primaryLoaderStyle}/> :
            <>
            {categories.map((item, i) =>
                <Grid item sm={12} xs={12} md={3} lg={3} className={classes.allCategoryV} key={item.name + i + '-category-all-cats'}>
                    <div className={classes.allCatRoundImgV} onClick={() => setSelected(i)}>
                        <img src={item.icon} className={selected === i ? classes.allCatSelectedImg : classes.allCatRoundImg} />
                        {selected === i && <CheckCircleRounded className={classes.categoryCheckIcon} />}
                    </div>
                    <Box fontFamily='Gotham' className={`${classes.allCatRoundT}`} onClick={() => setSelected(i)}>
                        {item.name}
                    </Box>
                </Grid>
            )}
            <Grid item sm={6} xs={6} md={6} lg={12} className={classes.categoryButonV}>
                <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                    {common.Submit}
                </Button>
                <Button variant="contained" size="large" style={commonButtonStyle}>
                    {common.Cancel}
                </Button>
            </Grid>
            </>
            }
            
        </Grid>
    )
}
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