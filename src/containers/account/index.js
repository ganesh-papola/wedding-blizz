import React, { useState } from "react";
import { accountStyle } from "styles";
import Sidemenu from './sidemenu';
import PersonalDetail from './personalDetail';
import WeddingDetail from './weddingDetail';
import AccountManagement from './accountManagement';
import EmailPreference from './emailPreference';
import BusinessInformation from './businessInformation';
import { useSelector } from "react-redux";

export default () => {
    const classes = accountStyle();
    const [selected, setSelected] = useState(0);
    const { user } = useSelector(({user})=>user);
    const components =  user&&user.uid && user.type === 1 ?[
        props=><PersonalDetail {...props} />,
        props=><WeddingDetail {...props} />,
        props=><AccountManagement {...props} />,
        props=><EmailPreference {...props} />
    ]:
    [
        props=><PersonalDetail {...props} />,
        props=><WeddingDetail {...props} />,
        props=><AccountManagement {...props} />,
        props=><BusinessInformation {...props} />,
        props=><EmailPreference {...props} />
    ];
    return (
        <div className={classes.accountMain}>
            <Sidemenu selected={selected} onSelect={setSelected} />
            {components[selected]&&components[selected]({setSelected})}
        </div>
    )
}