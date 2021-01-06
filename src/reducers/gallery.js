import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  images: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ACTION_TYPES.GALLERY_REQUEST:
      return { ...state, loader: true }
    case ACTION_TYPES.GALLERY_COMPLETE:
      return { ...state, loader: false }
    case ACTION_TYPES.GALLERY_SUCCESS:
      return { ...state, loader: false, images: action.payload }
    case ACTION_TYPES.GALLERY_FAILED:
      return { ...state, loader: false }

    case ACTION_TYPES.RESET:
      return INITIAL_STATE
    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}