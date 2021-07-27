import aTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function lookupReducer(state = initialState.lookupData, action) {
  switch (action.type) {
    case aTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.countries
      };

    default:
      return state;
  }
}
