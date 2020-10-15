import { auth, firestore, insert, uploadImages, imagePathToUrl, sendPush } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";
const { success, errors } = strings;

export const addGroup = data => async (dispatch, getState) => {
    try {
        const {uid=''} = getState().user?.user;
        dispatch({type:ACTION_TYPES.GUEST_REQUEST});
         await insert('guest_groups', {...data, userId:uid});
            dispatch({type:ACTION_TYPES.GUEST_SUCCESS});
            dispatch(createAlert({message:success.guestGroupSuccess, type:'success'}))
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GUEST_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}

export const fetchGuestGroups = () => async (dispatch, getState) => {
    try {
        const {uid=''} = getState().user?.user;
        dispatch({type:ACTION_TYPES.GUEST_GROUP_REQUEST});
        const data = await firestore.collection('guest_groups').where('userId', '==', uid).get();
        dispatch({type:ACTION_TYPES.GUEST_GROUP_COMPLETE, payload : data.docs.map(grp=>grp.data()).map(it=>({label:it.name, value:it.id}))});
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GUEST_GROUP_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}
export const addGuest = (data) => async (dispatch, getState) => {
    try {
        const {uid=''} = getState().user?.user;
        dispatch({type:ACTION_TYPES.GUEST_REQUEST});
         await insert('guest_users', {...data, coupleId:uid});
            dispatch({type:ACTION_TYPES.GUEST_SUCCESS});
            dispatch(createAlert({message:success.guestSuccess, type:'success'}));
            history.goBack();
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GUEST_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}
export const fetchGroupGuests = () => async (dispatch, getState) => {
    try {
        const {uid=''} = getState().user?.user;
        dispatch({type:ACTION_TYPES.GUEST_REQUEST});
        const data = await firestore.collection('guest_groups').where('userId', '==', uid).get();
        const group = await Promise.all(data.docs.map(async grp=>{
            const it = grp.data();
            const guest = await firestore.collection('guest_users').where('groupId', '==', it.id).get();
            return {label:it.name, value:it.id, guests : guest.docs.map(g=>({...g.data(), check:false}))}
        }));
        console.log(".....", group)
        dispatch({type:ACTION_TYPES.GUEST_COMPLETE, payload : group });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GUEST_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}