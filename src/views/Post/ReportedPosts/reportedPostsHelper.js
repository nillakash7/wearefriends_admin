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
  keyword: ''
};
export function getSearchParams() {
  return { ...getCommonSearchParam(), ...initSearchValues };
}

export const POST_ACTIONS = Object.freeze({
  DETAILS: 1,
  EDIT: 2,
  ARCHIVED: 3,
  ACTIVATED: 4
});

export const getMemberTableHeaders = (roleID) => {
  const headers = [
    {
      title: 'ID',
      name: 'postID',
      type: 'number'
    },
    {
      title: 'Member ID',
      name: 'postOwnerID',
      type: 'number'
    },
    {
      title: 'Username',
      name: 'postOwnerName',
      type: 'string'
    },
    {
      title: 'Post Time',
      name: 'postTime',
      type: 'date'
    },
    {
      title: 'Text',
      name: 'postText',
      type: 'string'
    },
    {
      title: 'Contents',
      name: 'contents',
      type: 'list'
    },
    // {
    //   title: 'Gender',
    //   name: 'genderID',
    //   type: 'gender'
    // },
    {
      title: '# Comment',
      name: 'noOfComment',
      type: 'number'
    },
    {
      title: '# Like',
      name: 'noOfLike',
      type: 'number'
    },
    {
      title: '# Report',
      name: 'noOfReport',
      type: 'number'
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

export const tableStyles = makeStyles((theme) => ({
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
  contentItem: {
    border: theme.palette.border.default,
    maxWidth: '150px',
    maxHeight: '150px'
  }
}));
// #endregion
