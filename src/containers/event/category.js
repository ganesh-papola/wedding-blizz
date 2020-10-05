import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { CheckCircleRounded } from "@material-ui/icons";
import { eventStyle, commonButtonStyle, primaryLoaderStyle } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import { strings } from 'constant';
import { BreadCrumb, Loader, NoRecordFound } from "components";
import { fetchCategory, setCategory } from "actions";
const { events, vendors, common } = strings;

export default props => {
    const classes = eventStyle();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const breads = [
        { title: common.Home, path: '/' },
        { title: events.WeddingEvent, path: '/eventdetail' },
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
            <ImagesGrids categories={categories} history={props.history}/>
        </Grid>
    )
}

const ImagesGrids = ({categories=[], history}) => {
    const classes = eventStyle();
    const [selected, setSelected] = useState(-1);
    const { loader=false } = useSelector(({ event }) => event);
    const dispatch = useDispatch();
    const onSubmit = ()=>{
        if(selected >=0 ){
           dispatch(setCategory(categories[selected]));
           history.push('/eventvendorlist') 
        }
    }
    return (
        <Grid container className={classes.categoriesV}>
            {loader? <Loader style={primaryLoaderStyle}/> :
            <>
            { categories && categories.length ? categories.map((item, i) =>
                <Grid item sm={12} xs={12} md={3} lg={3} className={classes.allCategoryV} key={item.name + i + '-category-all-cats'}>
                    <div className={classes.allCatRoundImgV} onClick={() => setSelected(i)}>
                        <img src={item.icon} className={selected === i ? classes.allCatSelectedImg : classes.allCatRoundImg} />
                        {selected === i && <CheckCircleRounded className={classes.categoryCheckIcon} />}
                    </div>
                    <Box fontFamily='Gotham' className={`${classes.allCatRoundT}`} onClick={() => setSelected(i)}>
                        {item.name}
                    </Box>
                </Grid>
            ) : 
            <NoRecordFound />
        }
            <Grid item sm={6} xs={6} md={6} lg={12} className={classes.categoryButonV}>
                <Button variant="contained" size="large" color='primary' style={commonButtonStyle} onClick={onSubmit}>
                    {common.Submit}
                </Button>
                <Button variant="contained" size="large" style={commonButtonStyle} onClick={history.goBack}>
                    {common.Cancel}
                </Button>
            </Grid>
            </>
            }
        </Grid>
    )
}