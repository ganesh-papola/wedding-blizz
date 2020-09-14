import React, { useState } from 'react';
import { headerStyle } from 'styles';
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { strings } from 'constant';
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
                    {[auth.Login, auth.SignUp].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>

    )
}