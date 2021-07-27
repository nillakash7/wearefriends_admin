import bgService from '../../services/externalService';
import aTypes from './actionTypes';
import apiAction from './apiStatusActions';
// import { beginApiCall, apiCallError } from './apiStatusActions';

function parseFreeGeoIP(res) {
  // "ip":"103.91.147.14","country_code":"BD","country_name":"Bangladesh","region_code":"C","region_name":"Dhaka Division","city":"Dhaka","zip_code":"1203","time_zone":"Asia/Dhaka","latitude":23.7415,"longitude":90.4276,"metro_code":0
  return {
    ipAddress: res.ip,
    countryName: res.country_name
  };
}

function parseGeoPluginIP(res) {
  // { "geoplugin_request": "103.91.147.14", "geoplugin_status": 200, "geoplugin_delay": "2ms", "geoplugin_credit": "Some of the returned data includes GeoLite data created by MaxMind, available from <a href='http://www.maxmind.com'>http://www.maxmind.com</a>.", "geoplugin_city": "Dhaka", "geoplugin_region": "Dhaka Division", "geoplugin_regionCode": "13","geoplugin_regionName": "Dhaka", "geoplugin_areaCode": "", "geoplugin_dmaCode": "", "geoplugin_countryCode": "BD", "geoplugin_countryName": "Bangladesh", "geoplugin_inEU": 0, "geoplugin_euVATrate": false, "geoplugin_continentCode": "AS", "geoplugin_continentName": "Asia", "geoplugin_latitude": "23.771", "geoplugin_longitude": "90.3611", "geoplugin_locationAccuracyRadius": "100", "geoplugin_timezone": "Asia/Dhaka", "geoplugin_currencyCode": "BDT", "geoplugin_currencySymbol": "Tk", "geoplugin_currencySymbol_UTF8": "Tk", "geoplugin_currencyConverter": 85.0021 }
  return {
    ipAddress: res.geoplugin_request,
    countryName: res.geoplugin_countryName
  };
}

function getIpAddressSuccess(data) {
  return {
    type: aTypes.GET_IP_ADDRESS,
    data
  };
}

// eslint-disable-next-line import/prefer-default-export
const getIPAddress = () => {
  return async (dispatch) => {
    let res;
    let data;
    try {
      res = await bgService.getIPAddressOne();
      if (res) data = parseFreeGeoIP(res);
    } catch (error) {
      //
    }

    if (data) {
      dispatch(getIpAddressSuccess(data));
      return;
    }
    try {
      res = await bgService.getIPAddressSecond();
      if (data) {
        data = parseGeoPluginIP(res);
        dispatch(getIpAddressSuccess(data));
        return;
      }
      dispatch(apiAction.endApiCall());
    } catch (error) {
      dispatch(apiAction.endApiCall());
    }
  };
};

export default {
  getIPAddress
};
