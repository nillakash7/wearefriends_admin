/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import makeStyles from '@material-ui/styles/makeStyles';

const appDialogStyles = makeStyles((theme) => ({
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
    // top: '7px',
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
  buttons: {
    padding: '10px 0 25px',
    justifyContent: 'center'
  }
}));

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const AppModal = ({ isOpen, title, children, onClose }) => {
  const classes = appDialogStyles();
  return (
    <Dialog
      maxWidth="lg"
      open={isOpen}
      onClose={onClose}
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        {title}
        <IconButton
          size="small"
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

AppModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};
AppModal.defaultProps = {};

export default AppModal;
