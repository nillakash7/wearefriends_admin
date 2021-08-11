import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import EditIcon from '../../../components/icons/EditIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    width: '40px',
    height: '40px',
    padding: theme.spacing(0),
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
        fill: theme.palette.primary.main
      }
    }
    // background: theme.palette.primary.contrastText,
    // boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
    // marginRight: theme.spacing(0.5),
  }
  // notLike: {
  // },
  // liked: {
  //   color: '#e02f2f'
  // }
}));

const EditCtrl = ({ className, clickHandler }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <IconButton className={classes.button} onClick={clickHandler}>
        <EditIcon />
      </IconButton>
    </div>
  );
};

EditCtrl.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

EditCtrl.defaultProps = {
  className: ''
};

export default EditCtrl;
