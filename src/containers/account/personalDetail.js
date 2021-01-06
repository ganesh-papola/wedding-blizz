import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle } from "styles";
import { useSelector, useDispatch } from "react-redux";
import { TextField, PhoneInput, DropDown, Loader } from "components";
import { strings, country } from 'constant';
import { ArrowDropDown } from '@material-ui/icons';
import { validator } from "helpers";
import Menus from './popupMenu';
import { updateUser } from "actions";

const { account, common } = strings;
export default (props) => {
    const classes = accountStyle();
    const dispatch = useDispatch();
    const { user = {}, xloader=false } = useSelector(({ user }) => user);
    const [menu, setMenu] = useState(null);
    const { name='', email = '', address = '', city = '', zip_code = '', phone = '' } = user;
    const [state, setState] = useState({
        name,
        phone,
        email,
        address,
        city,
        state:user.state,
        country:user.country,
        zip_code
    });
    const [error, setError] = useState({
        name : '',
        city : '',
        state : '',
        phone : '',
        zip_code : '',
        country : '',
        address : ''
    });
    const errors = {
        name : strings.errors.fullname,
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
        else {
            const {email,...data} = state
            dispatch(updateUser({...data, displayName:data.name}));
        }
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
    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.PersonalDetails}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick} />
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <Grid container >
                <Grid item sm={12} xs={12} md={12} lg={12} className={classes.personalDetailTV} >
                    <TextField label={common.Name} error={error.name} onChange={v=>onChange('name',v)} value={state.name} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.EmailAddress} value={state.email} disabled />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <PhoneInput label={common.Phone} error={error.phone} onChange={v=>onChange('phone',v)} value={state.phone} />
                </Grid>

                <Grid item sm={12} xs={12} className={classes.personalDetailTV}>
                    <TextField label={common.Address} error={error.address} onChange={v=>onChange('address',v)} value={state.address} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.City} error={error.city} onChange={v=>onChange('city',v)} value={state.city} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.State} error={error.state} onChange={v=>onChange('state',v)} value={state.state}  />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <DropDown label={common.Country} data={country} error={error.country} onChange={v=>onChange('country',v)} value={state.country} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.Zipcode} error={error.zip_code} onChange={v=>onChange('zip_code',v)} value={state.zip_code} />
                </Grid>
                <Grid item sm={12} xs={12} md={12} lg={6} className={classes.buttonsV}>
                    <Button variant="contained" size="large" color='primary' style={commonButtonStyle} onClick={onSubmit}>
                        {xloader ? <Loader /> : common.Update }
                    </Button>
                    {/* <Button variant="contained" size="large" style={commonButtonStyle}>
                        {common.Cancel}
                    </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}