const format = ['_REQUEST', '_COMPLETE', '_SUCCESS', '_FAILED'];
const types = [
  'AUTH', 'EVENT', 'EVENT_SERVICE', 'GIFT', 'GUEST', 'GUEST_GROUP',
  'GUEST_GROUP_DEL', 'ACCOUNT_UPDATE', 'BUSINESS_ADD', 'BUSINESS',
  'IMAGE_URL', 'VENDOR_BOOKING', 'PROPOSAL', 'CHAT', 'CONVERSATION', 'GALLERY', 'REVIEW'
];

const manuals = {
  RESET: 'RESET',
  LOG_OUT: 'LOG_OUT',
  USER_LOGGEDIN: 'USER_LOGGEDIN',
  CLOSE_ALERT: 'CLOSE_ALERT',
  CREATE_ALERT: 'CREATE_ALERT',
  SIGNUP: 'SIGNUP',
  SET_EVENT_CATEGORY: 'SET_EVENT_CATEGORY',
  SET_EVENT_CATEGORIES: 'SET_EVENT_CATEGORIES',
  EVENT_VENDOR_DETAIL: 'EVENT_VENDOR_DETAIL',
  DEVICE_TOKEN: 'DEVICE_TOKEN',
  GIFTS_COMPLETE: 'GIFTS_COMPLETE',
  GUEST_GROUP_COMPLETE: 'GUEST_GROUP_COMPLETE',
  SET_POSITION: 'SET_POSITION',
  CATEGORIES: 'CATEGORIES',
  VENDOR_BOOKING: 'VENDOR_BOOKING',
  SET_PROPOSAL: 'SET_PROPOSAL',
  SET_CHAT : 'SET_CHAT',
  SET_CHAT_DETAIL:'SET_CHAT_DETAIL'
};

export default {
  ...types
    .map(t => format.map(i => `${t}${i}`))
    .flat(1)
    .reduce((obj, v) => {
      obj[v] = v;
      return obj;
    }, {}),
  ...manuals,
};