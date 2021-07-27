import apiAction from './apiStatusActions';
import dService from '../../services/dashboardService';
import aTypes from './actionTypes';

// #region Get Members
function getLoggedInUserInfoSuccess(data) {
  return {
    type: aTypes.GET_USER_INFO_SUCCESS,
    userInfo: data
  };
}
const getLoggedInUserInfo = () => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await dService.getLoggedInUserInfo();
      if (res.isSuccess) dispatch(getLoggedInUserInfoSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

export default {
  getLoggedInUserInfo
};
