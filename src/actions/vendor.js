import { auth, firestore, insert, uploadImages, findById, updateOne } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings, routes } from 'constant';
import { createAlert, imagesToUrl } from "actions";
const { success, errors } = strings;

export const fetchVendorBusiness = () => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        dispatch({ type: ACTION_TYPES.BUSINESS_REQUEST });
        const snap = await firestore.collection('venders').where('ownerId', '==', uid).get();
        const business = await snap.docs.map(doc => doc.data());
        const imgs = await dispatch(imagesToUrl(business && business[0] && business[0].images));
        const payload = business && business[0] && { ...business[0], tempImages: imgs }
        dispatch({ type: ACTION_TYPES.BUSINESS_SUCCESS, payload });
        return new Promise(res => res(business && business[0]))
    } catch (error) {
        console.log("addGift error ", error)
        dispatch({ type: ACTION_TYPES.BUSINESS_FAILED });
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
        return new Promise(res => res(null));
    }
}
export const addBusiness = ({ images = [], oldImages = [], ...data }) => async (dispatch, getState) => {
    try {
        const { uid = '' } = getState().user?.user;
        const { id = null } = getState().vendor?.business || {};
        let imagesUrl = [];
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_REQUEST });
        if (images && images.length)
            imagesUrl = await uploadImages('vendors', images);
        if (id)
            await updateOne('venders', id, { ...data, images: [...imagesUrl, ...oldImages], ownerId: uid });
        else
            await insert('venders', { ...data, images: imagesUrl, ownerId: uid });
        dispatch(fetchVendorBusiness());
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_COMPLETE });
        dispatch(createAlert({ message: id ? success.businessUpdated : success.businessAdded, type: 'success' }));
        dispatch(fetchVendorBusiness());
        if (!id)
            history.push('/vendor')
    } catch (error) {
        console.log("vendor error ", error)
        dispatch({ type: ACTION_TYPES.BUSINESS_ADD_FAILED })
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
    }
}
export const getBooking = () => async (dispatch, getState) => {
    // VENDOR_BOOKING_SUCCESS
    try {
        dispatch({ type: ACTION_TYPES.VENDOR_BOOKING_REQUEST });
        const { id = '' } = getState().vendor?.business;
        firestore.collection('proposals').where('vender_id', '==', id).onSnapshot(async snap => {
            const payload = snap.docs.map(quote => quote.data());
            if (payload && payload.length) {
                const eventsSnap = await firestore.collection('events').where('id', 'in', payload.map(id => id.event_id)).get();
                const events = eventsSnap.docs.map(event => event.data());
                console.log("propso  okkinggg  ", payload, events)
                dispatch({
                    type: ACTION_TYPES.VENDOR_BOOKING_SUCCESS, payload: payload.map(p => {
                        const event = events.filter(ev => ev.id === p.event_id);
                        return { ...p, event: event && event.length ? event[0] : [] }
                    })
                });
            } else dispatch({ type: ACTION_TYPES.VENDOR_BOOKING_SUCCESS, payload: [] });
        });
        setTimeout(() => {
            dispatch({ type: ACTION_TYPES.VENDOR_BOOKING_COMPLETE });
        }, 6000);
    } catch (error) {
        console.log("business catche error ", error);
        dispatch({ type: ACTION_TYPES.VENDOR_BOOKING_FAILED });
    }
}

