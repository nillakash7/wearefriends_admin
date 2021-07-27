import aTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function partnerReducer(
  state = initialState.partnerInfo,
  action
) {
  switch (action.type) {
    case aTypes.GET_PARTNERS_SUCCESS:
      return {
        ...action.data
      };
    case aTypes.ACTIVATE_PARTNER_SUCCESS:
    case aTypes.DEACTIVATE_PARTNER_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.partnerID === action.data.partnerID) {
            return {
              ...i,
              categoryID: action.data.categoryID,
              categoryText: action.data.categoryText
            };
          }
          return i;
        })
      };
    case aTypes.UNLOCK_PARTNER_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.partnerID === action.data.partnerID) {
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
