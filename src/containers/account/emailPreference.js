import React from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle } from "styles";
import { useSelector } from "react-redux";
import { TextField, TextArea, DropDown } from "components";
import { strings } from 'constant';

const { account, common } = strings;

export default () => {
    const classes = accountStyle();
    const { user={} } = useSelector(({user}) => user);
    const { firstname='Moses', lastname=' Chikodinaka', email=' moses.chikodinaka@gmail.com',
            address='63, Adekunle Fajuyi, Suite No. 123, Delta Apartment, G.R.A',
        city='Ikeja', state='Lagos',  zip='542684', phone='1234567890' } = user;
    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.EmailPreferences}
            </Box>
        </div>
    )
}