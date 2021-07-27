import appHttp from './httpService';

function getSearchParam(searchParam) {
  return {
    keyword: searchParam.keyword ? searchParam.keyword.trim() : '',
    categoryID: parseInt(searchParam.categoryID, 10),
    startDate: searchParam.startDate,
    endDate: searchParam.endDate,
    orderBy: searchParam.orderBy,
    pageNo: searchParam.pageNo,
    pageSize: searchParam.pageSize,
    isReverseOrder: searchParam.isReverseOrder
  };
}

function getPartners(searchParam) {
  const params = getSearchParam(searchParam);
  return appHttp.post('/AdminPartner/GetPartners', params);
}

function activatePartner(partnerID) {
  const url = `/AdminPartner/ActivatePartner/${partnerID}`;
  return appHttp.post(url);
}
function deactivatePartner(partnerID) {
  const url = `/AdminPartner/DeactivatePartner/${partnerID}`;
  return appHttp.post(url);
}
function unlockAccount(partnerID) {
  const url = `/AdminPartner/UnlockAccount/${partnerID}`;
  return appHttp.post(url);
}

export default {
  getPartners,
  activatePartner,
  deactivatePartner,
  unlockAccount
};
