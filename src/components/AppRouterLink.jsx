import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer'
  }
}));

const AppRouterLink = ({ url, text, className, children }) => {
  const classes = useStyles();
  return (
    <Link
      component={RouterLink}
      className={clsx(classes.root, className)}
      to={url}
    >
      {text || children}
    </Link>
  );
};

AppRouterLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.objectOf({})
};

AppRouterLink.defaultProps = {
  className: '',
  url: '',
  text: '',
  children: ''
};

export default AppRouterLink;
