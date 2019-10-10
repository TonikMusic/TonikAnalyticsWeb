/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import authConstants from '../constants/auth.constants';
import authService from '../services/auth.service';
import alertActions from './alert.actions';
import history from '../helpers/history';

// LOGIN ACTION
function login(email, password) {
  return (dispatch) => {
    dispatch(request({
      email,
    }));

    authService.login(email, password)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request(user) {
    return {
      type: authConstants.LOGIN_REQUEST,
      user,
    };
  }

  function success(user) {
    return {
      type: authConstants.LOGIN_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: authConstants.LOGIN_FAILURE,
      error,
    };
  }
}

// LOGOUT SERVICE
function logout() {
  authService.logout();
  return {
    type: authConstants.LOGOUT,
  };
}


// SIGNUP ACTION
function signup(user) {
  return (dispatch) => {
    dispatch(request(user));

    authService.signup(user)
      .then(
        // eslint-disable-next-line no-unused-vars
        (_user) => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Successful Signup'));
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request(user) {
    return {
      type: authConstants.REGISTER_REQUEST,
      user,
    };
  }

  function success(user) {
    return {
      type: authConstants.REGISTER_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: authConstants.REGISTER_FAILURE,
      error,
    };
  }
}

// eslint-disable-next-line no-undef
export default userActions = {
  login,
  logout,
  signup,
};
