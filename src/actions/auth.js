
import { auth, createProfile, resendVerificationEmail, handleFCM , notification, updateOne, firestore } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings } from 'constant';
import { createAlert } from "actions";

export const signUp = ({email,password, phone, role, fullname}) => async (dispatch, getState) => {
    console.log("state ", email, role, fullname)
    try {
        let roles = [role];
        let data = getState().user;
        let userData = data?data.user:{};
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const { user={} } = await auth.createUserWithEmailAndPassword(email,password);
        const { uid} = user;
        const snap =  await firestore.collection('guest_users').where('email','==',email).get();
        const guest = snap.docs.map(it=>it.data());
        if(guest&&guest.length) roles = [...new Set([...roles,2])];
        await createProfile(uid, {userId:uid,phone,type:roles,displayName:fullname, name:fullname, email});
        notification(uid);
        dispatch({ type : ACTION_TYPES.SIGNUP });
        dispatch(createAlert({message:strings.success.SignupSuccess, type:'success', duration : 13000}));
        return true
    } catch (error) {
        console.log("signup catch error ", error)
        dispatch(createAlert({message:error.message, type:'error', duration : 10000}))
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
        return true
    }
}
const resendEmailVerification = () => async dispatch=> {
    try {
        await resendVerificationEmail();
        dispatch(createAlert({message:strings.success.verificationEmailSent, type:'success'}))
    } catch (error) {
        dispatch(createAlert({message:error.message, type:'error'}))
    }
}

export const login = ({email,password}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const {user={}} = await auth.signInWithEmailAndPassword(email, password);
        const { uid, refreshToken, displayName, emailVerified} = user;
        if(uid&&refreshToken){
            if(emailVerified){
          let data = getState().user;
          let userData = data?data.user:{};
          notification(uid);
          history.push('/');
          dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload:{...userData, name:displayName, email:user.email,uid,token:refreshToken} });
        }else{
            dispatch({ type : ACTION_TYPES.AUTH_FAILED });
            dispatch(createAlert({message:strings.errors.emailNotVerified, type:'error', duration:25000, extra:{
                label : strings.common.Resend,
                action : ()=>dispatch(resendEmailVerification())
            }}));
        }
        dispatch(getPosition());
    }else dispatch({ type : ACTION_TYPES.AUTH_FAILED });
        return true
    } catch (error) {
        console.log("login catch error ", error)
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}));
        return true
    }
}
export const getPosition = () => dispatch => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
        dispatch({ type : ACTION_TYPES.SET_POSITION, payload : coords });
    },
    error => {
        console.log("position error ", error)
    })
}
export const logout = () => async (dispatch, getState) =>{
    const {user:{uid}, fcm=''} = getState().user;
    dispatch({ type : ACTION_TYPES.RESET });
    setTimeout(() => {
        handleFCM(fcm, uid, 'remove')
    }, 500);
    setTimeout(async() => {
        auth.signOut();       
    }, 1000);
}

export const onForgotPassword = (email) => async dispatch => {
    try {
        auth.sendPasswordResetEmail(email);
        dispatch(createAlert({message:strings.success.ForgotPassword, type:'success'}))
    } catch (error) {
        dispatch(createAlert({ message : error.message, type:'error' }));
        console.log("forgot catch error ", error)
    }
}
export const updateUser = (state) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.ACCOUNT_UPDATE_REQUEST });
        const {user:{uid=''}} = getState().user;
        const update = await updateOne('users',uid,state);
        dispatch(fetchUser());
        dispatch({ type : ACTION_TYPES.ACCOUNT_UPDATE_COMPLETE });
        dispatch(createAlert({message:strings.success.profileUpdateSuccess, type:'success'}));
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type : ACTION_TYPES.ACCOUNT_UPDATE_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}))
    }
}
const fetchUser = () => async (dispatch, getState) => {
    const {user={}} = getState().user;
    const data = await firestore.collection('users').where('userId', '==', user.uid).get();
    const obj = data&&data.docs&&data.docs.length?data.docs.map(item=>item.data()):[];
    let payload = obj&&obj.length?obj[0]:{};
    dispatch({type : ACTION_TYPES.AUTH_COMPLETE, payload : {...user, ...payload} })
}