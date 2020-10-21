import React, { useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { eventStyle } from 'styles';
import { plusIcon } from "assets";
import { strings } from 'constant';
import { BreadCrumb, Loader } from "components";
import { fetchVendorBusiness } from "actions";
import { notification } from "helpers";
const { vendors, common } = strings;

export default props => {
    const classes = eventStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ];
    const dispatch = useDispatch();
    const { loader=false }= useSelector(({event})=>event);
    const { user:{type,uid}, fcm }= useSelector(({user})=>user);
    useEffect(()=>{
        const get = async () =>{
            if(type===3){
            const business = await dispatch(fetchVendorBusiness());
            if(business&&business.business_name&&business.id) props.history.push('/businessdetails');
            }else props.history.push('/event')
        }
        get();
        if(!fcm || fcm===[])
            notification(uid)
    },[type])
    return (
        <Grid container className={classes.eventMain}>
            <BreadCrumb breads={breads} current={vendors.VendorBusiness} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {vendors.VendorBusiness}
                </Box>
            </Typography>
            <div className={classes.addNewEventV}>
                {loader? <Loader />
                :<Box fontFamily='CormorantBold' className={classes.addNewEventBox} onClick={()=>props.history.push({pathname:'/category', state : {next : '/addbusiness', multi : true}})}>
                    <img src={plusIcon} className={classes.plusIcon}/>
                    {vendors.CreateBusiness}
                </Box>}
            </div>
        </Grid>
    )
}