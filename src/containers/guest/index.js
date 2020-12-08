import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Grid, Box, Button, Dialog, Typography } from '@material-ui/core'
import { CheckBoxOutlineBlank, CheckBox, MoreHoriz, DeleteOutlined, Create } from '@material-ui/icons'
import {
    giftStyle, guestStyle, mainBorderDtBotton, clearIconStyle, authModalStyle, whiteLoaderStyle,
    mainBorderDelBotton, groupCheck, guestCheck, groupDelete, groupEditIcon, flex1
} from 'styles';
import { strings } from 'constant';
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { TextField, Loader, NoRecordFound, Confirm } from "components";
import { addGroup, fetchGroupGuests, createAlert, inviteGuests, deleteGroup, deleteGuest } from "actions";
const { guest, common, errors } = strings;

export default props => {
    const classes = giftStyle(); // copying similar style
    const guestClass = guestStyle();
    const { guests = [], loader = false, dloader = false } = useSelector(({ guest }) => guest);
    const { event={} } = useSelector(({ event }) => event);
    const dispatch = useDispatch();
    const [group, setGroup] = useState(false);
    const [update, setUpdate] = useState(false);
    const [delType, setDelType] = useState(null);
    const [delId, setDelId] = useState(null);
    const [groupEdit, setGroupEdit] = useState({});
    const [checks, setChecks] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [groupEl, setAnchorGroup] = useState(null);
    const [delDiag, setDelDiag] = useState(false);
    useEffect(() => {
        dispatch(fetchGroupGuests())
    }, [])
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorGroup(null);
    };
    const makeCheck = (item, value) => {
        item.check = value;
        if (value) {
            setChecks([...checks, { email: item.email, name: item.name, id: item.id, groupId: item.groupId }])
        } else {
            setChecks(checks && checks.length ? checks.filter(c => c.id !== item.id) : [])
        }
    }
    const handleGroupEdit = (id, name) => {
        console.log("edit ");
        setGroupEdit({ id, name });
        setGroup(true)
    }
    const handleGroupDelete = () => {
        console.log("delete group ");
        if(delType&&delType==='group')
        dispatch(deleteGroup(delId))
        else dispatch(deleteGuest(delId))
    }
    const handleGroup = () => {
        setGroupEdit(null)
        setGroup(true)
    }
    const onInvite = () => {
        console.log('checks checks ', checks)
        dispatch(inviteGuests(checks.map(em=>em.id)))
    }
    const handleChecks = (item, flag) => {
        item.guests = item.guests.map(it => ({ ...it, check: flag }));
        if (flag)
            setChecks(item.guests.map(item => ({ email: item.email, name: item.name, id: item.id, groupId: item.groupId })));
        else setChecks([])
        setTimeout(() => {
            setUpdate(!update);
        }, 150);
    }
    const handleAddGuest = () => {
        let count = 0;
        if (guests && guests.length){
            if(event&&event.guest_count)
            guests.forEach(g=>count+=g.guests.length);
            if(count<event.guest_count)
            props.history.push('/addguest');
            else dispatch(createAlert({ message: errors.MaxGuestCountExceed, type: 'warning' }));
        }
        else dispatch(createAlert({ message: errors.NoGroupAdded, type: 'warning' }));
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
                    <Button onClick={handleAddGuest} variant="outlined" size="large" color='primary'>
                        {guest.AddGuestList}
                    </Button>
                </div>
                <div className={guestClass.addButtonMenuV}>
                    <MoreHoriz id={'guest-group-add-menu-icon'} onClick={handleMenuClick} aria-owns={Boolean(anchorEl) ? 'guest-group-add-menu-icon' : null} />
                </div>
                <Menu
                    id="guest-group-add-menu-icon"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleGroup}>{guest.AddNGroup}</MenuItem>
                    <MenuItem onClick={() => { handleClose(); handleAddGuest(); }}>{guest.AddGuestList}</MenuItem>
                    <MenuItem onClick={handleClose}>{common.Close}</MenuItem>
                </Menu>
            </div>
            <div className={classes.giftListV}>
                {loader ? <div className={guestClass.loaderV}> <Loader /> </div> : <Grid container >
                    {guests && guests.length ? guests.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxGuestWrapper} key={Math.random() + item.label + 'guest-list'}>
                            <div className={guestClass.listV}>
                                <Box fontFamily='Gotham' className={guestClass.listHT}>
                                    {item.guests && item.guests.length !== 0 ? item.guests.filter(f => !f.check).length === 0 ?
                                        <CheckBox style={groupCheck} onClick={() => handleChecks(item, false)} /> :
                                        <CheckBoxOutlineBlank style={groupCheck} onClick={() => handleChecks(item, true)} /> : null}
                                    {item.label}
                                    <div className={guestClass.groupActionIconsV}>
                                        <DeleteOutlined style={groupDelete} onClick={() => { setDelId(item.value); setDelType('group'); setDelDiag(true) }} />
                                        <Create style={groupEditIcon} onClick={() => handleGroupEdit(item.value, item.label)} />
                                    </div>
                                </Box>
                                {
                                    item.guests && item.guests.length ? item.guests.map(guest => (
                                        <div className={guestClass.guestListV}>
                                            {guest.check ? <CheckBox style={guestCheck} onClick={() => makeCheck(guest, !guest.check)}/> : <CheckBoxOutlineBlank style={guestCheck} onClick={() => makeCheck(guest, !guest.check)}/>}
                                            <Box fontFamily='GothamBook' className={guestClass.guestNameT}>
                                                <p onClick={() => makeCheck(guest, !guest.check)}>{guest.name}</p>
                                                <div style={flex1} />
                                                <div className={guestClass.groupActionIconsV}>
                                                    <DeleteOutlined style={groupDelete} onClick={() => { setDelId(guest.id); setDelType('guest'); setDelDiag(true) }} />
                                                    <Create style={groupEditIcon} onClick={() => props.history.push({pathname:'/addguest', state : guest})} />
                                                </div>
                                            </Box>
                                        </div>
                                    )) : null
                                }
                            </div>
                        </Grid>
                    )) : <NoRecordFound />
                    }
                </Grid>}
            </div>
            <div className={guestClass.guestInviteButtonV}>
                {checks && checks.length ?
                    <div className={guestClass.guestActionButtonsV}>
                        <Button onClick={onInvite} variant="contained" size="large" style={mainBorderDtBotton} >
                            {common.Invite}
                        </Button>
                        {/* {checks.length===1?<Button onClick={onInvite} variant="contained" size="large" style={mainBorderDtBotton} >
                    {common.Edit}
                </Button> : null} */}
                        {/* <Button onClick={onInvite} variant="contained" size="large" style={mainBorderDelBotton} >
                            {common.Delete}
                        </Button> */}
                    </div> :
                    null}
            </div>
            {group && <GroupModal group={group} setGroup={setGroup} edit={groupEdit} />}
            <Confirm open={delDiag} onClose={() => setDelDiag(false)} title={delType==='group'?guest.DeleteGroup:guest.DeleteGuest}
                content={delType==='group'?guest.DeleteGroupContent:guest.DeleteGuestContent} onClick={handleGroupDelete} button={common.Delete} loader={dloader} />
        </Grid>
    )
}
const GroupModal = ({ setGroup, group, edit = {} }) => {
    const classes = authModalStyle();
    const { loader = false, guests = [] } = useSelector(({ guest }) => guest);
    const [name, setName] = useState(edit && edit.name ? edit.name : '');
    const dispatch = useDispatch();
    // if(edit&&edit.name)

    const onAddGroup = () => {
        if (name) {
            if (guests && guests.map(group => group.label && group.label.trim()).indexOf(name && name.trim()) > -1) {
                onClose();
                return dispatch(createAlert({ message: errors.nameExist, type: 'error' }))
            }
            dispatch(addGroup({ name, id: edit && edit.id }));
        }
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