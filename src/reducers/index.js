import { combineReducers } from 'redux';
import user from "./user";
import auth from "./auth";
import vendor from "./vendor";

export default combineReducers({
    user, auth, vendor
  });