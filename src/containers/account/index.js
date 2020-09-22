import React, { useState } from "react";
import { accountStyle } from "styles";
import Sidemenu from './sidemenu';
import PersonalDetail from './personalDetail';
import WeddingDetail from './weddingDetail';
import AccountManagement from './accountManagement';
import EmailPreference from './emailPreference';

const components =  [
                        props=><PersonalDetail {...props} />,
                        props=><WeddingDetail {...props} />,
                        props=><AccountManagement {...props} />,
                        props=><EmailPreference {...props} />
                    ];

export default () => {
    const classes = accountStyle();
    const [selected, setSelected] = useState(0);
    return (
        <div className={classes.accountMain}>
            <Sidemenu selected={selected} onSelect={setSelected} />
            {components[selected]&&components[selected]({setSelected})}
        </div>
    )
}