import React, { useState } from 'react';
import { Menu, MenuItem, Grid, Box, Button } from '@material-ui/core'
import { CheckBoxOutlineBlank, CheckBox, MoreHoriz } from '@material-ui/icons'
import { giftStyle, guestStyle, commonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from "react-redux";

const { guest, common } = strings;

let dummy = [
    {
        group: 'Family Group List', guests: [
            { check: false, name: 'Michael Clerk' },
            { check: false, name: 'Misterio' },
            { check: false, name: ' Maria James' },
            { check: false, name: 'Joe Root Ray' },
        ]
    },
    {
        group: 'Friends Group List', guests: [
            { check: false, name: 'Michael Clerk' },
            { check: false, name: 'Misterio' },
            { check: false, name: ' Maria James' },
            { check: false, name: 'Joe Root Ray' },
        ]
    },
    {
        group: 'Office Group List', guests: [
            { check: false, name: 'Michael Clerk' },
            { check: false, name: 'Misterio' },
            { check: false, name: ' Maria James' },
            { check: false, name: 'Joe Root Ray' },
        ]
    },
    {
        group: 'Business Group List', guests: [
            { check: false, name: 'Michael Clerk' },
            { check: false, name: 'Misterio' },
            { check: false, name: ' Maria James' },
            { check: false, name: 'Joe Root Ray' },
        ]
    },
    {
        group: 'In-Laws List', guests: [
            { check: false, name: 'Michael Clerk' },
            { check: false, name: 'Misterio' },
            { check: false, name: ' Maria James' },
            { check: false, name: 'Joe Root Ray' },
        ]
    },
]
export default props => {
    const classes = giftStyle(); // copying similar style
    const guestClass = guestStyle();
    const comclasses = commonStyle();
    const { guests = dummy } = useSelector(({ guest }) => guest);
    const [flag, setFlag] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const makeCheck = (item, value) => {
        item.check = value;
        setFlag(!flag)
    }
    return (
        <Grid container className={guestClass.guestMain}>
            <div className={guestClass.headV}>
                <Box fontFamily='CormorantBold' className={guestClass.giftHeadingT}>
                    {guest.GuestList}
                </Box>
                <div className={guestClass.addButtonV}>
                    <Button onClick={() => alert("n progress ...")} variant="outlined" size="large" color='primary'>
                        {guest.AddNGroup}
                    </Button>
                    <div className={guestClass.spaceH20} />
                    <Button onClick={() => alert("n progress ...")} variant="outlined" size="large" color='primary'>
                        {guest.AddGuestList}
                    </Button>
                </div>
                <div className={guestClass.addButtonMenuV}>
                    <MoreHoriz onClick={handleMenuClick}/>
                </div>
                <Menu
                    id="guest-simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>{guest.AddNGroup}</MenuItem>
                    <MenuItem onClick={handleClose}>{guest.AddGuestList}</MenuItem>
                </Menu>
            </div>
            <div className={classes.giftListV}>
                <Grid container >
                    {dummy.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxWrapper} key={Math.random() + item.group + 'guest-list'}>
                            <div className={guestClass.listV}>
                                <Box fontFamily='Gotham' className={guestClass.listHT}>
                                    {item.group}
                                </Box>
                                {
                                    item.guests && item.guests.map(guest => (
                                        <div className={guestClass.guestListV} onClick={() => makeCheck(guest, !item.check)}>
                                            {guest.check ? <CheckBox /> : <CheckBoxOutlineBlank />}
                                            <Box fontFamily='GothamBook' className={guestClass.guestNameT}>
                                                {guest.name}
                                            </Box>
                                        </div>
                                    ))
                                }
                            </div>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
        </Grid>
    )
}