import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer'
  }
}));

const AppLink = ({ url, text, className, children, ...rest }) => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={clsx(classes.root, className)} href={url} {...rest}>
      {text || children}
    </Link>
  );
};

AppLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};

AppLink.defaultProps = {
  className: '',
  url: '',
  text: '',
  children: ''
};

export default AppLink;
