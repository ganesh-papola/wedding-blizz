import React, { useState } from 'react';
import { headerStyle } from 'styles';
import { Button, Typography, List, ListItem, ListItemText } from '@material-ui/core';
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
    const [signup, setSignupModal] = useState(false);
    const onSignIn = ()=>{
        setSignupModal(false);
        setTimeout(() => {
            setLoginModal(true)
        }, 300);
    }
    const onSignUp = ()=>{
        setLoginModal(false);
        setTimeout(() => {
            setSignupModal(true);
        }, 300);
    }
    
    return (
        <List component="nav" className={classes.header}>
            <ListItem className={classes.header} component="nav" variant="dense">
                <Logo />
                <div className={classes.linksView}>
                    {
                        navlists.map(nav => (
                            <ListItemText key={Math.random()} >
                                <Typography color="inherit" variant="button" className={`${classes.headerLinks}`}>
                                    {nav.title}
                                </Typography>
                            </ListItemText>
                        ))
                    }
                </div>
                <div className={classes.buttonView}>
                    <Button onClick={()=>setLoginModal(true)} variant="outlined" size="small" color='primary' className={classes.button} mr={4}>
                        {auth.Login}
                    </Button>
                    <Button onClick={()=>setSignupModal(true)}  variant="contained" size="small" color='primary' className={classes.button} mr={4}>
                        {auth.SignUp}
                    </Button>
                </div>
                <div className={classes.drawerView}>
                    <MenuIcon openDrawerHandler={()=>openDrawer(true)} />
                    <Drawer open={open} toggleDrawerHandler={()=>openDrawer(false)} />
                </div>
            </ListItem>
            {login&&<LoginModal modal={login} setModal={setLoginModal} onSignUp={onSignUp} />}
            {signup&&<SignupModal modal={signup} setModal={setSignupModal} onSignIn={onSignIn}/>}
        </List>
    )
}