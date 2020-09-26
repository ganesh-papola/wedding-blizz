
import { auth, createProfile } from "helpers";
import { history } from "../App";
import { ACTION_TYPES } from 'constant';

export const closeAlert = () => dispatch => {
    dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
}
export const createAlert = (message, type, timer=7000) => dispatch => {
    dispatch({ type : ACTION_TYPES.CREATE_ALERT, payload : message, typ:type });
    setTimeout(() => {
        dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
    }, timer);
}