export const getProposals = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ACTION_TYPES.PROPOSAL_REQUEST });
        const business = getState().vendor?.business;
        const { type = '', uid = '' } = getState().user?.user;
        if (type === 3 && business && (!business.id)) return
        firestore.collection('proposals').where(type === 3 ? 'business_id' : 'user_id', '==', type === 3 ? business?.id : uid)
            .onSnapshot(async snap => {
                const payload = snap.docs.map(quote => quote.data());
                console.log("..... snap data payload ", payload, checkPayload(payload))

                if (payload && payload.length) {
                    // const eventsSnap = await firestore.collection('events').where('id', 'in', payload.map(id => id.event_id)).get();
                    let uids = payload.map(id => type === 3 ? id.user_id : id.business_id);
                    // const userSnap = await firestore.collection(type === 3 ? 'users' : 'venders').where(type === 3 ? 'userId' : 'id', 'in', 
                    //  uids).get();
                    // const events = eventsSnap.docs.map(event => event.data());
                    // const owners = userSnap.docs.map(user => user.data());
                    dispatch({
                        type: ACTION_TYPES.PROPOSAL_SUCCESS, payload:
                            checkPayload(payload)
                                .map(p => {
                                    // const event = events.filter(ev => ev.id === p.event_id);
                                    let succ = type === 3 ? 'userId' : 'id', less = type === 3 ? 'user_id' : 'business_id'
                                    // const owner = owners.filter(ev => ev[succ] === p[less]);
                                    // let ow = owner[0]?owner[0]:{};
                                    // console.log("owner owner ", owner, owners, p)
                                    return {
                                        ...p,
                                        // owner: owner && owner.length ? {...ow, id:type===3?ow?.uid:ow.business_id, name:type === 3?ow?.name:ow?.business_name} : {}, 
                                        // event: event && event.length ? event[0] : [] 
                                    }
                                })
                    });
                } else dispatch({ type: ACTION_TYPES.PROPOSAL_SUCCESS, payload: [] });
            });
        setTimeout(() => {
            dispatch({ type: ACTION_TYPES.PROPOSAL_COMPLETE });
        }, 6000);
    } catch (error) {
        console.log("business catche error ", error);
        dispatch({ type: ACTION_TYPES.PROPOSAL_FAILED });
    }
}
export const setProposal = payload => async dispatch => {
    dispatch({ type: ACTION_TYPES.SET_PROPOSAL, payload })
}
const checkPayload = data => {
    let duplicates = [];
    data.forEach((el, i) => {
        if (!el.isProposal && !el.isBooked) {
            data.forEach((element, index) => {
                let proposed = null;
                if (i === index) return null;
                if (element.event_id === el.event_id && element.category_id === el.category_id) {
                    if ((element.isProposal || element.isBooked) && !element.isQuote) {
                        proposed = element;
                        if (!duplicates.includes(el)) duplicates = [...duplicates, { ...el, proposed }];
                    }
                }
            });
        }
    });
    const single = data.filter(f => {
        const ar = duplicates.map(d => d.id);
        if (ar && ar.length)
            return ar.indexOf(f.id) < 0
    })
    const array = [...duplicates, ...single];
    return array && array.length ? array.sort((a, b) => a.createdAt - b.createdAt) : data;
}
export const getVendorList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ACTION_TYPES.PROPOSAL_REQUEST });
        const { id = '' } = getState().vendor?.business;
        firestore.collection('proposals').where('business_id', '==', id).where('isBooked', '==', true)
            .onSnapshot(async snap => {
                const payload = snap.docs.map(b => b.data());
                console.log("booking >>> ", payload);
                dispatch({ type: ACTION_TYPES.PROPOSAL_COMPLETE });
                return new Promise(r => r(payload));
            })
    } catch (error) {
        dispatch({ type: ACTION_TYPES.PROPOSAL_FAILED });
        return new Promise(r => r(null));
    }
}
export const addReview = (rating, reviewText, oldId = null) => async (dispatch, getState) => {
    try {
        const { id } = getState().event?.vendor || {};
        const { uid = '' } = getState().user?.user;
        const event = getState().event?.event;
        dispatch({ type: ACTION_TYPES.REVIEW_REQUEST });
        const data = {
            rating, reviewText, businessId: id, senderId: uid, eventId: event.id
        }
        if (oldId)
            await updateOne('vendor_review', oldId, data)
        else await insert('vendor_review', data);
        dispatch({ type: ACTION_TYPES.REVIEW_SUCCESS });
        dispatch(createAlert({ message: oldId?success.ReviewUpdated: success.ReviewAdded, type: 'success' }));
        return true
    } catch (error) {
        dispatch({ type: ACTION_TYPES.REVIEW_FAILED });
        dispatch(createAlert({ message: errors.CommonApiError, type: 'error' }));
        return false
    }
}
export const getReview = () => async (dispatch, getState) => {
    try {
        const { id } = getState().event?.vendor || {};
        const { uid = '' } = getState().user?.user;
        const event = getState().event?.event;
        dispatch({ type: ACTION_TYPES.REVIEW_REQUEST });
        const snap = await firestore.collection('vendor_review').where('businessId', '==', id)
            .where('eventId', '==', event.id)
            .where('senderId', '==', uid).get();
        const rev = await snap.docs.map(doc => doc.data());
        dispatch({ type: ACTION_TYPES.REVIEW_SUCCESS });
        return rev[0];
    } catch (error) {
        dispatch({ type: ACTION_TYPES.REVIEW_FAILED });
        return null
    }
}

export const fetchMyReviews = () => async (dispatch, getState) => {
    try {
        const { id } = getState().vendor?.business || {};
        const { uid = '' } = getState().user?.user;
        const event = getState().event?.event;
        dispatch({ type: ACTION_TYPES.REVIEW_REQUEST });
        const snap = await firestore.collection('vendor_review').where('businessId', '==', id)
            // .where('eventId', '==', event.id)
            // .where('senderId', '==', uid)
            .get();
        const rev = await snap.docs.map(doc => doc.data());
        const us = await firestore.collection('users').get();
        const users = await us.docs.map(doc => doc.data());
        const reviews = rev.map(r=>({...r, user: users.filter(re=>re.userId===r.senderId)[0] }))
        dispatch({ type: ACTION_TYPES.REVIEW_SUCCESS });
        return reviews;
    } catch (error) {
        dispatch({ type: ACTION_TYPES.REVIEW_FAILED });
        return null
    }
}