import apiAction from './apiStatusActions';
import pService from '../../services/partnerService';
import aTypes from './actionTypes';

// #region Get Partners
const getPartnersSuccess = (data) => {
  return {
    type: aTypes.GET_PARTNERS_SUCCESS,
    data
  };
};
const getPartners = (searchParam) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.getPartners(searchParam);
      if (res.isSuccess) dispatch(getPartnersSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region ACTIVATE_PARTNER
function activateAccountSuccess(data) {
  return {
    type: aTypes.ACTIVATE_PARTNER_SUCCESS,
    data
  };
}
const activateAccount = (partnerID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.activatePartner(partnerID);
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

// #region DEACTIVATE_PARTNER
function deactivateAccountSuccess(data) {
  return {
    type: aTypes.DEACTIVATE_PARTNER_SUCCESS,
    data
  };
}
const deactivateAccount = (partnerID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.deactivatePartner(partnerID);
      if (res.isSuccess) dispatch(deactivateAccountSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region UNLOCK_PARTNER
function unlockAccountSuccess(data) {
  return {
    type: aTypes.UNLOCK_PARTNER_SUCCESS,
    data
  };
}
const unlockAccount = (partnerID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.unlockAccount(partnerID);
      if (res.isSuccess) dispatch(unlockAccountSuccess(res.data));
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
  getPartners,
  activateAccount,
  deactivateAccount,
  unlockAccount
};
