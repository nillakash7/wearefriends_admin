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
  categoryID: 0,
  keyword: ''
};
export function getSearchParams() {
  return { ...getCommonSearchParam(), ...initSearchValues };
}

export const PARTNER_ACTIONS = Object.freeze({
  // DETAILS: 1,
  ACTIVATE: 2,
  DEACTIVATE: 3,
  UNLOCKED: 4
});

export const getMemberTableHeaders = (roleID) => {
  const headers = [
    {
      title: 'Photo',
      name: 'profilePictureUrl',
      type: 'photo'
    },
    // {
    //   title: 'Partner ID',
    //   name: 'partnerID',
    //   type: 'number'
    // },
    {
      title: 'Partner Name',
      name: 'partnerName',
      type: 'string'
    },
    {
      title: 'Company Name',
      name: 'companyName',
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
      title: 'Website',
      name: 'websiteUrl',
      // customValue: 'Website',
      type: 'url'
    },
    {
      title: 'Invitation Link',
      name: 'invitationLink',
      customValue: 'Invitation Link',
      type: 'url'
    },
    {
      title: 'Date Of Signup',
      name: 'registrationDate',
      type: 'date'
    },
    {
      title: 'Status',
      name: 'partnerStatus',
      type: 'string'
    },
    {
      title: 'Email Verification',
      name: 'emailVerification',
      type: 'string'
    }
    // {
    //   title: 'Status',
    //   name: 'statusText',
    //   type: 'string'
    // }
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
