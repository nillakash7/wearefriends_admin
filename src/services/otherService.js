import appHttp from './httpService';
// import { handleResponse, handleError } from './apiUtils';

function globalSearch(keyword) {
  return appHttp.get(`/GlobalSearch?keyword=${keyword}`);
}
function getNotifications() {
  return appHttp.get('/Notification/Get');
}

export default {
  globalSearch,
  getNotifications
};
