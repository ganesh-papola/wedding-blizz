import React, { useState } from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle } from "styles";
import { useSelector } from "react-redux";
import { TextField, TextArea, DropDown } from "components";
import { strings } from 'constant';
import { ArrowDropDown } from '@material-ui/icons';
import Menus from './popupMenu';

const { account, common } = strings;

export default (props) => {
    const classes = accountStyle();
    const { user={} } = useSelector(({user}) => user);
    const [menu, setMenu] = React.useState(null);
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const closeMenu = () => {
        setMenu(null);
    };
    const onMenu = (ind) =>{
        props.setSelected(ind)
    }
    const { firstname='Moses', lastname=' Chikodinaka', email=' moses.chikodinaka@gmail.com',
            address='63, Adekunle Fajuyi, Suite No. 123, Delta Apartment, G.R.A',
        city='Ikeja', state='Lagos',  zip='542684', phone='1234567890' } = user;
    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.PersonalDetails}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick}/>
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <Grid container >
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV} >
                    <TextField label={common.FirstName} value={firstname} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.LastName} value={lastname} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.EmailAddress} value={email} disabled />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.Phone} />
                </Grid>

                <Grid item sm={12} xs={12} className={classes.personalDetailTV}>
                    <TextArea label={common.Address} value={address} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.City} value={city} />
                </Grid>
                
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <DropDown label={common.State} />
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <DropDown label={common.Country} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.Zipcode} value={zip} />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={6} >
                        <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                            {common.Update}
                        </Button>
                        <Button variant="contained" size="large" style={commonButtonStyle}>
                            {common.Cancel}
                        </Button>
                    </Grid>

            </Grid>
        </div>
    )
}