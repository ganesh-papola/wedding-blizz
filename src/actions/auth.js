
import { auth, createProfile } from "helpers";
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
        dispatch(createAlert(strings.success.SignupSuccess, 'success', 13000))
    } catch (error) {
        console.log("signup catch error ", error)
        dispatch(createAlert(error.message, 'error',10000))
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    }
}
export const login = ({email,password}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const {user={}} = await auth.signInWithEmailAndPassword(email, password);
        const { uid, refreshToken, displayName} = user;
        if(uid&&refreshToken){
          let data = getState().user;
          let userData = data?data.user:{};
          history.push('/');
          dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload:{...userData, name:displayName, email:user.email,uid,token:refreshToken} });
        }else
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    } catch (error) {
        console.log("login catch error ", error)
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
        dispatch(createAlert(error.message, 'error'))
    }
}

export const logout = () => async dispatch =>{
    auth.signOut();
    dispatch({ type : ACTION_TYPES.RESET });
}

export const onForgotPassword = (email) => async dispatch => {
    try {
        auth.sendPasswordResetEmail(email);
        dispatch(createAlert(strings.success.ForgotPassword, 'success'))
    } catch (error) {
        dispatch(createAlert(error.message, 'error'));
        console.log("forgot catch error ", error)
    }
}