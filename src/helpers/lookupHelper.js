import { ACCOUNT_STATUS, COMPANY_CATEGORY } from '../configs/appConfig';

const genders = [
  { value: 0, text: 'Unknown' },
  { value: 1, text: 'Male' },
  { value: 2, text: 'Female' }
];

const getGenders = () => genders;

const getGenderText = (genderID) => {
  const gender = genders.find((c) => c.value === genderID);
  if (gender) return gender.text;
  return '';
};

const accountStatusList = [
  { value: ACCOUNT_STATUS.DEFAULT, text: 'Default' },
  { value: ACCOUNT_STATUS.LOCKED, text: 'Locked' },
  { value: ACCOUNT_STATUS.VERIFIED, text: 'Verified' },
  { value: ACCOUNT_STATUS.SUSPENDED, text: 'Suspended' },
  { value: ACCOUNT_STATUS.ARCHIVED, text: 'Archived' }
];
const getAccountStatusByID = (id) => {
  return accountStatusList.find((a) => a.value === id);
};
const companyCategories = [
  { value: COMPANY_CATEGORY.ALL, text: 'All' },
  { value: COMPANY_CATEGORY.WAF, text: 'WAF' },
  { value: COMPANY_CATEGORY.PROSPECTIVE_PARTNER, text: 'Prospective Partner' },
  { value: COMPANY_CATEGORY.PARTNER, text: 'Partner' }
];

const getCompanyCategories = () => {
  return companyCategories;
};

export default {
  getGenders,
  getGenderText,
  getAccountStatusByID,
  getCompanyCategories
};
