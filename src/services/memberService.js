import appHttp from './httpService';

function getSearchParam(searchParam) {
  return {
    keyword: searchParam.keyword ? searchParam.keyword.trim() : '',
    countryID: parseInt(searchParam.countryID, 10),
    memberType: parseInt(searchParam.memberType || 0, 10),
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
  return appHttp.post('/AdminMember/GetMembers', params);
}

function verifyAccount(memberID) {
  const url = `/AdminMember/VerifyAccount/${memberID}`;
  return appHttp.post(url);
}
function suspendAccount(memberID) {
  const url = `/AdminMember/SuspendAccount/${memberID}`;
  return appHttp.post(url);
}
function archiveAccount(memberID) {
  const url = `/AdminMember/ArchiveAccount/${memberID}`;
  return appHttp.post(url);
}
function activateAccount(memberID) {
  const url = `/AdminMember/ActivateAccount/${memberID}`;
  return appHttp.post(url);
}

export default {
  getMembers,
  verifyAccount,
  suspendAccount,
  archiveAccount,
  activateAccount
};
