import React, {useState} from "react";
import { Grid, Box, Button } from '@material-ui/core'
import { accountStyle, commonButtonStyle, deleteButtonStyle } from "styles";
import { useSelector } from "react-redux";
import { TextField, TextArea, DropDown } from "components";
import { strings } from 'constant';
import { ArrowDropDown } from '@material-ui/icons';
import Menus from './popupMenu';

const { account, common } = strings;

export default (props) => {
    const classes = accountStyle();
    const { user = {} } = useSelector(({ user }) => user);
    const { email = ' moses.chikodinaka@gmail.com' } = user;
    const [menu, setMenu] = React.useState(null);
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const closeMenu = () => {
        setMenu(null);
    };
    const onMenu = (ind) =>{
        props.setSelected(ind)
    }

    return (
        <div className={classes.renderMain}>
            <Box fontFamily='CormorantBold' className={classes.renderAcMainHeadT}>
                {account.AccountManagement}
                <ArrowDropDown className={classes.dropIcon} onClick={handleMenuClick}/>
                <Menus menu={menu} closeMenu={closeMenu} onMenu={onMenu} />
            </Box>
            <Grid container >
                <Grid item sm={12} xs={12} md={7} lg={7} className={classes.accountManageV} >
                    <Box fontFamily='Gotham' className={classes.acManageEmText}>
                        {common.EmailAddress}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.acManageEmText}>
                        {email}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.editEmailT}>
                        {account.EditEmail}
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={12} lg={12} xl={12} item className={classes.updatePassV} >
                    <Box fontFamily='CormorantBold' className={classes.updatePassT}>
                        {account.UpdateYourPassword}
                    </Box>
                </Grid>

                <Grid sm={12} xs={12} md={10} lg={6} xl={6} item className={classes.updatePassV} >
                    <TextField label={account.CurrentPassword} secure />
                </Grid>
                <Grid sm={12} xs={12} md={12} lg={6} xl={6} item className={classes.updatePassV} />

                <Grid sm={12} xs={12} md={10} lg={6} xl={6} item className={classes.updatePassV} >
                    <TextField label={account.NewPassword} secure />
                </Grid>
                <Grid sm={12} xs={12} md={12} lg={6} xl={6} item className={classes.updatePassV} />

                <Grid sm={12} xs={12} md={10} lg={6} xl={6} item className={classes.updatePassV} >
                    <TextField label={account.ConfirmNewPassword} secure />
                </Grid>
                <Grid sm={12} xs={12} md={10} lg={6} xl={6} item className={classes.updatePassV} />

                <Grid item sm={12} xs={12} md={7} lg={7} xl={12} className={classes.accountManageV} />


                <Grid sm={12} xs={12} md={12} lg={12} xl={12} item className={classes.updatePassV} >
                    <Box fontFamily='CormorantBold' className={classes.updatePassT}>
                        {account.DeleteYourAccount}
                    </Box>
                    <Button variant="contained" size="large" style={deleteButtonStyle} onClick={()=> alert("In progress..")}>
                        {common.Delete}
                    </Button>
                </Grid>
                <Grid item sm={12} xs={12} md={7} lg={7} className={classes.accountManageV} />
                <Grid item sm={6} xs={6} md={6} lg={6} >
                    <Button variant="contained" size="large" color='primary' style={commonButtonStyle}>
                        {common.Update}
                    </Button>
                    <Button variant="outlined" size="large" style={commonButtonStyle}>
                        {common.Cancel}
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}