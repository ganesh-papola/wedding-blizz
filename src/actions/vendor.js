import { auth, firestore, insert, uploadImages, imagePathToUrl, updateOne } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";
const { success, errors } = strings;

export const fetchVendorBusiness = (data) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.BUSINESS_REQUEST });
        const snap = await firestore.collection('venders').where('ownerId', '==', uid).get();
        const business = await Promise.all(snap.docs.map(async doc => {
            const detail = doc.data();
            const { images } = detail;
            const imagesUrls = await Promise.all(images.map(async image => await imagePathToUrl(image) ));
            return {...detail, images:imagesUrls };
        }));
        dispatch({ type: ACTION_TYPES.BUSINESS_SUCCESS, payload : business&&business[0] });
        return new Promise(res=>res(business&&business[0]))
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.BUSINESS_FAILED });
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
        return new Promise(res=>res(null));
    }
}
export const addBusiness = ({images=[],...data}) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        const { id=null } = getState().vendor?.business;
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_REQUEST });
        const imagesUrl = await uploadImages('vendors',images);
        if(id)
        await updateOne('venders', id, { ...data, images:imagesUrl, ownerId: uid });
        else
        await insert('venders', { ...data, images:imagesUrl, ownerId: uid });
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_COMPLETE });
        dispatch(createAlert({ message: id ? success.businessUpdated : success.businessAdded, type: 'success' }));
        dispatch(fetchVendorBusiness());
        history.push('/vendor')
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}