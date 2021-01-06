import React, { useState, useCallback,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle, primaryLoaderStyle } from 'styles';
import { TextField, DropDown, PhoneInput, FilePicker, BreadCrumb, Loader, GooglePlaces } from "components";
import { strings, country } from 'constant';
import { addBusiness, fetchVendorBusiness } from 'actions';
import { validator } from "helpers";
const { events, common, vendors } = strings;

const initialState = {
    name : '',
    email : '', phone : '', address : '',
    city : '',
    state : '',
    country : '',
    zip_code : '',
    images:[],
    latitude:'',
    longitude:''
}
export default props => {
    const classes = eventStyle();
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const { loader=false, _loader=false }= useSelector(({vendor})=>vendor);
    const { category=[] }= useSelector(({event})=>event);
    const { user:{type} }= useSelector(({user})=>user);
    const breads = [
        { title : common.Home, path : '/' },
        { title : common.Category, path : '/category' },
    ];
    const [error, setError] = useState({
        name : '',
        email:'',
        city : '',
        state : '',
        phone : '',
        zip_code : '',
        country : '',
        address : ''
    });
    const errors = {
        name : strings.errors.guestName,
        email : strings.errors.email,
        city : strings.errors.city,
        state : strings.errors.state,
        country : strings.errors.country,
        phone : strings.errors.phone,
        zip_code : strings.errors.zip,
        address : strings.errors.address
    }
    const onChange = (k,v) => {
        setState({...state,[k]:v})
        setError({...error, [k] : validator(k,v)?'':errors[k]})
    }
    const makeErrors = () => {
        let err = {}
        const er = Object.keys(errors).map(key=>{
            const status = validator(key,state[key]);
            err = {...err, [key]:status?'':errors[key]}
            return status;
        })
        setError({...error, ...err});
        return er;
    }
    const onSubmit = () => {
            const errs = makeErrors();
            if(errs&&errs.filter(er=>!er).length) return
            else dispatch(addBusiness({...state, categories:category&&category.length>0?category.map(it=>it.id):[], business_name : state.name}));
        
    }
    useEffect(()=>{
        const get = async () =>{
            if(type===3){
                const business = await dispatch(fetchVendorBusiness());
                console.log("business business ", business);
                if(business&&business.name&&business.id) props.history.push('/vendor');
            }else {
                return props.history.push('/event')
            }
        }
        get();
    },[type])
    const handleAddress = format => {
        setState({...state, state:format.state,city:format.city,country:format.country,zip_code:format.zip, 
            address:format.address, longitude:format.longitude, latitude:format.latitude })
    }
    
    return (
        <Grid container className={classes.eventMain}>
            <BreadCrumb breads={breads} current={vendors.CreateBusiness} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {vendors.CreateBusiness}
                </Box>
            </Typography>
            {loader ? <Loader /> :
            <div className={classes.addNewEventFormV}>
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={vendors.BusinessName} error={error.name} value={state.name} onChange={value=>onChange('name', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <PhoneInput label={common.Phone} value={state.phone} error={error.phone} onChange={value=>onChange('phone', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={12} lg={12} className={classes.addNewEventFormGV}>
                        <TextField label={common.EmailAddress} value={state.email} error={error.email} onChange={value=>onChange('email', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={12} lg={12} className={classes.addNewEventFormGV}>
                        <GooglePlaces label={common.Address} error={error.address} onChange={handleAddress} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City} value={state.city} error={error.city} onChange={value=>onChange('city', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.State} value={state.state} error={error.state} onChange={value=>onChange('state', value)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown data={country} label={common.Country} error={error.country} value={state.country} onChange={value=>onChange('country', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} value={state.zip_code} error={error.zip_code} onChange={value=>onChange('zip_code', value)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <FilePicker multiple label={common.Images} onImage={value=>onChange('images', value)} />
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6}/>
                    
                    <Grid item sm={6} xs={6} md={6} lg={6} className={classes.addNewEventFormGBtV}>
                        <Button variant="contained" disabled={_loader} size="large" color='primary' style={commonButtonStyle} onClick={onSubmit}>
                            {_loader?<Loader style={primaryLoaderStyle} size={15} />:common.Submit}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle} disabled={_loader} onClick={()=>props.history.push("/")}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </div>}
        </Grid>
    )
}