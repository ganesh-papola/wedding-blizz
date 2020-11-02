
import { firestore, insert, uploadImages, imagePathToUrl, sendPush, updateOne, findById } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert } from "actions";

export const addEvent = ({ images,theme_image, ...state}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_REQUEST });
        const {user:{uid=''}} = getState().user;
        const imagesUrl = await uploadImages('events',images);
        const imageUrl = await uploadImages('events',theme_image);
        const insertData = {...state, owners : uid, images : imagesUrl, theme_image : imageUrl&&imageUrl[0]?imageUrl[0]:''};
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
            const imagesUrls = images&&images.length?await Promise.all(images.map(async image => await imagePathToUrl(image) )):[];
            const themeUrl = theme_image&&theme_image.length?await imagePathToUrl(theme_image):'';
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
        dispatch({ type : ACTION_TYPES.CATEGORIES, payload : data });
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
export const setEventVendor = (payload) => async dispatch => {
    const images = payload&&payload.images?payload.images:[];
    const displayImages = await Promise.all(images.map(async image => await imagePathToUrl(image) ));
    dispatch({ type : ACTION_TYPES.EVENT_VENDOR_DETAIL, payload:{...payload, displayImages} });
}

export const addProposal = (data, id=null) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_REQUEST });
        if(id) await updateOne('proposals', id, data);
        await insert('proposals', data);
        setTimeout(() => {
           dispatch({ type : ACTION_TYPES.EVENT_SERVICE_SUCCESS });
           dispatch(createAlert({message:id?strings.success.proposalUpdated:strings.success.proposalAdded, type:'success'}));
           dispatch(sendNotification(!!id));
        }, 2000);
        setTimeout(() => {
            history.push('/'); 
        }, 4000);
    } catch (error) {
        console.log("add proposal ", error);
        dispatch(createAlert({message : error.message, type:'error'}));
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_FAILED });
    }
}
export const fetchProposal = (eventid,uid, category) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_REQUEST });
        const snap = await firestore.collection('proposals').where('user_id', '==', uid)
            .where('event_id', '==', eventid).where('category_id','==',category).get();
        setTimeout(() => {
           dispatch({ type : ACTION_TYPES.EVENT_SERVICE_SUCCESS });
        }, 2000);
        const data = snap.docs.map(it=>it.data());
        return new Promise(res=>res(data&&data.length?data[0]:null));
    } catch (error) {
        console.log("fetch proposal catch error ", error);
        dispatch(createAlert({message : error.message, type:'error'}));
        dispatch({ type : ACTION_TYPES.EVENT_SERVICE_FAILED });
        return new Promise(res=>res(null));
    }
}

export const sendNotification = (update) => async(dispatch, getState) => {
    try {
        const vendor = getState().event?.vendor;
        if(vendor&&vendor.ownerId){
            const {name=''} = getState().user?.user;
            const title = strings.notifications.NewProposal
            const body = `${update?strings.notifications.QuoteUpdateBody:strings.notifications.QuoteBody} ${name}`
            const notif = await sendPush({to:vendor.ownerId,title,body});
            console.log("notification ",notif)
        }
    } catch (error) {
        console.log("notification error ", error)
    }
}
export const addVendorProposal = (data,id, subid=null) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.PROPOSAL_REQUEST });
        const {name=''} = getState().user?.user;
        if(id) await updateOne('proposals', id, {isQuote:false});
        if(subid)
        await updateOne('proposals', subid, data);
        else await insert('proposals', data);
        setTimeout(() => {
           dispatch({ type : ACTION_TYPES.PROPOSAL_COMPLETE });
           dispatch(createAlert({message:strings.success.proposalAdded, type:'success'}));
           history.goBack();
        }, 2000);
        handleNotification(data, !!subid, name)
    } catch (error) {
        console.log("add proposal ", error);
        dispatch(createAlert({message : error.message, type:'error'}));
        dispatch({ type : ACTION_TYPES.PROPOSAL_FAILED });
    }
} 

const handleNotification = async(data, update, name) => {
    try {
        const bid = data?.business_id;
        const business = await findById('venders',bid);
        const busines = business.docs.map(b=>b.data());
        const title = strings.notifications.Proposal
        if(data.isProposal){
            const body = `${ update?strings.notifications.ProposalUpdatedBody:strings.notifications.ProposalBody} ${busines?.business_name}`
            const notif = await sendPush({to:data?.user_id,title,body});
        }
        if(data.isBooked){
            const body = `${strings.notifications.ProposalAcceptedBody} ${name}`
            const notif = await sendPush({to:busines&&busines[0]&&busines[0]?.ownerId,title,body});
        }
    } catch (error) {
        console.log("handleNotification catch error ",error);   
    } 
}