import apiAction from './apiStatusActions';
import { storeLoginUser, removeLoginUser } from '../../helpers/storageHelper';
import authService from '../../services/authService';
import aTypes from './actionTypes';

// #region Login
function getLoginSuccess(user) {
  return {
    type: aTypes.GET_LOGIN_SUCCESS,
    user
  };
}
function login(data) {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await authService.login(data);
      if (!res.isSuccess) dispatch(apiAction.endApiCall());
      else if (!res.data.isGaActivated) {
        const user = storeLoginUser(res.data, false);
        dispatch(getLoginSuccess(user));
      } else dispatch(getLoginSuccess(res.data));
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
}

function clearLoginInfoSuccess() {
  return {
    type: aTypes.CLEAR_LOGIN_INFO,
    user: {}
  };
}
function clearLoginInfo() {
  return (dispatch) => {
    return dispatch(clearLoginInfoSuccess());
  };
}
// #endregion

// #region Logout
function logoutSuccess() {
  return {
    type: aTypes.GET_LOGOUT_SUCCESS,
    user: {}
  };
}
function profileClearSuccess() {
  return {
    type: aTypes.GET_MY_PROFILE_SUCCESS,
    myProfile: {}
  };
}
function logout() {
  return (dispatch) => {
    dispatch(apiAction.beginApiCall());
    removeLoginUser();
    return setTimeout(() => {
      dispatch(logoutSuccess());
      dispatch(profileClearSuccess());
    }, 1000);
  };
}
// #endregion

export default {
  login,
  logout,
  clearLoginInfo
};
