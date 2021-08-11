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
export const commentCtrlStyles = makeStyles((theme) => ({
  results: {
    marginTop: theme.spacing(3)
  }
}));

export const postCtrlStyles = makeStyles((theme) => ({
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

export const commentListStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}));

export const commentItemStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    display: 'flex'
    // ':not(:last-child)': {
    //   marginLeft: '10px'
    // }
  },
  commentContainer: {
    marginTop: '10px',
    backgroundColor: 'white',
    padding: '10px',
    minHeight: '45px',
    borderRadius: '3px',
    border: theme.palette.border.dark
  },
  space: {
    height: '10px'
  }
}));

export const addCommentFormStyles = makeStyles((theme) => ({
  root: {
    margin: '60px 0 30px',
    position: 'relative'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconContainer: {
    position: 'absolute',
    bottom: '0',
    right: '10px'
  }
}));

export const editCommentFormStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0 20px',
    position: 'relative'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconContainer: {
    position: 'absolute',
    bottom: '0',
    right: '10px'
  }
}));

export const commentMediaStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  previewItem: {
    position: 'relative'
    // width: '150px'
  },
  imgPreview: {
    width: '150px',
    borderRadius: '5px',
    border: theme.palette.border.default
  },
  videoPlayIcon: {
    position: 'absolute',
    top: '42%',
    right: '42%'
  },
  voicePreview: {
    width: '100%',
    height: '45px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: theme.palette.border.default,
    background: theme.palette.background.media
  },
  musicPlayIcon: {}
}));
// #endregion
