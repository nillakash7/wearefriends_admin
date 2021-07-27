import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { isLoggedIn } from './helpers/storageHelper';
import routePaths from './routePaths';

const AuthGuard = ({ children }) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const isAccessible = (pathname) =>
    pathname.startsWith('/auth') || pathname.startsWith('/errors');

  useEffect(() => {
    const { location } = history;
    if (!isAccessible(location.pathname) && !isLoggedIn(user)) {
      const destinationPath = `${location.pathname}${location.search}`;
      history.replace({
        pathname: routePaths.LOGIN,
        hash: destinationPath
      });
    }
  }, [history, user]);

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthGuard;
