
import { auth, firestore, insert, uploadImages, imagePathToUrl, sendPush } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";
const { success, errors } = strings;

export const addGift = state => async (dispatch, getState) => {
    try {
        const {id=''} = getState().event?.event;
        dispatch({type:ACTION_TYPES.GIFT_REQUEST});
         await insert('gifts', {...state,event_id:id});
         setTimeout(() => {
            dispatch({type:ACTION_TYPES.GIFT_SUCCESS});
            dispatch(createAlert({message:success.GiftAdded, type:'success'}));
            history.goBack();
         }, 2000);
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GIFT_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}
export const fetchGifts = () => async (dispatch, getState) => {
    try {
        const {id=''} = getState().event?.event;
        dispatch({type:ACTION_TYPES.GIFT_REQUEST});
        const data = await firestore.collection('gifts').where('event_id', '==', id).get();
        const payload = data.docs.map(gift=>gift.data().id&&gift.data());
        console.log("gift.data() gift.data() ", payload)
        dispatch({type:ACTION_TYPES.GIFTS_COMPLETE, payload});
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({type:ACTION_TYPES.GIFT_FAILED})
        dispatch(createAlert({message:errors.CommonApiError, type:'error'}));
    }
}