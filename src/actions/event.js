
import { auth, firestore, insert, uploadImages } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings } from 'constant';
import { createAlert } from "actions";

export const addEvent = ({ images,theme_images, ...state}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const {user:{uid=''}} = getState().user;
        const imagesUrl = await uploadImages(images);
        const imageUrl = await uploadImages(theme_images);
        const event = await insert('events', {...state, owners : uid, images : imagesUrl, theme_images : imageUrl[0]});
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        dispatch(createAlert(strings.success.EventAddedSuccussful, 'success'));
        history.push("/")
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch(createAlert(error.message, 'error'))
    }
}

export const fetchEvent = () => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const {user:{uid=''}} = getState().user;
        const snap = await firestore.collection('events').where('owners', '==', uid).get();
        const data = snap.docs.map(doc => doc.data());
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        dispatch({ type : ACTION_TYPES.EVENT_COMPLETE, payload : data[0] });
        return data[0];
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch(createAlert(error.message, 'error'));
        return null
    }
    
}