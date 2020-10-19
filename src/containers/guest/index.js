import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Grid, Box, Button, Dialog, Typography } from '@material-ui/core'
import { CheckBoxOutlineBlank, CheckBox, MoreHoriz, DeleteOutlined, Create } from '@material-ui/icons'
import { giftStyle, guestStyle, mainBorderDtBotton, clearIconStyle, authModalStyle, whiteLoaderStyle, groupCheck, guestCheck } from 'styles';
import { strings } from 'constant';
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { TextField, Loader, NoRecordFound, Confirm } from "components";
import { addGroup, fetchGroupGuests, createAlert, inviteGuests } from "actions";
const { guest, common, errors } = strings;

export default props => {
    const classes = giftStyle(); // copying similar style
    const guestClass = guestStyle();
    const { guests = [], loader = false } = useSelector(({ guest }) => guest);
    const dispatch = useDispatch();
    const [group, setGroup] = useState(false);
    const [update, setUpdate] = useState(false);
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
    const handleGroupEdit = (id,name) => {
        console.log("edit ");
        setGroupEdit({id,name});
        setGroup(true)
    }
    const handleGroupDelete = (id) => {
        console.log("delete group ")
    }
    const handleGroup = () => {
        setGroup(true)
    }
    const onInvite = () => {
        dispatch(inviteGuests(checks))
    }
    const handleChecks = (item,flag) => {
        item.guests = item.guests.map(it=>({...it, check:flag}));
        setTimeout(() => {
            setUpdate(!update);
        }, 150);
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
                    <MoreHoriz id={'guest-group-add-menu-icon'} onClick={handleMenuClick} aria-owns={Boolean(anchorEl) ? 'guest-group-add-menu-icon' : null}/>
                </div>
                <Menu
                    id="guest-group-add-menu-icon"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleGroup}>{guest.AddNGroup}</MenuItem>
                    <MenuItem onClick={() => { handleClose(); props.history.push('/addguest') }}>{guest.AddGuestList}</MenuItem>
                    <MenuItem onClick={handleClose}>{common.Close}</MenuItem>
                </Menu>
            </div>
            <div className={classes.giftListV}>
                {loader ? <Loader /> : <Grid container >
                    {guests && guests.length ? guests.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxGuestWrapper} key={Math.random() + item.label + 'guest-list'}>
                            <div className={guestClass.listV}>
                                <Box fontFamily='Gotham' className={guestClass.listHT}>
                                {item.guests&&item.guests.length!==0?item.guests.filter(f=>!f.check).length ===0 ? 
                                    <CheckBox style={groupCheck} onClick={()=>handleChecks(item,false)} /> : 
                                    <CheckBoxOutlineBlank style={groupCheck} onClick={()=>handleChecks(item,true)}/> : null}
                                    {item.label}
                                   <div className={guestClass.groupActionIconsV}>
                                    <DeleteOutlined style={groupCheck} onClick={()=>{setDelId(item.value); setDelDiag(true)} } />
                                    <Create style={groupCheck} onClick={()=>handleGroupEdit(item.value, item.label)} />
                                   </div>

                                </Box>
                                {
                                    item.guests && item.guests.length ? item.guests.map(guest => (
                                        <div className={guestClass.guestListV} onClick={() => makeCheck(guest, !guest.check)}>
                                            {guest.check ? <CheckBox style={guestCheck} /> : <CheckBoxOutlineBlank style={guestCheck} />}
                                            <Box fontFamily='GothamBook' className={guestClass.guestNameT}>
                                                {guest.name}
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
            {checks && checks.length ? <div className={guestClass.guestInviteButtonV}>
                <Button onClick={onInvite} variant="contained" size="large" style={mainBorderDtBotton} >
                    {common.Invite}
                </Button>
            </div> : null}
            {group && <GroupModal group={group} setGroup={setGroup} edit={groupEdit}/>}
            <Confirm open={delDiag} onClose={()=>setDelDiag(false)} title={guest.DeleteGroup} 
                content={guest.DeleteGroupContent} onClick={handleGroupDelete} button={common.Delete} />
        </Grid>
    )
}
const GroupModal = ({ setGroup, group }) => {
    const classes = authModalStyle();
    const { loader = false, guests = [] } = useSelector(({ guest }) => guest);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const onAddGroup = () => {
        if (name) {
            if (guests && guests.map(group => group.label && group.label.trim()).indexOf(name && name.trim()) > -1) {
                onClose();
                return dispatch(createAlert({ message: errors.nameExist, type: 'error' }))
            }
            dispatch(addGroup({ name }));
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