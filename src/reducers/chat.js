
import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
    loader: false,
    _loader: false,
    conversation: [],
    chats: {},
    detail: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ACTION_TYPES.CONVERSATION_REQUEST:
            return { ...state, loader: true }
        case ACTION_TYPES.CONVERSATION_COMPLETE:
            return { ...state, loader: false }
        case ACTION_TYPES.CONVERSATION_SUCCESS:
            return { ...state, loader: false, conversation: action.payload }
        case ACTION_TYPES.CHAT_REQUEST:
            return { ...state, _loader: true}
        case ACTION_TYPES.CHAT_SUCCESS:
            return { ...state, _loader: false, chats: action.payload }
        case ACTION_TYPES.CHAT_FAILED:
            return { ...state, _loader: false}
        case ACTION_TYPES.SET_CHAT_DETAIL:
            return {...state, detail: action.payload}
        case ACTION_TYPES.CONVERSATION_FAILED:
            return { ...state, loader: false }

        case ACTION_TYPES.RESET:
            return INITIAL_STATE
        case ACTION_TYPES.LOG_OUT:
            return INITIAL_STATE

        default:
            return state;
    }
}
