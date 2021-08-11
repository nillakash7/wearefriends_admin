export function getEventObject(name, value) {
  return {
    target: {
      name,
      value
    }
  };
}

export const getSumByProp = (items, prop) => {
  return items.reduce((a, p) => a + p[prop], 0);
};

export function copyTextById(id) {
  const from = document.getElementById(id);
  const range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

export function copyText(txt) {
  const inputElm = document.createElement('input');
  inputElm.setAttribute('type', 'text');
  inputElm.value = txt;
  document.body.appendChild(inputElm);
  inputElm.select();
  inputElm.focus();
  document.execCommand('copy');
  document.body.removeChild(inputElm);
}

export const getShortName = (name) => {
  if (!name) return 'N/A';
  const parts = name.trim().split(' ');
  if (parts.length < 2) return parts[0][0];
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
};

export const getQueryParam = (search, propName) => {
  const params = new URLSearchParams(search);
  return params.get(propName);
};

export const getFullName = (user) => {
  return user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName;
};

export const isEmpty = (txt) => {
  if (!txt) return true;
  return txt.trim().length === 0;
};

export const isEmptyArray = (arr) => {
  if (!arr) return true;
  return arr.length === 0;
};

export const getTrimText = (txt) => {
  return !txt ? '' : txt.trim();
};
