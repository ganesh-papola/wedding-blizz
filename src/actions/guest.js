import { auth, firestore, insert, updateOne, imagePathToUrl, sendEmail, sendPush } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";
const { success, errors } = strings;

export const addGroup = (data) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_REQUEST });
        if(data&&data.id)
        await updateOne('guest_groups', data?.id, { name:data.name });
        else await insert('guest_groups', { ...data, userId: uid });
        dispatch({ type: ACTION_TYPES.GUEST_SUCCESS });
        dispatch(createAlert({ message: data?.id?success.guestGroupUpdateSuccess:success.guestGroupSuccess, type: 'success' }));
        dispatch(fetchGroupGuests());
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}

export const fetchGuestGroups = () => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_REQUEST });
        const data = await firestore.collection('guest_groups').where('userId', '==', uid).get();
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_COMPLETE, payload: data.docs.map(grp => grp.data()).map(it => ({ label: it.name, value: it.id, uid: it.userId })) });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}
export const addGuest = (data, id) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_REQUEST });
        if(id) await updateOne('guest_users', id, { ...data, coupleId: uid });
        else await insert('guest_users', { ...data, coupleId: uid });
        dispatch({ type: ACTION_TYPES.GUEST_SUCCESS });
        dispatch(createAlert({ message: success.guestSuccess, type: 'success' }));
        history.goBack();
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}
export const fetchGroupGuests = () => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_REQUEST });
        const groupData = await firestore.collection('guest_groups').where('userId', '==', uid).get();
        const guestData = await firestore.collection('guest_users').where('coupleId', '==', uid).get();
        const guests = guestData.docs.map(g => ({ ...g.data(), check: false }));
        const payload = groupData.docs.map(grp => grp.data()).map(it => ({ label: it.name, value: it.id, guests:guests.filter(g=>g.groupId === it.id) }));
        console.log(".....", payload)
        dispatch({ type: ACTION_TYPES.GUEST_COMPLETE, payload });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}

export const inviteGuests = (emails) => async (dispatch, getState) => {
    try {
        dispatch({ type: ACTION_TYPES.GUEST_REQUEST });
        // const { uid = '' } = getState().user?.user;
        // const guestsData = await firestore.collection('guest_groups').where('id', 'in', ids).get();
        const options = {
            to:emails,
            subject : strings.common.WeddingInvitation
        }
        const eres = await sendEmail(options);
        console.log("resresresres ", eres)
        dispatch({ type: ACTION_TYPES.GUEST_COMPLETE });
        dispatch(createAlert({ message: success.InvitationSending, type: 'success' }));
        history&&history.goBack();
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}
export const deleteGroup = (id) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_REQUEST });
        await firestore.collection('guest_groups').doc(id).delete();
        dispatch(fetchGroupGuests());
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_COMPLETE });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}
export  const deleteGuest = (id) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_REQUEST });
        await firestore.collection('guest_users').doc(id).delete();
        dispatch(fetchGroupGuests());
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_COMPLETE });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GUEST_GROUP_DEL_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}