import React from "react";
import { Box } from '@material-ui/core';
import { accountStyle } from "styles";
import { strings } from 'constant';
import { useSelector } from "react-redux";

const { account } = strings;
export default ({ selected = 0, onSelect = () => { } }) => {
    const { user={} } = useSelector(({user})=>user);
    const classes = accountStyle();
    const sides = user&&user.uid && user.type === 1 ?
    [account.PersonalDetails, account.WeddingDetails, account.AccountManagement, account.EmailPreferences] :
    [account.PersonalDetails, account.WeddingDetails, account.AccountManagement, account.BusinessInformation, account.EmailPreferences]
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