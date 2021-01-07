import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  _loader: false,
  events: [],
  event: {},
  category: null,
  categories: [],
  vendor: null,
  rloader: false
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

    case ACTION_TYPES.EVENT_SERVICE_REQUEST:
      return { ...state, _loader: true }
    case ACTION_TYPES.EVENT_SERVICE_SUCCESS:
      return { ...state, _loader: false }
    case ACTION_TYPES.EVENT_SERVICE_FAILED:
      return { ...state, _loader: false }

    case ACTION_TYPES.SET_EVENT_CATEGORY:
      return { ...state, category: action.payload }
    case ACTION_TYPES.SET_EVENT_CATEGORIES:
      return { ...state, categories: action.payload }
    case ACTION_TYPES.EVENT_VENDOR_DETAIL:
      return { ...state, vendor: action.payload }

    case ACTION_TYPES.REVIEW_REQUEST:
      return { ...state, rloader: true }
    case ACTION_TYPES.REVIEW_SUCCESS:
      return { ...state, rloader: false }
    case ACTION_TYPES.REVIEW_FAILED:
      return { ...state, rloader: false }

    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}