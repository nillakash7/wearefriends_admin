import appHttp from './httpService';

function getSearchParam(searchParam) {
  return {
    keyword: searchParam.keyword ? searchParam.keyword.trim() : '',
    categoryID: parseInt(searchParam.countryID, 10),
    startDate: searchParam.startDate,
    endDate: searchParam.endDate,
    orderBy: searchParam.orderBy,
    pageNo: searchParam.pageNo,
    pageSize: searchParam.pageSize,
    isReverseOrder: searchParam.isReverseOrder
  };
}

function getMembers(searchParam) {
  const params = getSearchParam(searchParam);
  return appHttp.post('/AdminPartner/GetPartners', params);
}

function verifyAccount(memberID) {
  const url = `/AdminPartner/VerifyAccount/${memberID}`;
  return appHttp.post(url);
}
function suspendAccount(memberID) {
  const url = `/AdminPartner/SuspendAccount/${memberID}`;
  return appHttp.post(url);
}
function archiveAccount(memberID) {
  const url = `/AdminPartner/ArchiveAccount/${memberID}`;
  return appHttp.post(url);
}
function activateAccount(memberID) {
  const url = `/AdminPartner/ActivateAccount/${memberID}`;
  return appHttp.post(url);
}

export default {
  getMembers,
  verifyAccount,
  suspendAccount,
  archiveAccount,
  activateAccount
};
