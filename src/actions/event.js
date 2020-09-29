
import { auth, insert } from "helpers";
import { history } from "../App";
import { ACTION_TYPES, strings } from 'constant';
import { createAlert } from "actions";

export const addEvent = (state) => async (dispatch, getState) => {
    console.log("add event ",state)
    try {
        dispatch({ type : ACTION_TYPES.EVENT_REQUEST });
        const event = await insert('events', state);
        dispatch({ type : ACTION_TYPES.EVENT_SUCCESS });
        dispatch(createAlert(strings.success.EventAddedSuccussful, 'success'))
    } catch (error) {
        console.log("add event catch error ", error)
        dispatch({ type : ACTION_TYPES.EVENT_FAILED });
        dispatch(createAlert(error.message, 'error'))
    }
}
