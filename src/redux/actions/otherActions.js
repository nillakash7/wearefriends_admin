import { beginApiCall, endApiCall, apiCallError } from './apiStatusActions';
import mService from '../../services/otherService';
// import { GET_GLOBAL_SEARCH_SUCCESS } from './actionTypes';

const globalSearch = (keyword) => {
  return async (dispatch) => {
    dispatch(beginApiCall());
    try {
      const res = await mService.globalSearch(keyword);
      dispatch(endApiCall());
      return res;
    } catch (error) {
      dispatch(apiCallError(error));
      return error;
    }
  };
};

const getNotifications = () => {
  return async (dispatch) => {
    dispatch(beginApiCall());
    try {
      const res = await mService.getNotifications();
      dispatch(endApiCall());
      return res;
    } catch (error) {
      dispatch(apiCallError(error));
      return error;
    }
  };
};

export default {
  globalSearch,
  getNotifications
};
