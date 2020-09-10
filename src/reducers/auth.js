import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
    loader: false
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_REQUEST:
            return { ...state, loader: true }
        case ACTION_TYPES.LOGIN_COMPLETE:
            return { ...state, loader: false }
        case ACTION_TYPES.LOGIN_FAILED:
            return { ...state, loader: false }

        case ACTION_TYPES.RESET:
            return INITIAL_STATE
        case ACTION_TYPES.LOG_OUT:
            return INITIAL_STATE

        default:
            return state;
    }
}