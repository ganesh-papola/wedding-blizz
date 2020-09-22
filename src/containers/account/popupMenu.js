import React, { useState } from 'react';
import { Menu, MenuItem, Grid, Box, Button } from '@material-ui/core'
import { strings } from 'constant';

const { account } = strings;
const sides = [account.PersonalDetails, account.WeddingDetails, account.AccountManagement, account.EmailPreferences]
export default (props) => {
    
    return (
                <Menu
                    id="simple-menu"
                    anchorEl={props.menu}
                    keepMounted
                    open={Boolean(props.menu)}
                    onClose={props.closeMenu}>
                        {
                            sides.map((text,ind)=><MenuItem onClick={()=>props.onMenu(ind)} key={`${ind}-opop-account-menu`}>{text}</MenuItem>)
                        }
                </Menu>
    )
}