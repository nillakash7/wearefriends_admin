import appHttp from './httpService';

// eslint-disable-next-line import/prefer-default-export
const getCountries = (countryID) => {
  let url = '/Lookup/GetCountries';
  if (countryID) url += `/${countryID}`;

  return appHttp.get(url);
};

// export const getTitlesApi = () => {
//   return axiosClient
//     .get('/lookup/someThings')
//     .then(handleResponse)
//     .catch(handleError);
// };

export default {
  getCountries
};
