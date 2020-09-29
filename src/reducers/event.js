import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  events: [],
  event: {}
};

export default function event(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGGEDIN:
      return { ...state, isLoggedIn: true }

    case ACTION_TYPES.EVENT_REQUEST:
      return { ...state, loader: true }
    case ACTION_TYPES.EVENT_COMPLETE:
      return { ...state, loader: false, event: action.payload }
      case ACTION_TYPES.EVENT_SUCCESS:
        return { ...state, loader: false }
    case ACTION_TYPES.EVENT_FAILED:
      return { ...state, loader: false }

    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}