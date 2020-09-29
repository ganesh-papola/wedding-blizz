const format = ['_REQUEST', '_COMPLETE', '_SUCCESS', '_FAILED'];
const types = [
  'AUTH','EVENT'
];

const manuals = {
  RESET: 'RESET',
  LOG_OUT: 'LOG_OUT',
  USER_LOGGEDIN : 'USER_LOGGEDIN',
  CLOSE_ALERT : 'CLOSE_ALERT',
  CREATE_ALERT : 'CREATE_ALERT',
  SIGNUP : 'SIGNUP'

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