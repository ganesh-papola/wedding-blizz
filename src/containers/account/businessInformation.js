import React, { useState } from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle, primaryLoaderStyle, eventStyle } from "styles";
import { useSelector, useDispatch } from "react-redux";
import { TextField, FilePicker, DropDown, Loader, GooglePlaces } from "components";
import { ArrowDropDown } from '@material-ui/icons';
import Menus from './popupMenu';
import BusinessStats from './businessStats';
import { strings, country } from 'constant';
import { addBusiness } from 'actions';
import { validator } from "helpers";
const { account, common, vendors } = strings;

export default (props) => {
    const classes = eventStyle();
    const acclasses = accountStyle();
    const dispatch = useDispatch();
    const { category=[] }= useSelector(({event})=>event);
    const [menu, setMenu] = useState(null);
    const { business = {}, loader=false, _loader=false }= useSelector(({vendor})=>vendor);
    const { email='', business_name='', phone='', city='', zip_code='', address='',tempImages=[], images=[],latitude,longitude } = business?business:{};
    const [state, setState] = useState({
        name:business_name, email, phone, address, city, state : business?.state,
        country:business?.country,zip_code,latitude,longitude, oldImages:images, displayImages:tempImages
    });
    const handleAddress = format => {
        setState({...state, state:format.state,city:format.city,country:format.country,zip_code:format.zip, 
            address:format.address, longitude:format.longitude, latitude:format.latitude })
    }
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const closeMenu = () => {
        setMenu(null);
    };
    const onMenu = (ind) => {
        props.setSelected(ind)
    }
    
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
        setError({...error, [k] : validator(k,v)?'':errors[k]});
    }

    const handlOnfiles=(images=[],old=[],disp=[])=>{
        setState({...state, images, oldImages:old,displayImages:disp });
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
             const {displayImages, ...data } = state;
            const errs = makeErrors();
            if(errs&&errs.filter(er=>!er).length) return
            else dispatch(addBusiness({...data, id:business.id, categories:category&&category.length>0?category.map(it=>it.id):[], business_name : state.name}));
        
    }
    return (
        <div className={acclasses.renderMain}>
            <Box fontFamily='CormorantBold' className={acclasses.renderAcMainHeadT}>
                {account.BusinessInformation}
                <ArrowDropDown className={acclasses.dropIcon} onClick={handleMenuClick} />
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <BusinessStats />
            <div className={acclasses.myBusinessFormV}>
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={vendors.BusinessName} error={error.name} value={state.name} onChange={value=>onChange('name', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Phone} value={state.phone} error={error.phone} onChange={value=>onChange('phone', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={12} lg={12} className={classes.addNewEventFormGV}>
                        <TextField label={common.EmailAddress} value={state.email} error={error.email} onChange={value=>onChange('email', value)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={12} lg={12} className={classes.addNewEventFormGV}>
                        <GooglePlaces label={common.Address} value={state.address} error={error.address} onChange={handleAddress} />
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
                        <FilePicker multiple label={common.Images} value={state.oldImages} displayImages={state.displayImages} onImage={handlOnfiles} />
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6}/>
                    
                    <Grid item sm={6} xs={6} md={6} lg={6} className={classes.addNewEventFormGBtV}>
                        <Button variant="contained" size="large" disabled={_loader} color='primary' style={commonButtonStyle} onClick={onSubmit}>
                            {_loader?<Loader style={primaryLoaderStyle} size={15} />:common.Submit}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle} disabled={_loader} onClick={()=>props.history.push("/")}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};
