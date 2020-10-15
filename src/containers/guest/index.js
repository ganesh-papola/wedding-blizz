import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Grid, Box, Button, Dialog, Typography } from '@material-ui/core'
import { CheckBoxOutlineBlank, CheckBox, MoreHoriz } from '@material-ui/icons'
import { giftStyle, guestStyle, commonStyle, clearIconStyle, authModalStyle, whiteLoaderStyle } from 'styles';
import { strings } from 'constant';
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { TextField, Loader, NoRecordFound } from "components";
import { addGroup, fetchGroupGuests } from "actions";
const { guest, common } = strings;

export default props => {
    const classes = giftStyle(); // copying similar style
    const guestClass = guestStyle();
    const { guests = [], loader=false } = useSelector(({ guest }) => guest);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);
    const [group, setGroup] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(()=>{
        dispatch(fetchGroupGuests())
    },[])
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
    const handleGroup = () => {
        setGroup(true)
    }
    return (
        <Grid container className={guestClass.guestMain}>
            <div className={guestClass.headV}>
                <Box fontFamily='CormorantBold' className={guestClass.giftHeadingT}>
                    {guest.GuestList}
                </Box>
                <div className={guestClass.addButtonV}>
                    <Button onClick={handleGroup} variant="outlined" size="large" color='primary'>
                        {guest.AddNGroup}
                    </Button>
                    <div className={guestClass.spaceH20} />
                    <Button onClick={() => props.history.push('/addguest')} variant="outlined" size="large" color='primary'>
                        {guest.AddGuestList}
                    </Button>
                </div>
                <div className={guestClass.addButtonMenuV}>
                    <MoreHoriz onClick={handleMenuClick} />
                </div>
                <Menu
                    id="guest-simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => { handleClose(); props.history.push('/addguest') }}>{guest.AddNGroup}</MenuItem>
                    <MenuItem onClick={() => { handleClose(); props.history.push('/addguest') }}>{guest.AddGuestList}</MenuItem>
                </Menu>
            </div>
            <div className={classes.giftListV}>
                {loader?<Loader/>:<Grid container >
                    {guests&&guests.length?guests.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxGuestWrapper} key={Math.random() + item.label + 'guest-list'}>
                            <div className={guestClass.listV}>
                                <Box fontFamily='Gotham' className={guestClass.listHT}>
                                    {item.label}
                                </Box>
                                {
                                    item.guests && item.guests.length ? item.guests.map(guest => (
                                        <div className={guestClass.guestListV} onClick={() => makeCheck(guest, !guest.check)}>
                                            {guest.check ? <CheckBox /> : <CheckBoxOutlineBlank />}
                                            <Box fontFamily='GothamBook' className={guestClass.guestNameT}>
                                                {guest.name}
                                            </Box>
                                        </div>
                                    )) : null
                                }
                            </div>
                        </Grid>
                    )) : <NoRecordFound/>
                    }
                </Grid>}
            </div>
            {group && <GroupModal group={group} setGroup={setGroup} />}
        </Grid>
    )
}
const GroupModal = ({ setGroup, group }) => {
    const classes = authModalStyle();
    const { loader = false } = useSelector(({ guest }) => guest);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const onAddGroup = () => {
        if (name)
            dispatch(addGroup({ name }));
        setTimeout(() => {
            onClose();
        }, 1000);
    }
    const onClose = () => {
        setGroup(false);
    }
    return (
        <Dialog open={group} onClose={onClose} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={onClose} />
                </div>
                <Typography component={'span'} className={classes.headingV}>
                    <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{guest.AddGroup}</Box>
                </Typography>
                <div className={classes.guestModalView}>
                    <TextField
                        label={guest.GroupName}
                        value={name}
                        maxLength={200}
                        onChange={value => setName(value)}
                    />
                    <div className={classes.buttonV}>
                        <Button onClick={onAddGroup} variant="contained" size="large" color='primary' className={classes.button}>
                            {loader ? <Loader style={whiteLoaderStyle} size={15} /> : common.Submit}
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}