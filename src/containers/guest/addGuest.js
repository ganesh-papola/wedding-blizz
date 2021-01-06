import React,{ useEffect, useState } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle } from 'styles';
import { TextField, DropDown, Loader, GooglePlaces, PhoneInput } from "components";
import { strings, country } from 'constant';
import { useDispatch, useSelector } from "react-redux";
import { fetchGuestGroups, addGuest } from "actions";
import { validator } from "helpers"
const { guest, common } = strings;

export default props => {
    const classes = eventStyle();
    const dispatch = useDispatch();
    const {location={}} = props.history;
    let edit = {};
    if(location.state&&location.state.id){
        const {name='', email='', city='', groupId='', country='', address='', zip_code='', phone='', id=''} = location.state?location.state:{};
        edit = {name, phone, email, groupId, city, state:location.state.state, country, address, zip_code, id};
    }
    const [state, setState] = useState({
        name : edit.name,
        email:edit.email,
        city : edit.city,
        state : edit.state,
        phone : edit.phone,
        zip_code : edit.zip_code,
        country : edit.country,
        address : edit.address,
        groupId : edit.groupId
    });
    const [error, setError] = useState({
        name : '',
        email:'',
        city : '',
        state : '',
        phone : '',
        zip_code : '',
        country : '',
        address : '',
        groupId:''
    });
    const errors = {
        name : strings.errors.guestName,
        email : strings.errors.email,
        city : strings.errors.city,
        state : strings.errors.state,
        country : strings.errors.country,
        phone : strings.errors.phone,
        zip_code : strings.errors.zip,
        address : strings.errors.address,
        groupId : strings.errors.guestGroup
    }
    const { guests = [], _loader=false, loader=false } = useSelector(({ guest }) => guest);

    const onChange = (k,v) => {
        setState({...state,[k]:v})
        setError({...error, [k] : validator(k,v)?'':errors[k]})
    }
    const makeErrors = () => {
        let err = {}
        const er = Object.keys(state).map(key=>{
            const status = validator(key,state[key]);
            err = {...err, [key]:status?'':errors[key]}
            return status;
        })
        setError({...error, ...err});
        return er;
    }
    const onSubmit = () => {
        const errs = makeErrors();
        if(errs&&errs.filter(er=>!er).length)
            return
        else dispatch(addGuest(state, edit?.id))
    }
    const handleAddress = format => {
        let raw = {state:format.state,city:format.city,country:format.country,zip_code:format.zip, 
            address:format.address};
        setState({...state, ...raw });
        const err = handleAddressErrs(format,raw);
        setError({...error,...err})
    }
    const handleAddressErrs = (format,raw) =>{
        let err = {};
        ['state','city','country','zip_code','address'].forEach(k=>{
            err = {...err,[k]: validator(k,raw[k])?'':errors[k]}
        });
        return err;
    }
    return (
        <Grid container className={classes.eventMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {guest.AddNGuest}
                </Box>
            </Typography>
            {_loader?<Loader />:
            <form className={classes.addNewEventFormV} noValidate autoComplete="off">
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={guest.GuestName} error={error.name} value={state.name} onChange={v=>onChange('name',v)} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={guest.SelectGroup} data={guests} value={state.groupId} error={error.groupId} onChange={v=>onChange('groupId',v)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <PhoneInput label={common.PhoneNumber} error={error.phone} value={state.phone} onChange={v=>onChange('phone',v)} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.EmailAddress} error={error.email} value={state.email} onChange={v=>onChange('email',v)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={12} lg={12} className={classes.addNewEventFormGV}>
                        {/* <TextField label={common.Address} error={error.address} value={state.address} onChange={v=>onChange('address',v)}/> */}
                        <GooglePlaces label={common.Address} error={error.address} value={state.address} onChange={handleAddress} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City} error={error.city} value={state.city} onChange={v=>onChange('city',v)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.State} error={error.state} value={state.state} onChange={v=>onChange('state',v)}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.Country} data={country} value={state.country} error={error.country} onChange={v=>onChange('country',v)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} error={error.zip_code} value={state.zip_code} onChange={v=>onChange('zip_code',v)}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}/>

                    <Grid item sm={6} xs={6} md={6} lg={6} className={classes.addNewEventFormGBtV}>
                        <Button disabled={loader} onClick={onSubmit} variant="contained" size="large" color='primary' style={commonButtonStyle}>
                            {loader?<Loader/>:common.Submit}
                        </Button>
                        <Button disabled={loader} variant="contained" size="large" style={commonButtonStyle} onClick={()=>props.history.goBack()}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </form> }
        </Grid>
    )
}