import apiAction from './apiStatusActions';
import mService from '../../services/memberService';
import aTypes from './actionTypes';

// #region Get Members
const getMembersSuccess = (data) => {
  return {
    type: aTypes.GET_MEMBERS_SUCCESS,
    data
  };
};
const getMembers = (searchParam) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await mService.getMembers(searchParam);
      dispatch(getMembersSuccess(res.data));
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region VERIFY_MEMBER
function verifyAccountSuccess(data) {
  return {
    type: aTypes.VERIFY_MEMBER_SUCCESS,
    data
  };
}
const verifyAccount = (memberID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await mService.verifyAccount(memberID);
      if (res.isSuccess) dispatch(verifyAccountSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region SUSPEND_MEMBER
function suspendAccountSuccess(data) {
  return {
    type: aTypes.SUSPEND_MEMBER_SUCCESS,
    data
  };
}
const suspendAccount = (memberID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await mService.suspendAccount(memberID);
      if (res.isSuccess) dispatch(suspendAccountSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region ARCHIVE_MEMBER
function archiveAccountSuccess(data) {
  return {
    type: aTypes.ARCHIVE_MEMBER_SUCCESS,
    data
  };
}
const archiveAccount = (memberID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await mService.archiveAccount(memberID);
      if (res.isSuccess) dispatch(archiveAccountSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region SUSPEND_MEMBER
function activateAccountSuccess(data) {
  return {
    type: aTypes.ACTIVATE_MEMBER_SUCCESS,
    data
  };
}
const activateAccount = (memberID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await mService.activateAccount(memberID);
      if (res.isSuccess) dispatch(activateAccountSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #endregion
export default {
  getMembers,
  verifyAccount,
  suspendAccount,
  archiveAccount,
  activateAccount
};
