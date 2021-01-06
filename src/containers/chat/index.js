import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { proposalStyle, eventStyle } from 'styles';
import { strings } from 'constant';
import { BreadCrumb, Loader, NoRecordFound, Chat } from "components";
import { getChats, setChat } from "actions";
import moment from 'moment';
const { chat, common } = strings;

export default props => {
    const classes = proposalStyle();
    const eclasses = eventStyle();
    const [chtprop, _setChat] = useState({title:'', subTitle:'',visible:null})
    const breads = [
        { title: common.Home, path: '/' }
    ];
    const setVisible = type=>_setChat({...chtprop, visible:type})
    const dispatch = useDispatch();
    const { user: { type, uid='' } } = useSelector(({ user }) => user);
    const { conversation = [], loader = false } = useSelector(({ chat }) => chat);
    useEffect(() => {
        dispatch(getChats())
    }, [])
    
    const handleChat = chat => {
        dispatch(setChat(chat));
        _setChat({...chtprop, title:chat.name, subTitle:chat.message,visible:'active'})
    }
    return (
        <div className={classes.proposalMain}>
            <BreadCrumb breads={breads} current={common.Chats} />
            <div className={classes.mainBody}>
                {loader ? <Loader /> : conversation && conversation.length ? conversation.map((propo,ind) => (
                    <div key={ind+'conversation-list'} className={classes.listCard} onClick={()=>handleChat(propo)}>
                        <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                            {propo?.user?.name}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                            {propo?.lastMessage?.timeStamp?moment(new Date(propo?.lastMessage?.timeStamp)).format('DD MMM YYYY') :'' }
                        </Box>
                        <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                            {propo?.lastMessage?.message.replace(/^(.{300}[^\s]*).*/, "$1")}
                        </Box>
                    </div>)) : <NoRecordFound text={chat.NoConversFound} />}
            </div>
            {(chtprop.visible==="active"||chtprop.visible==="hide")&&<Chat {...chtprop} setVisible={setVisible} />}
        </div>
    )
}
