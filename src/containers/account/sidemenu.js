import React from "react";
import { Typography, Grid, Box } from '@material-ui/core'
import { accountStyle } from "styles";
import { strings } from 'constant';

const { account } = strings;
export default ({ selected = 0, onSelect = () => { } }) => {
    const classes = accountStyle();
    const sides = [account.PersonalDetails, account.WeddingDetails, account.AccountManagement, account.BusinessInformation, account.EmailPreferences]
    const getTextVStyle = (index) => {
        return index === sides.length - 1 ?
            selected === index ?
                classes.sideMenuNonBordSlcTV :
                classes.sideMenuNonBordTV
            :
            selected === index ? classes.sideMenuBordSlcTV : classes.sideMenuBordTV
    }
    return (
        <div className={classes.sidemenuMain}>
            <div className={classes.sidemenuBoxV}>
                <div className={classes.sideMenuHeadTV}>
                    <Box fontFamily='CormorantBoldItalic' className={classes.sideMenuHeadT}>
                        {account.AccountSettings}
                    </Box>
                </div>
                {
                    sides.map((text, index) => (
                        <div className={getTextVStyle(index)} onClick={() => onSelect(index)} key={index + text}>
                            <Box fontFamily='Gotham' className={selected === index ? classes.selectedmenuT : classes.menuT}>
                                {text}
                            </Box>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}