import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import DeleteIcon from '../../../components/icons/DeleteIcon';
import AppConfirmModal from '../../../components/dialogs/AppConfirmModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    width: '40px',
    height: '40px',
    padding: theme.spacing(0),
    // alignItems: 'center',
    fontSize: '20px',
    transition: 'all 0.45s',
    borderRadius: '50%',
    '& svg': {
      color: '#565656'
    },
    '&:hover': {
      // background: theme.palette.primary.main,
      // color: theme.palette.primary.contrastText,
      '& svg': {
        fill: '#e02f2f'
      }
    }
    // background: theme.palette.primary.contrastText,
    // boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
    // marginRight: theme.spacing(0.5),
  }
}));

const DeleteCtrl = ({ className, contentName, id, clickHandler }) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onClick = () => {
    setIsDialogOpen(true);
  };
  const onConfirm = () => {
    clickHandler(id);
    setIsDialogOpen(false);
  };
  return (
    <div className={clsx(classes.root, className)}>
      <IconButton className={classes.button} onClick={onClick}>
        <DeleteIcon />
      </IconButton>
      <AppConfirmModal
        isOpen={isDialogOpen}
        title={`Delete ${contentName}`}
        description={`Are you sure want to delete this ${contentName}`}
        onConfirm={onConfirm}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

DeleteCtrl.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  contentName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

DeleteCtrl.defaultProps = {
  className: ''
};

export default DeleteCtrl;
