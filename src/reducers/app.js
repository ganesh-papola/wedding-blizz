
import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
    show: false,
    message: '',
    type : 'error',
    extra : {},
    categories:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ACTION_TYPES.CLOSE_ALERT:
            return { ...state, show: false, message: '' }
        case ACTION_TYPES.CREATE_ALERT:
            return { ...state, show: true, message: action.payload, type : action.typ, extra : action.extra }
        case ACTION_TYPES.SET_POSITION : 
            return { ...state, position : action.payload}
        case ACTION_TYPES.CATEGORIES :
            return { ...state, categories : action.payload }
        case ACTION_TYPES.RESET:
            return INITIAL_STATE
        case ACTION_TYPES.LOG_OUT:
            return INITIAL_STATE

        default:
            return state;
    }
}
