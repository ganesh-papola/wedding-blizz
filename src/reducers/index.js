import { combineReducers } from 'redux';
import user from "./user";
import vendor from "./vendor";
import event from "./event";
import gift from "./gift";
import guest from "./guest";
import app from "./app";

export default combineReducers({
    user, vendor, event, gift, guest, app
  });