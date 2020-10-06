

import { ACTION_TYPES } from 'constant';

export const closeAlert = () => dispatch => {
    dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
}
export const createAlert = ({message, type, duration=8000, extra={}}) => dispatch => {
    dispatch({ type : ACTION_TYPES.CREATE_ALERT, payload : message, typ:type, extra });
    setTimeout(() => {
        dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
    }, duration);
}