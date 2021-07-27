import aTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.bgData, action) {
  switch (action.type) {
    case aTypes.GET_IP_ADDRESS:
      return {
        ...state,
        ...action.data,
        ipAddress: action.data.ipAddress,
        countryName: action.data.countryName
      };

    default:
      return state;
  }
}
