import React, { useState } from 'react';
import { headerStyle, navButtons, headerProfielIcon, menuIcon, popupMenuItems, loggedInMenu } from 'styles';
import { Button, Box, List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle, ExpandMoreOutlined, ExpandLessOutlined } from "@material-ui/icons";
import { logout } from "actions";
import { strings } from 'constant';
import MenuIcon from './menuicon';
import Drawer from './drawer';
import Logo from './logo'
import { SignupModal, LoginModal } from "components";
const { auth, header } = strings;
const navlists = [
    { title: header.Planning },
    { title: header.LocalVendors },
    { title: header.WeddingWebsites },
    { title: header.Invitations },
    { title: header.RingsPlDresses },
];

export default props => {
    const classes = headerStyle();
    const [open, openDrawer] = useState(false);
    const [login, setLoginModal] = useState(false);
    const [type, setType] = useState('couple');
    const [signup, setSignupModal] = useState(false);
    const [popup, setPopup] = useState(false);
    const dispatch = useDispatch();
    const onSignIn = () => {
        setSignupModal(false);
        setTimeout(() => {
            setLoginModal(true)
        }, 300);
    }
    const onSignUp = () => {
        setLoginModal(false);
        setTimeout(() => {
            setSignupModal(true);
        }, 300);
    }
    const onChangeLogin = () => {
        setLoginModal(false);
        setType(type === 'couple' ? 'vendor' : 'couple')
        setTimeout(() => {
            setLoginModal(true);
        }, 300);
    }
    const onClose = () => {
        setPopup(null);
    }
    const onLogout = () => {
        onClose()
        dispatch(logout())
    }

    return (
        <List component="nav" className={classes.header}>
            <ListItem className={classes.header} component="nav" variant="dense">
                <Logo />
                <div className={classes.linksView}>
                    {
                        navlists.map((nav, index) => (
                            <ListItemText key={Math.random() + 'nav' + index} >
                                <Box variant="button" fontFamily="Gotham" className={`${classes.headerLinks}`}>
                                    {nav.title}
                                </Box>
                            </ListItemText>
                        ))
                    }
                </div>
                <LoggedInUser setSignupModal={setSignupModal} setLoginModal={setLoginModal} open={popup} onPopup={setPopup} />
                <Menu
                    id="header-auth-menu"
                    anchorEl={popup}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    open={Boolean(popup)}
                    style={loggedInMenu}
                    // className={classes.loggedInMenu}
                    onClose={()=>setPopup(null)}>
                    <MenuItem style={popupMenuItems} onClick={onLogout}>{auth.Logout}</MenuItem>
                    <MenuItem style={popupMenuItems} onClick={onLogout}>{auth.Logout}</MenuItem>
                    <MenuItem style={popupMenuItems} onClick={onLogout}>{auth.Logout}</MenuItem>
                    <MenuItem style={popupMenuItems} onClick={onLogout}>{auth.Logout}</MenuItem>
                    <MenuItem style={popupMenuItems} onClick={onClose}>{"close"}</MenuItem>
                </Menu>
                <div className={classes.drawerView}>
                    <MenuIcon openDrawerHandler={() => openDrawer(true)} />
                    <Drawer open={open} toggleDrawerHandler={() => openDrawer(false)} setSignupModal={setSignupModal} setLoginModal={setLoginModal} />
                </div>
            </ListItem>
            
            {login && <LoginModal modal={login} setModal={setLoginModal} onSignUp={onSignUp} type={type} onChangeLogin={onChangeLogin} />}
            {signup && <SignupModal modal={signup} setModal={setSignupModal} onSignIn={onSignIn} />}
        </List>
    )
}

const LoggedInUser = ({ setLoginModal=()=>{}, setSignupModal=()=>{}, open=null, onPopup=()=>{} }) => {
    const classes = headerStyle();
    const { user = {}, isLoggedIn = false } = useSelector(({ user }) => user);
    

    if (isLoggedIn && user.uid && user.token) {
        return (
            <div className={classes.profileMenuV} onClick={e=>onPopup(e)}>
                <AccountCircle size="small" style={headerProfielIcon} />
                <Box variant="button" fontFamily="Gotham" className={`${classes.profileMenuNameT}`}>
                    {user.name}
                </Box>
                {!open ? <ExpandMoreOutlined style={menuIcon} /> : <ExpandLessOutlined style={menuIcon} />}
            </div>
        )
    } else {
        return(
            <div className={classes.buttonView}>
                <Button onClick={() => setLoginModal(true)} variant="outlined" size="small" color='primary' style={navButtons} mr={4}>
                    {auth.Login}
                </Button>
                <Button onClick={() => setSignupModal(true)} variant="contained" size="small" color='primary' style={navButtons} mr={4}>
                    {auth.SignUp}
                </Button>
            </div>
        )
        }
    }