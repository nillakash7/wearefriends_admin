import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import AppLink from '../../components/AppLink';
// import { topSocialIcons } from '../../views/Home/homeConfig';
import { topHeaderStyles } from './homeHelper';

const TopHeaderMenu = () => {
  const classes = topHeaderStyles();
  return (
    <div className={classes.root}>
      <div className={classes.menuContainer}>
        <div className={classes.selectedLang}>
          <img src="/flags/united-states-of-america.png" alt="" />{' '}
          <span>English</span>
        </div>
        <div className={classes.socialIcons}>
          {/* {topSocialIcons.map((item) => (
            <AppLink
              className={classes.socialIcon}
              key={item.url}
              url={item.url}
              target="_black"
            >
              <i className={item.className} />
            </AppLink>
          ))} */}
        </div>
      </div>
    </div>
  );
};

TopHeaderMenu.propTypes = {
  // className: PropTypes.string
};

export default TopHeaderMenu;
