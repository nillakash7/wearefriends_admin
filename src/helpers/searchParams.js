const PAGE_NO = 1;
const PAGE_SIZE = 50;

export default function getDefaultSearchParams() {
  return {
    hasChanged: false,
    pageNo: PAGE_NO,
    pageSize: PAGE_SIZE,
    sortBy: '',
    sort: '', // asc, desc
    startDate: null,
    endDate: null
  };
}
