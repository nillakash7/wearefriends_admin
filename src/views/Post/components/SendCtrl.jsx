import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import SendIcon from '../../../components/icons/SendIcon';

const useStyles = makeStyles((theme) => ({
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
        fill: theme.palette.primary.main
      }
    }
  }
}));

const SendCtrl = ({ className, disabled, clickHandler }) => {
  const classes = useStyles();
  return (
    <IconButton
      type="submit"
      disabled={disabled}
      className={clsx(classes.button, className)}
      onClick={clickHandler}
    >
      <SendIcon />
    </IconButton>
  );
};

SendCtrl.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

SendCtrl.defaultProps = {
  className: ''
};

export default SendCtrl;
