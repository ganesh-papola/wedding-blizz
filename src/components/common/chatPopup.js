
import React, { useState, useEffect } from 'react';
import { chatStyle, navIconStyle, msgIconStyle, sendIconStyle,sendIconActiveStyle } from "styles";
import { CloseRounded, RemoveRounded, QuestionAnswerRounded, Send } from "@material-ui/icons";
import { InputBase, Box } from '@material-ui/core';
import { ProposalDetail } from "containers";
import { strings } from 'constant';
const { common } = strings;

export default props => {
    const classes = chatStyle();
    let inputVRef = null;
    const {title,subTitle, visible="", setVisible=()=>{}} = props;
    const [message, setMessage] = useState('');
    
    useEffect(()=>scrollBottom(),[inputVRef,visible]);
    const handleMessage = () => {

    }
    const scrollBottom = () => {
        inputVRef&&inputVRef.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
        {visible==='hide'?<CloseIcon handleClick={()=>setVisible('active')}/> :
            visible==='active'?
            <div className={classes.chatMain}>
            <div className={classes.chatHeaderMain}>
                <div className={classes.closeMain}>
                    <RemoveRounded style={navIconStyle} onClick={()=>setVisible('hide')}/>
                    <CloseRounded style={navIconStyle} onClick={()=>setVisible('close')}/>
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
                <ProposalDetail chat={true}/>
                <div ref={ref=>inputVRef=ref}/>
            </div>
            <div className={classes.inputV}>
                    <InputBase className={classes.input} placeholder={common.TypeMessage} value={message} onChange={({target:{value}})=>setMessage(value)} />
                    <Send style={message?sendIconActiveStyle:sendIconStyle} onClick={handleMessage} />
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