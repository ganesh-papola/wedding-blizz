import { combineReducers } from 'redux';
import user from "./user";
import vendor from "./vendor";
import event from "./event";
import gift from "./gift";
import guest from "./guest";

export default combineReducers({
    user, vendor, event, gift, guest
  });