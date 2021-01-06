import { ACTION_TYPES } from 'constant';
const INITIAL_STATE = {
  loader: false,
  proposals : [],
  proposal : null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ACTION_TYPES.PROPOSAL_REQUEST:
        return {...state, loader : true }
      case ACTION_TYPES.PROPOSAL_COMPLETE:
        return {...state, loader : false}
      case ACTION_TYPES.PROPOSAL_SUCCESS:
        return {...state, loader : false, proposals : action.payload}
      case ACTION_TYPES.PROPOSAL_FAILED:
        return {...state, loader : false}
      case ACTION_TYPES.SET_PROPOSAL:
        return {...state, proposal : action.payload}
    case ACTION_TYPES.RESET:
        return INITIAL_STATE
  
      case ACTION_TYPES.LOG_OUT:
        return INITIAL_STATE
  
      default:
        return state;
  }
}