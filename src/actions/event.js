
import { auth, firestore, insert, uploadImages, imagePathToUrl, sendPush } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";

export const addEvent = ({ images,theme_image, ...state}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_REQUEST });
        const {user:{uid=''}} = getState().user;
        const imagesUrl = await uploadImages(images);
        const imageUrl = await uploadImages(theme_image);
        const insertData = {...state, owners : uid, images : imagesUrl, theme_image : imageUrl[0]};
        const event = await insert('events', insertData);
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_SUCCESS });
        dispatch(createAlert({message:strings.success.EventAddedSuccussful, type:'success'}));
        history.push("/")
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}))
    }
}

export const fetchEvent = () => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const {user:{uid=''}} = getState().user;
        const snap = await firestore.collection('events').where('owners', '==', uid).get();
        const data = await Promise.all(snap.docs.map(async doc => {
            const detail = doc.data();
            const { images, theme_image } = detail;
            const imagesUrls = await Promise.all(images.map(async image => await imagePathToUrl(image) ));
            const themeUrl = await imagePathToUrl(theme_image);
            return {...detail, images:imagesUrls, theme_image:themeUrl };
        }));
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        dispatch({ type : ACTION_TYPES.EVENT_COMPLETE, payload : data[0] });
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_SUCCESS });
        return data[0];
    } catch (error) {
        console.log("fetch event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}));
        return null
    }
}
export const fetchCategory = () => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const category = await firestore.collection('categories').get();
        const data = await Promise.all(category.docs.map(async doc => {
            const detail = doc.data();
            const { icon } = detail;
            const image = await imagePathToUrl(icon);
            return {...detail, id:doc.id, icon:image }
        }))
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        return data;
    } catch (error) {
        console.log("fetchCategory event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}));
        return null
    }
}
export const setCategory = (payload) => dispatch => {
    dispatch({ type : ACTION_TYPES.SET_EVENT_CATEGORY, payload });
}
export const fetchVendors = () => async (dispatch, getState) => {
    try {
        const { category=null } = getState().event;
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const snap = await firestore.collection('venders').where('categories', 'array-contains', category.id).get();
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        return snap.docs.map(doc=>doc.data());
    } catch (error) {
        console.log("fetchVendors event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}));
        return null
    }
}
export const setEventVendor = (payload) => dispatch => {
    dispatch({ type : ACTION_TYPES.EVENT_VENDOR_DETAIL, payload });
}

export const addProposal = (data) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_REQUEST });
        await insert('proposals', data);
        setTimeout(() => {
           dispatch({ type : ACTION_TYPES.EVENT_SERVICE_SUCCESS });
           history.push('/');
           dispatch(sendNotification())
           dispatch(createAlert({message:strings.success.proposalAdded, type:'success'}));
        }, 2000);
    } catch (error) {
        console.log("add proposal ", error);
        dispatch(createAlert({message : error.message, type:'error'}));
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_FAILED });
    }
}

export const sendNotification = () => async(dispatch, getState) => {
    try {
        const vendor = getState().event?.vendor;
        if(vendor&&vendor.ownerId){
            const {name=''} = getState().user?.user;
            const title = strings.notifications.NewProposal
            const body = `${ strings.notifications.ProposalBody} ${name}`
            const notif = await sendPush({to:vendor.ownerId,title,body});
            console.log("notification ",notif)
        }
    } catch (error) {
        console.log("notification error ", error)
    }
}
