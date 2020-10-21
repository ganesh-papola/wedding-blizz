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
    const { user:{type} } = useSelector(({user})=>user);
    const params = props.history?.location?.state;
    const breads = type===3 ? [
            { title: common.Home, path: '/' },
            { title: strings.vendors.VendorBusiness, path: '/vendor' },
        ]:[
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
            <ImagesGrids categories={categories} history={props.history} multi={params?.multi}/>
        </Grid>
    )
}

const ImagesGrids = ({categories=[], history, multi=false}) => {
    const classes = eventStyle();
    const [selected, setSelected] = useState([]);
    const { user:{type} }= useSelector(({user})=>user);
    const { loader=false } = useSelector(({ event }) => event);
    const dispatch = useDispatch();
    const onSubmit = ()=>{
        if(selected&&selected.length){
           dispatch(setCategory(multi||type===3?selected:selected[0]));
           history.push(type===3?'/addvendorbusiness':'/eventvendorlist') 
        }
    }
    const handleSelection = (i,item) => {
        if(multi||type===3){
            const selects = selected&&selected.map(sel=>sel.id).includes(item.id)?selected.filter(f=>f.id!==item.id) : 
                             [...selected, item];
            setSelected(selects);
        } else
        setSelected([item])
    }
    return (
        <Grid container className={classes.categoriesV}>
            {loader? <Loader style={primaryLoaderStyle}/> :
            <>
            { categories && categories.length ? categories.map((item, i) =>
                <Grid item sm={12} xs={12} md={3} lg={3} className={classes.allCategoryV} key={item.name + i + '-category-all-cats'}>
                    <div className={classes.allCatRoundImgV} onClick={() => handleSelection(i, item)}>
                        <img src={item.icon} className={ selected&&selected.length&&selected.map(s=>s.id).includes(item.id) ? classes.allCatSelectedImg : classes.allCatRoundImg} />
                        {selected&&selected.length&&selected.map(s=>s.id).includes(item.id) ? <CheckCircleRounded className={classes.categoryCheckIcon} /> : null }
                    </div>
                    <Box fontFamily='Gotham' className={`${classes.allCatRoundT}`} onClick={() => handleSelection(i, item)}>
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