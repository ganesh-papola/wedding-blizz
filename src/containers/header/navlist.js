import React, { useState } from 'react';
import { headerStyle, navButtons, headerProfielIcon, menuIcon } from 'styles';
import { Button, Box, List, ListItem, ListItemText, Popover } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle, ExpandMoreOutlined, ExpandLessOutlined } from "@material-ui/icons";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { logout } from "actions";
import { strings } from 'constant';
import MenuIcon from './menuicon';
import Drawer from './drawer';
import Logo from './logo';
import { Confirm } from 'components';
import { SignupModal, LoginModal, ForgotModal } from "components";
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
    const [forgot, setForgotModal] = useState(false);
    const [popup, setPopup] = useState(null);
    const { history }  = props;
    const onSignIn = () => {
        setSignupModal(false);
        setForgotModal(false);
        setTimeout(() => {
            setLoginModal(true)
        }, 300);
    }
    const onSignUp = () => {
        setLoginModal(false);
        setForgotModal(false);
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
    const onForgot = () =>{
        setLoginModal(false);
        setSignupModal(false);
        setForgotModal(true);
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
                <LoggedInUser setSignupModal={setSignupModal} setLoginModal={setLoginModal} open={popup} history={history}/>

                <div className={classes.drawerView}>
                    <MenuIcon openDrawerHandler={() => openDrawer(true)} />
                    <Drawer open={open} toggleDrawerHandler={() => openDrawer(false)} setSignupModal={setSignupModal} setLoginModal={setLoginModal} />
                </div>
            </ListItem>

            {login && <LoginModal modal={login} setModal={setLoginModal} onSignUp={onSignUp} type={type} onChangeLogin={onChangeLogin} onForgot={onForgot} />}
            {signup && <SignupModal modal={signup} setModal={setSignupModal} onSignIn={onSignIn} />}
            {forgot && <ForgotModal modal={forgot} setModal={setForgotModal}  onSignIn={onSignIn}/>}
        </List>
    )
}

const LoggedInUser = ({ setLoginModal = () => { }, setSignupModal = () => { }, open = false, history }) => {
    const classes = headerStyle();
    const { user = {}, isLoggedIn = false } = useSelector(({ user }) => user);
    const [dialog, setDailog] = useState(false);
    const dispatch = useDispatch();
    const onLogout = () => setDailog(true);
    const setRoute = (route)=>{
        history.push(route);
    }
    return (
        <>
            {isLoggedIn && user.uid && user.token ?
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>
                            <div className={classes.profileMenuV} {...bindTrigger(popupState)}>
                                <AccountCircle size="small" style={headerProfielIcon} />
                                <Box variant="button" fontFamily="Gotham" className={`${classes.profileMenuNameT}`}>
                                    {user.name}
                                </Box>
                                {!open ? <ExpandMoreOutlined style={menuIcon} /> : <ExpandLessOutlined style={menuIcon} />}
                            </div>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                <div className={classes.popoverV}>
                                    <Box variant="button" fontFamily="Gotham" className={classes.popoverT}>
                                        {auth.MyProfile}
                                    </Box>
                                    <Box variant="button" fontFamily="Gotham" className={classes.popoverT} onClick={()=>{popupState.close();setRoute('/account')}}>
                                        {auth.MyAccount}
                                    </Box>
                                    <Box variant="button" onClick={onLogout} fontFamily="Gotham" className={classes.popoverT}>
                                        {auth.Logout}
                                    </Box>
                                </div>
                            </Popover>
                        </div>
                    )}
                </PopupState> :
                <div className={classes.buttonView}>
                    <Button onClick={() => setLoginModal(true)} variant="outlined" size="small" color='primary' style={navButtons} mr={4}>
                        {auth.Login}
                    </Button>
                    <Button onClick={() => setSignupModal(true)} variant="contained" size="small" color='primary' style={navButtons} mr={4}>
                        {auth.SignUp}
                    </Button>
                </div>
            }
            <Confirm open={dialog} onClose={()=>setDailog(false)} title={auth.Logout} 
                content={auth.LogoutContent} onClick={()=>dispatch(logout())} button={auth.Logout} />
        </>
    )

}