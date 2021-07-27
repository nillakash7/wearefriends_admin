import appHttp from './httpService';

function login(data) {
  const postData = {
    emailAddress: data.email,
    password: data.password,
    ipAddress: data.ipAddress
  };

  return appHttp.post('/AdminAuth/Login', postData);
}

function getUserInfo() {
  const url = '/Dashboard/GetUserInfo';
  return appHttp.get(url);
}

export default {
  login,
  getUserInfo
};
