import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40px',
    height: '40px',
    padding: theme.spacing(0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    transition: 'all 0.45s',
    background: theme.palette.primary.contrastText,
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5),
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '& svg': {
        fill: theme.palette.primary.contrastText
      }
    }
  }
}));

const AppIconBtn = ({ children, clickHandler, className }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={clsx(classes.root, className)}
      onClick={clickHandler}
    >
      {children}
    </IconButton>
  );
};

AppIconBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired
};

AppIconBtn.defaultProps = {
  className: ''
};

export default AppIconBtn;
