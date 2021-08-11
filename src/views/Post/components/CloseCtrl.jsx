import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import CloseIcon from '../../../components/icons/MediaCloseIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    width: '25px',
    height: '25px',
    padding: theme.spacing(0),
    fontSize: '20px',
    transition: 'all 0.45s',
    borderRadius: '50%',
    '& svg': {
      color: '#e02f2f'
    }
  }
}));

const CloseCtrl = ({ className, id, clickHandler }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <IconButton className={classes.button} onClick={() => clickHandler(id)}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

CloseCtrl.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  id: PropTypes.any.isRequired,
  clickHandler: PropTypes.func.isRequired
};

CloseCtrl.defaultProps = {
  className: ''
};

export default CloseCtrl;
