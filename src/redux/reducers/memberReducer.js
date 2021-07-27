import aTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function memberReducer(state = initialState.memberInfo, action) {
  switch (action.type) {
    case aTypes.GET_MEMBERS_SUCCESS:
      return {
        ...action.data
      };
    case aTypes.VERIFY_MEMBER_SUCCESS:
    case aTypes.SUSPEND_MEMBER_SUCCESS:
    case aTypes.ARCHIVE_MEMBER_SUCCESS:
    case aTypes.ACTIVATE_MEMBER_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.memberID === action.data.memberID) {
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
