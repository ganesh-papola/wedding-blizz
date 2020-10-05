import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { strings, ACTION_TYPES } from "constant";
import { store } from "store";
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
export const firebaseInit = () => {
    firebase.initializeApp(firebaseConfig);
    firestore = firebase.firestore();
    auth = firebase.auth();
    setListners()
}
let userDB = uid => firestore.doc(`users/${uid}`);

export const insert = async (collection, data) => {
    const {id=''} = await firestore.collection(collection).doc();
    firestore.collection(collection).doc(id).set({id,...data})
};

export const createProfile = async (uid, user) => {
    if (!uid)
        throw errors.NoUid
    const createdAt = new Date().getTime();
    const snapShot = await userDB(uid).get();
    if (!snapShot.exists)
    userDB(uid).set({ ...user, createdAt });
    let currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({ ...user, createdAt, modifiedAt: createdAt })
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
export const uploadImages = (images=[]) => {
    try {
        return Promise.all(images.map(async image => {
            const name = `${new Date().getTime()}-${image.name}`;
            const ref = firebase.storage().ref(`events`);
            const snapshot = await ref.child(name).put(image);
            // return await snapshot.ref.getDownloadURL();
            return `events/${name}`;
        }) )
    } catch (error) {
        console.log("upload catch error ", error);
        return []
    }
}
export const imagePathToUrl = async (path) => {
    if(path)
    return firebase.storage().ref().child(path).getDownloadURL();
    return null
}
export const retrieve = async (collection, uid='', query={}) =>{

}