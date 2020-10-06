
import { auth, createProfile, resendVerificationEmail, handleFCM , notification} from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings } from 'constant';
import { createAlert } from "actions";

export const signUp = ({email,password, phone, role, fullname}) => async (dispatch, getState) => {
    console.log("state ", email, role, fullname)
    try {
        let data = getState().user;
        let userData = data?data.user:{};
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const { user={} } = await auth.createUserWithEmailAndPassword(email,password);
        const { uid} = user;
        await createProfile(uid, {userId:uid,phone,type:role,displayName:fullname, name:fullname, email});
        dispatch({ type : ACTION_TYPES.SIGNUP });
        // dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload:{ ...userData, uid, token:refreshToken, phone, name:fullname } });
        dispatch(createAlert({message:strings.success.SignupSuccess, type:'success', duration : 13000}))
    } catch (error) {
        console.log("signup catch error ", error)
        dispatch(createAlert({message:error.message, type:'error', duration : 10000}))
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
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
    }else
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    } catch (error) {
        console.log("login catch error ", error)
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
        dispatch(createAlert({message:error.message, type:'error'}))
    }
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