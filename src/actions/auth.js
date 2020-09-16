
import { ACTION_TYPES } from 'constant';

export const signUp = (state,push) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        setTimeout(() => {
            // push&&push('/home');
            dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload : {} });
        }, 3000);
    } catch (error) {
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    }
}
export const login = (state,push) => async dispatch => {
    try {
        dispatch({ type : ACTION_TYPES.AUTH_REQUEST });
        setTimeout(() => {
            // push&&push('/home');
            dispatch({ type : ACTION_TYPES.AUTH_COMPLETE, payload : {} });
        }, 3000);
    } catch (error) {
        dispatch({ type : ACTION_TYPES.AUTH_FAILED });
    }
}