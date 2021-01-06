import React, { useState } from 'react';
import { headerStyle } from 'styles';
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { strings } from 'constant';
import { logout } from "actions";
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
    const dispatch = useDispatch();
    const { user = {}, isLoggedIn = false } = useSelector(({ user }) => user);
    const loggedIn = !!(isLoggedIn && user.uid && user.token)
    let authMenu = loggedIn? [{title : auth.MyProfile, onClick:()=>{}}, 
        {title : auth.Logout, onClick: ()=>dispatch(logout())}] : 
        [{title : auth.Login, onClick : props.setLoginModal}, {title : auth.SignUp, onClick: props.setSignupModal}]
    return (
        <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
            <div className={classes.list}
                role="presentation"
                onClick={props.toggleDrawerHandler}
                onKeyDown={props.toggleDrawerHandler}>
                <List>
                    {navlists.map((list, index) => (
                        <ListItem button key={list.title}>
                            <ListItemText primary={list.title} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {
                        loggedIn?(
                            <ListItem button key={user.name}>
                            <ListItemText className={classes.profileMenuNameT} primary={user.name} />
                        </ListItem>
                        ):null
                    }
                    {authMenu.map((link, index) => (
                        <ListItem button key={link.title} onClick={link.onClick}>
                            <ListItemText primary={link.title} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>

    )
}