
import { auth, firestore, insert, s3Upload } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes, s3config } from 'constant';
import { createAlert } from "actions";


const { success, errors } = strings;


export const addImage = (images, key) => async (dispatch, getState) => {
    console.log("addImage addImage addImage ", images, key)
    const { id = '' } = getState().event?.event;
    const uid = getState().user?.user?.uid;
    try {
        const { id = '' } = getState().event?.event;
        dispatch({ type: ACTION_TYPES.GALLERY_REQUEST });
        await s3Upload(images, key, id, uid);
        dispatch(fetchImages())
        dispatch(createAlert({ message: success.FileUploaded, type: 'success' }));
        return true
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GALLERY_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
        return true
    }
}

export const fetchImages = () => async (dispatch, getState) => {
    try {
        const { id = '' } = getState().event?.event;
        const uid = getState().user?.user?.uid;
        dispatch({ type: ACTION_TYPES.GALLERY_REQUEST });
        const snap = await firestore.collection('event_gallery').where('senderId', '==', uid).where('eventId', '==', id).get();
        const images = snap.docs.map(doc => doc.data());
        dispatch({ type: ACTION_TYPES.GALLERY_SUCCESS, payload: images.map(i => ({ src: i.path, type: i.type, id: i.id })) });
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.GALLERY_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}

