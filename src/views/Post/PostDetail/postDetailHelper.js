import makeStyles from '@material-ui/styles/makeStyles';

export const initState = {
  orders: [],
  isDepositOpen: false,
  openConfirmDialog: false,
  message: ''
};

const initCommentPagingValues = {
  pageNo: 1,
  pageSize: 20
};
export function getCommentPaging() {
  return { ...initCommentPagingValues };
}

export const MEMBER_ACTIONS = Object.freeze({
  // DETAILS: 1,
  ACTIVE: 2,
  VERIFY: 3,
  SUSPEND: 4,
  ARCHIVE: 5
});

// #region Styles
export const pageContainerStyles = makeStyles((theme) => ({
  results: {
    marginTop: theme.spacing(3)
  },
  postContainer: {
    maxWidth: '1000px',
    margin: 'auto'
  }
}));

export const postCtrlStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  spaceBtw: {
    paddingRight: theme.spacing(1)
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'right'
  }
}));

export const editFormStyles = makeStyles((theme) => ({
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
// #endregion
