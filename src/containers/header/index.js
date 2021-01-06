import React, {  } from 'react';
import { headerStyle } from 'styles';
import { Toolbar, AppBar } from '@material-ui/core';
import NavList from './navlist';
import {history} from "../../App";

export default (props) => {
    const classes = headerStyle();
    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.headerView} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <NavList history={history}/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
