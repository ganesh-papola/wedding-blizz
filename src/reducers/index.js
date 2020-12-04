import { combineReducers } from 'redux';
import user from "./user";
import vendor from "./vendor";
import event from "./event";
import gift from "./gift";
import guest from "./guest";
import app from "./app";
import proposal from "./proposal";
import chat from "./chat";

export default combineReducers({
    user, vendor, event, gift, guest, app, proposal, chat
  });