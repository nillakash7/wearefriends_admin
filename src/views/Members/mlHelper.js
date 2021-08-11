import makeStyles from '@material-ui/styles/makeStyles';
import { ROLE_ID } from '../../configs/appConfig';

import getCommonSearchParam from '../../helpers/searchParams';

export const initState = {
  orders: [],
  isDepositOpen: false,
  openConfirmDialog: false,
  message: ''
};

export const initSearchValues = {
  startDate: null,
  endDate: null,
  countryID: 0,
  memberType: 0,
  keyword: ''
};
export function getSearchParams() {
  return { ...getCommonSearchParam(), ...initSearchValues };
}

export const MEMBER_ACTIONS = Object.freeze({
  // DETAILS: 1,
  ACTIVE: 2,
  VERIFY: 3,
  SUSPEND: 4,
  ARCHIVE: 5
});

export const getMemberTableHeaders = (roleID) => {
  const headers = [
    {
      title: 'Photo',
      name: 'ppThumbUrl',
      type: 'photo'
    },
    {
      title: 'Member ID',
      name: 'memberID',
      type: 'number'
    },
    {
      title: 'Username',
      name: 'username',
      type: 'string'
    },
    {
      title: 'Email',
      name: 'emailAddress',
      type: 'string'
    },
    {
      title: 'Country',
      name: 'countryID',
      type: 'country'
    },
    {
      title: 'Gender',
      name: 'genderID',
      type: 'gender'
    },
    {
      title: 'DoB',
      name: 'dateOfBirth',
      type: 'date'
    },
    {
      title: 'Status',
      name: 'statusText',
      type: 'string'
    }
  ];

  if (roleID === ROLE_ID.ADMIN) {
    headers.push({
      title: 'Actions',
      name: 'actions',
      type: 'actions'
    });
  }
  return headers;
};

// #region Styles
export const pageContainerStyles = makeStyles((theme) => ({
  results: {
    marginTop: theme.spacing(3)
  },
  lgImgContainer: {
    minWidth: '300px',
    textAlign: 'center'
  }
}));

export const tableStyles = makeStyles(() => ({
  root: {
    '& .MuiCardActions-root': {
      padding: '0'
    }
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  blue: {
    color: 'blue',
    fontWeight: 'bold'
  },
  green: {
    color: 'green',
    fontWeight: 'bold'
  },
  red: {
    color: 'red',
    fontWeight: 'bold'
  },
  countryColumn: {
    display: 'flex',
    alignItems: 'center'
  }
}));
// #endregion
