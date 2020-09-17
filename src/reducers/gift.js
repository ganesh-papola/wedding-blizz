import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
    loader : false,
    gifts:[],
    gift:{}
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGGEDIN:
      return { ...state, isLoggedIn: true }

    case ACTION_TYPES.RESET:
      return INITIAL_STATE

    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE

    default:
      return state;
  }
}