import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';

import TopHeaderMenu from './TopHeaderMenu';
import BottomHeaderMenu from './BottomHeaderMenu';
import { headerStyles } from './homeHelper';

const Header = () => {
  const classes = headerStyles();
  return (
    <div className={classes.root}>
      <Hidden smDown>
        <TopHeaderMenu />
      </Hidden>
      <BottomHeaderMenu />
    </div>
  );
};

Header.propTypes = {
  // className: PropTypes.string
};

export default Header;
