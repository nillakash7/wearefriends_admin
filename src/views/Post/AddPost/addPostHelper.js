import makeStyles from '@material-ui/styles/makeStyles';
import { ROLE_ID } from '../../../configs/appConfig';

import getCommonSearchParam from '../../../helpers/searchParams';

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
      name: 'profilePictureUrl',
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
  }
}));

export const addFormStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    justify: 'center'
  },
  spaceBtw: {
    paddingRight: theme.spacing(1)
  },
  buttonContainer: {
    textAlign: 'right',
    marginTop: theme.spacing(2),
    '& button': {
      width: '150px',
      marginLeft: '20px'
    }
  }
}));

export const appDialogStyles = makeStyles((theme) => ({
  root: {
    // margin: 'auto',
    // [theme.breakpoints.down('sm')]: {
    //   width: '350px'
    // }
    '& .MuiPaper-root.MuiDialog-paper': {
      width: '900px'
    }
  },
  closeButton: {
    right: '9px',
    width: '20px',
    height: '20px',
    paddingLeft: '4px',
    position: 'absolute',
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    '& .MuiSvgIcon-root': {
      height: '15px',
      width: '15px'
    }
  },
  container: {},
  btnContainer: {
    marginTop: '16px'
  },
  btnItem: {
    textAlign: 'left',
    textTransform: 'capitalize',
    backgroundColor: theme.palette.white,
    '& span': {
      display: 'flex',
      flexFlow: 'column',
      marginTop: '15px'
    },
    '& p': {
      fontSize: '12px'
    }
  },
  icon: {
    height: '20px'
  }
}));

// #endregion
