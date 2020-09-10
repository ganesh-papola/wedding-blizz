const format = ['_REQUEST', '_COMPLETE', '_FAILED'];
const types = [
  'LOGIN',
];

const manuals = {
  RESET: 'RESET',
  LOG_OUT: 'LOG_OUT',
  USER_LOGGEDIN : 'USER_LOGGEDIN'

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