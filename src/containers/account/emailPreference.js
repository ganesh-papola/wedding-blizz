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
    const { user = {} } = useSelector(({ user }) => user);
    const [menu, setMenu] = React.useState(null);
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const closeMenu = () => {
        setMenu(null);
    };
    const onMenu = (ind) => {
        props.setSelected(ind)
    }
    const { firstname = 'Moses', lastname = ' Chikodinaka', email = ' moses.chikodinaka@gmail.com',
        address = '63, Adekunle Fajuyi, Suite No. 123, Delta Apartment, G.R.A',
        city = 'Ikeja', state = 'Lagos', zip = '542684', phone = '1234567890' } = user;
    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.EmailPreferences}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick} />
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <Grid item sm={12} xs={12} md={12} lg={6} className={classes.buttonsV}>
                <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                    {common.Update}
                </Button>
                <Button variant="contained" size="large" style={commonButtonStyle}>
                    {common.Cancel}
                </Button>
            </Grid>
        </div>
    )
}