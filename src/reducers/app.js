
import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
    show: false,
    message: '',
    type : 'error'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ACTION_TYPES.CLOSE_ALERT:
            return { ...state, show: false, message: '' }
        case ACTION_TYPES.CREATE_ALERT:
            return { ...state, show: true, message: action.payload, type : action.typ }

        case ACTION_TYPES.RESET:
            return INITIAL_STATE
        case ACTION_TYPES.LOG_OUT:
            return INITIAL_STATE

        default:
            return state;
    }
}
