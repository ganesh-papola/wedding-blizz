import React from 'react';
import PropTypes from 'prop-types';
import { landing } from 'styles';
import { Toolbar, Button, Typography, AppBar, List, ListItem, ListItemText } from '@material-ui/core';
import { Strings } from 'constant';
import { LogoText, WeddingRings } from 'assets';
const { auth, header } = Strings;


const navlists = [
    { title: header.Planning },
    { title: header.LocalVendors },
    { title: header.WeddingWebsites },
    { title: header.Invitations },
    { title: header.RingsPlDresses },
];

const Logo = () => {
    const classes = landing();
    return (
        <div className={classes.logoView}>
            <img src={WeddingRings} />
            <img src={LogoText} />
        </div>
    )
}
const NavList = () => {
    const classes = landing();
    return (
        <List component="nav" className={classes.header}>
            <ListItem className={classes.header} component="nav" variant="dense">
                <Logo />
                <div className={classes.linksView}>
                    {
                        navlists.map(nav => (
                            <ListItemText>
                                <Typography color="inherit" variant="button" className={`${classes.headerLinks}`}>
                                    {nav.title}
                                </Typography>
                            </ListItemText>
                        ))
                    }
                </div>
                <div className={classes.buttonView}>
                    <Button variant="outlined" size="small" color='primary' className={classes.button} mr={4}>
                        {auth.Login}
                    </Button>
                    <Button variant="contained" size="small" color='primary' className={classes.button} mr={4}>
                        {auth.SignUp}
                    </Button>
                </div>
            </ListItem>

        </List>
    )
}
export default function Header(props) {

    const classes = landing();
    return (
        <React.Fragment>
            <AppBar position="static" boxShadow={0} className={classes.headerView}>
                <Toolbar className={classes.toolbar}>
                    <NavList />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {

};