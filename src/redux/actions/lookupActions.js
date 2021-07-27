import aTypes from './actionTypes';
import apiAction from './apiStatusActions';
import lService from '../../services/lookupService';

function getCountriesSuccess(countries) {
  return {
    type: aTypes.GET_COUNTRIES_SUCCESS,
    countries: countries.map((c) => {
      return {
        ...c,
        url: c.flagUrl
      };
    })
  };
}

const getCountries = () => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await lService.getCountries();
      if (res.isSuccess) dispatch(getCountriesSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return undefined;
    } catch (error) {
      dispatch(apiAction.endApiCall(error));
      return error;
    }
  };
};

export default {
  getCountries
};
