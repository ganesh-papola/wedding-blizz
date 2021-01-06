import React, {  } from 'react';
import { headerStyle } from 'styles';
import { LogoText, WeddingRings } from 'assets';
import { useHistory } from "react-router-dom";

export default props => {
    const classes = headerStyle();
    let history = useHistory()
    const onLogoClick = () => {
        if(history&&history.location&&history.location.pathname!=='/'){
            history.push('/')
            history.go('/')
        }
    }
    return (
        <div className={classes.logoView} onClick={onLogoClick}>
            <img src={WeddingRings} className={classes.logo1} />
            <img src={LogoText} className={classes.logo2} />
        </div>
    )
}