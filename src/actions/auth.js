
import { auth, createProfile } from "helpers";
import { history } from "../App";
import { ACTION_TYPES } from 'constant';

export const signUp = ({email,password, phone, fullname}) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const { user={} } = await auth.createUserWithEmailAndPassword(email,password);
        const { uid, refreshToken} = user;
        await createProfile(uid, {phone, displayName:fullname, name:fullname, email});
        dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload:{ uid, token:refreshToken, phone, name:fullname } });
        // history.push('/');
    } catch (error) {
        console.log("signup catch error ", error)
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    }
}
export const login = ({email,password}) => async (dispatch, getState) => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        const {user={}} = await auth.signInWithEmailAndPassword(email, password);
        const { uid, refreshToken} = user;
        if(uid&&refreshToken){
          let data = getState().user;;
          let userData = data?data.user:{};
          dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload:{...userData, email:user.email,uid,token:refreshToken} });
        }else
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    } catch (error) {
        console.log("login catch error ", error)
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    }
}

export const logout = () => async dispatch =>{
    auth.signOut();
    dispatch({ type : ACTION_TYPES.RESET });
}