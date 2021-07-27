import aTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function memberReducer(
  state = initialState.adminUserInfo,
  action
) {
  switch (action.type) {
    case aTypes.GET_MEMBERS_SUCCESS:
      return {
        ...action.data
      };
    case aTypes.ACTIVATE_ADMIN_USER_SUCCESS:
    case aTypes.DEACTIVATE_ADMIN_USER_SUCCESS:
    case aTypes.UNLOCK_ADMIN_USER_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.userID === action.data.userID) {
            return {
              ...i,
              status: action.data.status,
              statusText: action.data.statusText
            };
          }
          return i;
        })
      };
    default:
      return state;
  }
}
