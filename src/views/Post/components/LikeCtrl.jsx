import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import LikeIcon from '../../../components/icons/LikeIcon';

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
  },
  notLike: {
    color: '#565656'
  },
  liked: {
    color: '#e02f2f'
  },
  noOfLike: { width: '35px', textAlign: 'right', paddingRight: '10px' }
}));

const LikeCtrl = ({ className, noOfLike, isLiked, clickHandler }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <IconButton
        className={classes.button}
        onClick={() => {
          clickHandler(!isLiked);
        }}
      >
        <LikeIcon className={isLiked ? classes.liked : classes.notLike} />
      </IconButton>
      <strong className={classes.noOfLike}>{noOfLike || ''}</strong>
    </div>
  );
};

LikeCtrl.propTypes = {
  className: PropTypes.string,
  isLiked: PropTypes.bool,
  noOfLike: PropTypes.number,
  clickHandler: PropTypes.func.isRequired
};

LikeCtrl.defaultProps = {
  className: '',
  isLiked: false,
  noOfLike: 0
};

export default LikeCtrl;
