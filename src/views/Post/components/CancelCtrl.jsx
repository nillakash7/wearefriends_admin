import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import DeleteIcon from '../../../components/icons/DeleteIcon';

const useStyles = makeStyles(() => ({
  root: {},
  button: {
    width: '36px',
    height: '36px',
    padding: '5px',
    fontSize: '20px',
    transition: 'all 0.45s',
    borderRadius: '50%',
    '&:hover': {
      // background: ,
      // color: theme.palette.primary.contrastText,
      '& svg': {
        // fill: theme.palette.primary.main
      }
    }
  }
}));

const CancelCtrl = ({ className, clickHandler }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={clsx(classes.button, className)}
      onClick={clickHandler}
    >
      <DeleteIcon />
    </IconButton>
  );
};

CancelCtrl.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

CancelCtrl.defaultProps = {
  className: ''
};

export default CancelCtrl;
