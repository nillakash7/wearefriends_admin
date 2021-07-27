/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Divider from '@material-ui/core/Divider';

import AppPrimaryBtn from '../buttons/AppPrimaryBtn';
import AppDefaultBtn from '../buttons/AppDefaultBtn';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const AppConfirmModal = ({
  isOpen,
  title,
  description,
  onConfirm,
  onClose,
  isOk
}) => {
  return (
    <div>
      <Dialog open={isOpen} onClose={onClose} PaperComponent={PaperComponent}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {isOk ? (
            <AppPrimaryBtn clickHandler={onConfirm} label="OK" />
          ) : (
            <>
              <AppDefaultBtn clickHandler={onClose} label="No" />
              <AppPrimaryBtn clickHandler={onConfirm} label="Yes" />
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

AppConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOk: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};
AppConfirmModal.defaultProps = {
  isOk: false
};

export default AppConfirmModal;
