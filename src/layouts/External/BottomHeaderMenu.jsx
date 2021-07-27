import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import { Link as RouterLink } from 'react-router-dom';

import { bottomHeaderStyles } from './homeHelper';
// import HomeLeftSmallMenus from './HomeLeftSmallMenu';
// import HomeRightSmallMenus from './HomeRightSmallMenu';
// import { IMAGE_URLS } from '../../configs/appConfig';
// import routePaths from '../../routePaths';

const BottomHeaderMenu = ({ className }) => {
  const classes = bottomHeaderStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Hidden smDown>
        <div className={classes.largeMenuContainer}>
          <div className={classes.logoContainer}>
            {/* <AppLink component={RouterLink} to={"/"}> */}
            {/* <AppLink url={routePaths.HOME} className="no-underline">
              <img
                className={classes.headerLogo}
                src={IMAGE_URLS.LOGO}
                alt="Logo"
              />
            </AppLink> */}
          </div>
          <div className={classes.menuContainer}>
            {/* <ul className={classes.navContainer}>
              {navItems.slice(0, navItems.length - 1).map((ni) => (
                <li key={ni.title}>
                  <AppLink
                    url={ni.url}
                    text={ni.title}
                    className="no-underline"
                  />
                </li>
              ))}
            </ul>
            <AppLink
              component={RouterLink}
              className={classes.authButton}
              text={navItems[navItems.length - 1].title}
              to={navItems[navItems.length - 1].url}
            /> */}
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {/* <HomeLeftSmallMenus items={navItems} /> */}
          </Grid>

          <Grid item lg={4} sm={3} xs={4} className={classes.smLogoContainer}>
            {/* <AppLink url={routePaths.HOME}>
              <img
                className={classes.headerLogo}
                src={IMAGE_URLS.LOGO}
                alt="Logo"
              />
            </AppLink> */}
          </Grid>

          <Grid item xs={4}>
            {/* <HomeRightSmallMenus items={navItems} /> */}
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

BottomHeaderMenu.propTypes = {
  className: PropTypes.string
};
BottomHeaderMenu.defaultProps = {
  className: ''
};

export default BottomHeaderMenu;
