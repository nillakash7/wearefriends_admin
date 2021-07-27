import { getLoginUser } from '../../helpers/storageHelper';
import aTypes from '../actions/actionTypes';

const user = getLoginUser();

export default function authReducer(state = user, action) {
  switch (action.type) {
    case aTypes.GET_LOGIN_SUCCESS:
      return {
        ...action.user
      };

    case aTypes.CLEAR_LOGIN_INFO:
    case aTypes.GET_LOGOUT_SUCCESS:
      return {
        ...action.user
      };

    case aTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        ...action.userInfo,
        roleID: action.userInfo.userRoleID
      };

    default:
      return {
        ...state
      };
  }
}
