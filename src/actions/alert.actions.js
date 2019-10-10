import {
  alertConstants,
} from '../constants';


function success(message) {
  return {
    type: alertConstants.SUCCESS,
    message,
  };
}

function error(message) {
  return {
    type: alertConstants.ERROR,
    message,
  };
}

function clear() {
  return {
    type: alertConstants.CLEAR,
  };
}

// eslint-disable-next-line no-undef
export default alertActions = {
  success,
  error,
  clear,
};
