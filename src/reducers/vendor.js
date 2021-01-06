import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  _loader : false,
  business : null,
  booking : [],
  bloader : false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ACTION_TYPES.BUSINESS_REQUEST:
      return { ...state, loader: true }
    case ACTION_TYPES.BUSINESS_COMPLETE:
      return { ...state, loader: false }
    case ACTION_TYPES.BUSINESS_SUCCESS:
      return { ...state, loader: false, business : action.payload }
    case ACTION_TYPES.BUSINESS_FAILED:
      return { ...state, loader: false }

    case ACTION_TYPES.BUSINESS_ADD_REQUEST:
      return { ...state, _loader: true }
    case ACTION_TYPES.BUSINESS_ADD_COMPLETE:
      return { ...state, _loader: false }
    case ACTION_TYPES.BUSINESS_ADD_FAILED:
      return { ...state, _loader: false }

      case ACTION_TYPES.VENDOR_BOOKING_SUCCESS:
        return {...state, bloader : false, booking : action.payload}

    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}