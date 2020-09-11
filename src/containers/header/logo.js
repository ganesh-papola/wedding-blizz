import React, {  } from 'react';
import { headerStyle } from 'styles';
import { LogoText, WeddingRings } from 'assets';

export default props => {
    const classes = headerStyle();
    return (
        <div className={classes.logoView}>
            <img src={WeddingRings} className={classes.logo1} />
            <img src={LogoText} className={classes.logo2} />
        </div>
    )
}