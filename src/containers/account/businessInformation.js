import React, { useState } from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle } from "styles";
import { useSelector } from "react-redux";
import { TextField, FilePicker, DropDown } from "components";
import { strings } from 'constant';
import { ArrowDropDown } from '@material-ui/icons';
import Menus from './popupMenu';
import BusinessStats from './businessStats';

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
    const { email = 'chika.chimamanda@gmail.com', business = 'Moses', phone = '1234567890', city = 'Ikeja',
        zip = '542684', address = '63, Adekunle Fajuyi, Suite No. 123, G.R.A' } = user;

    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.BusinessInformation}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick} />
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <BusinessStats />
            <Grid container >
                <Grid item sm={12} xs={12} md={10} lg={10} xl={10} className={classes.accountManageV} />
                <div className={classes.spaceV20} />
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV} >
                    <TextField label={account.BusinessName} value={business} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.EmailAddress} value={email} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.Phone} value={phone} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <TextField label={common.Address} value={address} />
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
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.personalDetailTV}>
                    <FilePicker label={common.Images} onImage={images => { }} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} />
                {/* <Grid item sm={12} xs={12} md={6} lg={6} >
                </Grid> */}
                <Grid item sm={12} xs={12} md={12} lg={6} className={classes.buttonsV}>
                    <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                        {common.Update}
                    </Button>
                    <Button variant="contained" size="large" style={commonButtonStyle}>
                        {common.Cancel}
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
};
