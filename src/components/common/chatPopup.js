
import React, { useState, useEffect } from 'react';
import { chatStyle, navIconStyle, msgIconStyle } from "styles";
import { CloseRounded, RemoveRounded, QuestionAnswerRounded } from "@material-ui/icons";
import { Box } from '@material-ui/core';

export default props => {
    const classes = chatStyle();
    const {title,subTitle, handler=""} = props;
    const [nav, setNav] = useState(handler);
    useEffect(()=>setNav(handler),[handler,title])

    return (
        <>
        {nav==='hide'?<CloseIcon handleClick={()=>setNav('active')}/>:
        nav==='active'?
            <div className={classes.chatMain}>
            <div className={classes.chatHeaderMain}>
                <div className={classes.closeMain}>
                    <RemoveRounded style={navIconStyle} onClick={()=>setNav('hide')}/>
                    <CloseRounded style={navIconStyle} onClick={()=>setNav('close')}/>
                </div>
                <div className={classes.chatHeaderV}>
                    <Box fontFamily='GothamBook' className={classes.chatHeaderTT}>
                        {title}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.chatHeaderST}>
                    {subTitle}
                </Box>
                </div>
            </div>
            <div className={classes.chatBodyMain}>

            </div>
        </div>
        :null}
        </>
    )
}

const CloseIcon = ({handleClick=()=>{}}) => {
    const classes = chatStyle();
    return(
        <div onClick={handleClick} className={classes.chatCloseMain}>
            <QuestionAnswerRounded style={msgIconStyle}/>
        </div>
    )
}