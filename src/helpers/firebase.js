import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";
import "firebase/functions";
import { strings, ACTION_TYPES } from "constant";
import { store } from "store";
import {createAlert} from "actions";
const { errors } = strings;
const {
    REACT_APP_BUCKET, REACT_APP_FIRE_API, REACT_APP_FIRE_AUTH_DOMAIN, REACT_APP_FIRE_DB,
    REACT_APP_ID, REACT_APP_MEASERID, REACT_APP_PID, REACT_APP_SENDER_ID, REACT_APP_CONFIRMATION_EMAIL_REDIRECT
} = process.env;
const firebaseConfig = {
    apiKey: REACT_APP_FIRE_API,
    authDomain: REACT_APP_FIRE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIRE_DB,
    projectId: REACT_APP_PID,
    storageBucket: REACT_APP_BUCKET,
    messagingSenderId: REACT_APP_SENDER_ID,
    appId: REACT_APP_ID,
    measurementId: REACT_APP_MEASERID
};
export let auth;
export let firestore;
export let messaging;
export let functions;
export const firebaseInit = () => {
    firebase.initializeApp(firebaseConfig);
    firestore = firebase.firestore();
    auth = firebase.auth();
    messaging = firebase.messaging();
    functions = firebase.functions();
    setListners();
}
export const registerServiceWorker = async () => {
    try {
        if ("serviceWorker" in navigator) {
            await navigator.serviceWorker.register("./firebase-messaging-sw.js");
        }
    } catch (error) {
        console.log("Service worker registration failed, error:", error);
    }
};
export const handleFCM = async(token, uid, action='add') => {
    if (token) {
        let tokens = [];
        const user = await findById('users', uid);
        const { fcm = [] } = user.data();
        
        if (action === 'add')
            if (fcm.indexOf(token) > -1) return;
            else tokens = [...fcm, token];
        else tokens = fcm.filter(tkn => tkn !== token);
        updateOne('users', uid, { fcm: tokens })
    }
}
export const notification = async (uid) => {
    const { dispatch } = store;
    try {
        await Notification.requestPermission();
        const payload = await messaging.getToken();
        console.log('token: notification notification', payload);
        if(payload){
            dispatch({type: ACTION_TYPES.DEVICE_TOKEN, payload});
            handleFCM(payload, uid);
        }
        messaging.onMessage(notification => {
            handleMessages(notification)
        });
    } catch (error) {
        console.log("notification ", error);
        dispatch(createAlert({message : error.message, type:'error'}));
    }
}
export const sendPush = data =>{
    const notification =  functions.httpsCallable('notifications');
    console.log("notification send ")
    return notification(data);
}
const handleMessages = (notification) => {
    console.log("on notification ", notification)
}
let userDB = uid => firestore.doc(`users/${uid}`);


export const createProfile = async (uid, user) => {
    if (!uid)
        throw errors.NoUid
    const createdAt = new Date().getTime();
    const snapShot = await userDB(uid).get();
    if (!snapShot.exists)
        userDB(uid).set({ ...user, createdAt });
    let currentUser = firebase.auth().currentUser;
    await currentUser.sendEmailVerification({ url: REACT_APP_CONFIRMATION_EMAIL_REDIRECT });
    currentUser.updateProfile({ ...user, createdAt, modifiedAt: createdAt });
}
export const resendVerificationEmail = async () => {
    let currentUser = firebase.auth().currentUser;
    await currentUser.sendEmailVerification({ url: REACT_APP_CONFIRMATION_EMAIL_REDIRECT });
}
export const setListners = async () => {
    if (auth)
        auth.onAuthStateChanged(async user => {
            if (user && user.emailVerified) {
                const { getState, dispatch } = store;
                const data = getState().user;
                const { displayName, uid, email, refreshToken } = user;
                const snapshot = (await userDB(uid).get()).data();
                if (data.user)
                    dispatch({
                        type: ACTION_TYPES.AUTH_COMPLETE,
                        payload: { ...data.user, uid, name: displayName, email, token: refreshToken, ...snapshot }
                    });
            }
        })
}
export const uploadImages = (collection,images = []) => {
    try {
        return Promise.all(images.map(async image => {
            const name = `${new Date().getTime()}-${image.name}`;
            const ref = firebase.storage().ref(`${collection}`);
            const snapshot = await ref.child(name).put(image);
            // return await snapshot.ref.getDownloadURL();
            return `${collection}/${name}`;
        }))
    } catch (error) {
        console.log("upload catch error ", error);
        return []
    }
}
export const imagePathToUrl = async (path) => {
    if (path)
        return firebase.storage().ref().child(path).getDownloadURL();
    return null
}
export const find = async (collection, uid = '', query = {}) => {

}
export const findById = (collection,id) => {
  return firestore.collection(collection).doc(id).get();
}
export const insert = async (collection, data) => {
    const { id = '' } = await firestore.collection(collection).doc();
    const createdAt = new Date().getTime();
    const modifiedAt = new Date().getTime();
    return firestore.collection(collection).doc(id).set({ id,createdAt,modifiedAt, isDeleted:false, ...data })
};
export const updateOne = (collection, id, data) => {
    if(!collection || !id || !data)
     throw {message:errors.commandKeysMissing}
    firestore.collection(collection).doc(id).update({...data, modifiedAt : new Date().getTime()});
}