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
    marginTop: theme.spacing(2),
    textAlign: 'right'
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
