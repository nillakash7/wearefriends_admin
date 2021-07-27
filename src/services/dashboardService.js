import appHttp from './httpService';

function getLoggedInUserInfo() {
  return appHttp.get('/AdminDashboard/GetUserInfo');
}

export default {
  getLoggedInUserInfo
};
