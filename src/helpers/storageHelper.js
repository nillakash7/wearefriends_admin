const LOGIN_USER = 'LOGIN_USER';

window.addEventListener(
  'storage',
  (event) => {
    if (event.key === 'login') {
      window.location.reload();
    }
    if (event.key === 'logout') {
      window.location.reload();
    }
  },
  false
);
export const storeLoginUser = (data, isLogIn) => {
  const user = {
    memberID: data.memberId,
    token: data.token,
    expiredAt: new Date().getTime() + data.expiredAfterInMins * 60000
  };

  localStorage.setItem(LOGIN_USER, JSON.stringify(user));
  user.needGaVerification = isLogIn;
  if (data.token) localStorage.setItem('login', `login${Math.random()}`);
  return user;
};

export const removeLoginUser = () => {
  if (localStorage.getItem(LOGIN_USER)) {
    localStorage.removeItem(LOGIN_USER);
    localStorage.setItem('logout', `logout${Math.random()}`);
  }
};

export const getLoginUser = () => {
  const data = localStorage.getItem(LOGIN_USER);
  if (!data) return {};

  const user = JSON.parse(data);
  if (user.expiredAt < new Date().getTime()) {
    removeLoginUser();
    return {};
  }

  return user;
};
export const isVerificationStep = (user) => {
  return user.needGaVerification;
};

export const getMemberID = () => {
  const data = localStorage.getItem(LOGIN_USER);
  if (!data) return undefined;

  const user = JSON.parse(data);
  return user.memberID;
};

export const getToken = () => {
  const data = localStorage.getItem(LOGIN_USER);
  if (!data) return undefined;

  const user = JSON.parse(data);
  return user.token;
};

export const getEmail = () => {
  const data = localStorage.getItem(LOGIN_USER);
  if (!data) return undefined;

  const user = JSON.parse(data);
  return user.emailAddress;
};

export const isLoggedIn = (user) => {
  if (!user) return false;
  const isLogIn = user.expiredAt > new Date().getTime();
  if (!isLogIn) removeLoginUser();
  return isLogIn;
};

export const updatePhotoUrl = (url) => {
  const user = localStorage.getItem(LOGIN_USER);
  if (user) {
    const data = JSON.parse(user);
    data.photoUrl = url;
    localStorage.setItem(LOGIN_USER, JSON.stringify(data));
  }
};
