import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  _loader: false,
  guests: [],
  groups: []
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGGEDIN:
      return { ...state, isLoggedIn: true }

    case ACTION_TYPES.GUEST_REQUEST:
      return { ...state, loader: true }
    case ACTION_TYPES.GUEST_SUCCESS:
      return { ...state, loader: false }
    case ACTION_TYPES.GUEST_COMPLETE:
      return { ...state, loader : false, _loader : false, guests : action.payload }
    case ACTION_TYPES.GUEST_FAILED:
      return { ...state, loader: false }
    case ACTION_TYPES.GUEST_GROUP_COMPLETE:
      return { ...state, _loader: false, loader: false, groups: action.payload }

    case ACTION_TYPES.GUEST_GROUP_REQUEST:
      return { ...state, _loader: true }
    case ACTION_TYPES.GUEST_GROUP_FAILED:
      return { ...state, _loader: false, loader: false }

    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}