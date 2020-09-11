import React, { useState } from 'react';
import { headerStyle } from 'styles';
import { IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

export default props => {
    const classes = headerStyle();
    return (
            <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={props.openDrawerHandler}>
                <MenuIcon color='primary' />
            </IconButton>
    )
}