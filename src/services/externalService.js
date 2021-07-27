import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';

const getIPAddressFromFreeGeoIP = () => {
  return (
    axios
      .get('https://freegeoip.app/json/') // 15000/1h
      // .get('http://ip-api.com/json')
      // .get('https://api.ipify.org')
      .then(handleResponse)
      .catch(handleError)
  );
};

const getIPAddressGeoPlugin = () => {
  return axios
    .get('http://www.geoplugin.net/json.gp?ip=xx.xx.xx.xx')
    .then(handleResponse)
    .catch(handleError);
};

export default {
  getIPAddressOne: getIPAddressFromFreeGeoIP,
  getIPAddressSecond: getIPAddressGeoPlugin
};
