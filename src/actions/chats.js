import { firestore, insert, uploadImages, imagePathToUrl, sendPush, updateOne, findById } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";


export const getChats = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ACTION_TYPES.CONVERSATION_REQUEST });
        const { user: { uid = '' } } = getState().user;
        // let users = [];
        // const snap = await firestore.collection('conversations').where('participants', 'array-contains', uid).orderBy('modifiedAt').get();
        // const conversation = snap.docs.map(it => it.data());
        // const ids = conversation.map(it => it.participants && it.participants.length &&
        //     it.participants.filter(it => it !== uid)[0]);
        // if(ids&&ids.length){
        //     const usnap = await firestore.collection('users').where('userId', 'in', ids).get();
        //     users = usnap.docs.map(t => t.data())
        // }
        // console.log("conversation", conversation, ids, users)
        // dispatch({ type: ACTION_TYPES.CONVERSATION_SUCCESS, payload: conversation.map(c => ({ ...c, user: users.filter(n => c.participants.indexOf(n.userId) > -1)[0] })) });
        dispatch(getConversationListner());
        // dispatch({ type: ACTION_TYPES.CONVERSATION_COMPLETE })
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type: ACTION_TYPES.CONVERSATION_FAILED });
        dispatch(createAlert({ message: error.message, type: 'error' }))
    }
}
export const getConversationListner = () => async (dispatch, getState) => {
    // const detail = getState().chat?.detail;
    // const { id = '', user = {} } = detail?detail:{};
    const { user: { uid = '' } } = getState().user; 
    let users = [];
    firestore.collection('conversations').where('participants', 'array-contains', uid).
    // .orderBy('modifiedAt')
    onSnapshot(async snap => {
        const conversation = snap.docs.map(it => it.data());
        const ids = conversation.map(it => it.participants && it.participants.length &&
            it.participants.filter(it => it !== uid)[0]);
        if(ids&&ids.length){
            const usnap = await firestore.collection('users').where('userId', 'in', ids).get();
            users = usnap.docs.map(t => t.data())
        }
        console.log("conversation", conversation, ids, users)
        dispatch({ type: ACTION_TYPES.CONVERSATION_SUCCESS, payload: conversation.map(c => ({ ...c, user: users.filter(n => c.participants.indexOf(n.userId) > -1)[0] })) });
    });
}

export const getChat = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ACTION_TYPES.CHAT_REQUEST });
        // const { id = '', user: { userId = '' } } = getState().chat?.detail;
        // const { user: { uid = '' } } = getState().user;
        // const snaps = await firestore.collection('chats').where('conversationId', '==', id).orderBy('createdAt').get();
        // const chats = snaps.docs.map(v => v.data());
        // console.log("chats chats ", chats)
        // dispatch({ type: ACTION_TYPES.CHAT_SUCCESS, payload: chats });
        dispatch(getChatListner());
        // dispatch({ type: ACTION_TYPES.CHAT_COMPLETE });
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type: ACTION_TYPES.CHAT_FAILED });
        dispatch(createAlert({ message: error.message, type: 'error' }))
    }
}
export const getChatListner = () => async (dispatch, getState) => { 
    const { id = '', user= {} } = getState().chat?.detail;
    const { user: { uid = '' } } = getState().user;
    console.log("pre getChatListner getChatListner");
    firestore.collection('chats').where('conversationId', '==', id).orderBy('createdAt').onSnapshot(value => {
        const chats = value.docs.map(v => v.data());
        console.log("chats chats getChatListner", chats)
        dispatch({ type: ACTION_TYPES.CHAT_SUCCESS, payload: chats });
    });
}
export const setChat = payload => async (dispatch, getState) => dispatch({ type: ACTION_TYPES.SET_CHAT_DETAIL, payload });
export const sendMessage = message => async (dispatch, getState) => {
    try {
        const { user: { uid = '' } } = getState().user;
        const { user: { userId = '' }, id = '' } = getState().chat?.detail;
        let chatId1 = `${uid}_${userId}`,chatId2 = `${userId}_${uid}` ;
        
        const conv = await firestore.collection('conversations').where('id', 'in', [chatId1, chatId2]).get();
        const cdata = conv.docs.map(d=>d.data());
        console.log("cdata cdata ", cdata)
        if(cdata.length){
            const conversations = {
                participants: cdata[0]?.participants,
                id: cdata[0]?.id,
                modifiedAt: new Date().getTime(),
                lastMessage: {
                    ...cdata[0]?.lastMessage, message
                }
            }
            await firestore.doc(`conversations/${cdata[0]?.id}`).set(conversations);
            const chats = {
                conversationId: cdata[0]?.id,
                message, receiver_id: userId, sender_id: uid
            }
            const save = await insert('chats', chats);
        }else {
            const conversations = {
                participants: [uid, userId],
                id: chatId1,
                modifiedAt: new Date().getTime(),
                lastMessage: {
                    conversationId: chatId1,
                    isMedia: false, receiverId: userId, senderId: uid, message
                }
            }
            await insert('conversations', {...conversations, modifiedAt: new Date().getTime()});
            const chats = {
                conversationId: chatId1,
                message, receiver_id: userId, sender_id: uid
            }
            const save = await insert('chats', chats);
            console.log("save chat ", save)
        }
  
    } catch (error) {
        console.log("send  message catch error ", error)
    }
}