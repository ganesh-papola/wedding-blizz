
import React, { useState, useEffect } from 'react';
import { chatStyle, navIconStyle, proposalStyle, msgIconStyle, sendIconStyle, sendIconActiveStyle,
    leftSideBubble, rightSideBubble, proposeDetailStyle } from "styles";
import { CloseRounded, RemoveRounded, QuestionAnswerRounded, Send } from "@material-ui/icons";
import { InputBase, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ProposalDetail } from "containers";
import { strings } from 'constant';
import { NoRecordFound } from "components";
import { getChat, sendMessage, getChatListner, getConversationListner } from "actions";
import moment from 'moment';
const { common } = strings;

export default props => {
    const classes = chatStyle();
    const dispatch = useDispatch();
    let inputVRef = null;
    const { chats = [], _loader = false, detail={} } = useSelector(({ chat }) => chat);
    const { title, subTitle, visible = "", proposal = false, setVisible = () => { } } = props;
    const [message, setMessage] = useState('');
    useEffect(() => {
        dispatch(getChat())
    }, [detail.id])
    useEffect(() => scrollBottom(), [inputVRef, visible]);
    // useEffect(()=> {
    //     dispatch(getChatListner())
    // },[])
    // useEffect(()=> {
    //     dispatch(getConversationListner())
    // } ,[])
    const handleMessage = () => {
        dispatch(sendMessage(message));
        setMessage('')
    }
    const scrollBottom = () => {
        inputVRef && inputVRef.scrollIntoView({ behavior: "smooth" })
    }
    const handleChatMessage = (value,key)=>{
        setMessage(value);
        console.log("kkkk ", key)
    }
    return (
        <>
            {visible === 'hide' ? <CloseIcon handleClick={() => setVisible('active')} /> :
                visible === 'active' ?
                    <div className={classes.chatMain}>
                        <div className={classes.chatHeaderMain}>
                            <div className={classes.closeMain}>
                                <RemoveRounded style={navIconStyle} onClick={() => setVisible('hide')} />
                                <CloseRounded style={navIconStyle} onClick={() => setVisible('close')} />
                            </div>
                            <div className={classes.chatHeaderV}>
                                <Box fontFamily='GothamBook' className={classes.chatHeaderTT}>
                                    {title||detail?.user?.name}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.chatHeaderST}>
                                    {subTitle}
                                </Box>
                            </div>
                        </div>
                        <div className={classes.chatBodyMain}>
                            {proposal && <ProposalDetail chat={true} />}
                            <Chats chats={chats} />
                            <div ref={ref => inputVRef = ref} />
                        </div>
                        <div className={classes.inputV}>
                            <InputBase className={classes.input} placeholder={common.TypeMessage} value={message} onChange={({ target: { value }, ...key}) => handleChatMessage(value, key)} />
                            <Send style={message ? sendIconActiveStyle : sendIconStyle} onClick={handleMessage} />
                        </div>
                    </div>
                    : null}
        </>
    )
}

const CloseIcon = ({ handleClick = () => { } }) => {
    const classes = chatStyle();
    return (
        <div onClick={handleClick} className={classes.chatCloseMain}>
            <QuestionAnswerRounded style={msgIconStyle} />
        </div>
    )
}

const Chats = ({ chats = [] }) => {
    const classes = proposalStyle();
    const { uid='' } = useSelector(({ user }) => user)?.user;
    return (
        <div>
            {chats && chats.length ? chats.map((chat, index) =>
                (<div className={chat ? classes.mainDetailBodyCHV : classes.mainDetailBodyCHV} key={`${index}-chat-list`}
                    style={(chat.sender_id === uid) ? rightSideBubble: leftSideBubble}>
                    <div className={classes.listCard} style={proposeDetailStyle}>
                        {/* <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                        {chat?.message}
                    </Box> */}
                        <Box fontFamily='GothamBook' className={classes.proposeMT}>
                            {chat?.message}
                        </Box>
                    </div>
                    <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                        {chat?.createdAt ? moment(new Date(chat.createdAt)).format('DD MMM YYYY') : ''}
                    </Box>
                </div>))
                :
            <NoRecordFound text={common.NoChatRecord} />}
        </div>
    )
}