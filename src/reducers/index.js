import { combineReducers } from 'redux';
import user from "./user";
import auth from "./auth";
import vendor from "./vendor";
import event from "./event";
import gift from "./gift";
import guest from "./guest";

export default combineReducers({
    user, auth, vendor, event, gift, guest
  });