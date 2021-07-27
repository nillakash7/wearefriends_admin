import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import makeStyles from '@material-ui/core/styles/makeStyles';

const toasterPosition = {
  vertical: 'top',
  horizontal: 'right'
};

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useSnackbarContentStyle = makeStyles((theme) => ({
  root: {
    borderRadius: '4px',
    '& .MuiSnackbarContent-root': {
      backgroundColor: theme.palette.transparent
    }
  },
  success: {
    backgroundColor: `${theme.palette.background.success} !important`
  },
  error: {
    backgroundColor: `${theme.palette.background.error} !important`
  },
  info: {
    backgroundColor: `${theme.palette.background.info} !important`
  },
  warning: {
    backgroundColor: `${theme.palette.background.warning} !important`
  },
  msgContainer: {
    maxWidth: '300px',
    wordBreak: 'break-word'
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  close: {
    float: 'right'
  }
}));

const Toaster = ({ state, handleClose }) => {
  const classes = useSnackbarContentStyle();
  const Icon = variantIcon[state.type];
  return (
    <Snackbar
      anchorOrigin={toasterPosition}
      open={state.visible}
      className={`${classes.root} ${classes[state.type]}`}
      message={
        <div id="client-snackbar" className={classes.message}>
          <Icon className={classes.icon} />
          <div className={classes.msgContainer}>{state.message}</div>
        </div>
      }
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

Toaster.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Toaster;
