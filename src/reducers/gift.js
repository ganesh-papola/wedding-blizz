import loader from 'components/common/loader';
import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  gifts: [],
  gift: {}
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.GIFT_REQUEST:
      return { ...state, loader: true }
    case ACTION_TYPES.GIFT_SUCCESS:
      return { ...state, loader: false }
    case ACTION_TYPES.GIFT_COMPLETE:
      return { ...state, loader: false, gift : action.payload }
   case ACTION_TYPES.GIFTS_COMPLETE:
        return { ...state, loader: false, gifts : action.payload }
    case ACTION_TYPES.GIFT_FAILED:
      return { ...state, loader: false }
    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}