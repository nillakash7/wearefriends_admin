/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import { colors } from '@material-ui/core';

import LeftMenuItem from './LeftMenuItem';
import { systemDownMsg } from '../../configs/appConfig';
import { getLeftMenus } from './leftMenuItems';
import routePaths from '../../routePaths';
import AppDrawer from '../../components/AppDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    width: 256,
    top: 'auto',
    marginTop: '64px',
    height: systemDownMsg ? 'calc(100% - 124px)' : 'calc(100% - 64px)'
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  navigation: {
    overflow: 'auto',
    padding: theme.spacing(0, 2, 2, 2),
    flexGrow: 1
  },
  profile: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  badge: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  },
  badgeDot: {
    height: 9,
    minWidth: 9
  },
  onlineBadge: {
    backgroundColor: colors.green[600]
  },
  awayBadge: {
    backgroundColor: colors.orange[600]
  },
  busyBadge: {
    backgroundColor: colors.red[600]
  },
  offlineBadge: {
    backgroundColor: colors.grey[300]
  },
  avatar: {
    cursor: 'pointer',
    width: 40,
    height: 40
  },
  profileLink: {
    display: 'flex',
    '& > *, & p': {
      cursor: 'pointer'
    }
  },
  details: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column'
  },
  moreButton: {
    marginLeft: 'auto',
    color: colors.blueGrey[200]
  }
}));

const RenderMenu = ({ items, key, ...rest }) => {
  return (
    <List key={key}>
      {items.reduce(
        // eslint-disable-next-line no-use-before-define
        (a, item) => ReduceSubMenus({ a, item, ...rest }),
        []
      )}
    </List>
  );
};
RenderMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  key: PropTypes.string.isRequired
  // pathname: PropTypes.string.isRequired
};

const ReduceSubMenus = ({ a, pathname, item, depth = 0 }) => {
  if (item.items) {
    const open = matchPath(pathname, {
      path: item.path,
      exact: false
    });

    a.push(
      <LeftMenuItem
        depth={depth}
        open={Boolean(open)}
        item={item}
        key={item.title}
      >
        {RenderMenu({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </LeftMenuItem>
    );
  } else {
    a.push(<LeftMenuItem depth={depth} item={item} key={item.title} />);
  }

  return a;
};

const LeftMenu = ({
  user,
  lgDown,
  isLeftMenuOpen,
  toggleLeftMenu,
  ...rest
}) => {
  const classes = useStyles();
  const location = useLocation();
  const leftMenus = getLeftMenus(user.userRole);
  useEffect(() => {
    if (lgDown && isLeftMenuOpen) {
      toggleLeftMenu(!isLeftMenuOpen);
    }
  }, [location.pathname]);

  const userCtrl = useMemo(
    () => (
      <Link
        component={RouterLink}
        to={routePaths.MY_PROFILE}
        variant="h5"
        color="textPrimary"
        underline="none"
        className={classes.profileLink}
      >
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          variant="dot"
        >
          <Avatar
            alt="Person"
            className={classes.avatar}
            src={user.profilePhotoUrl || ''}
          />
        </Badge>
        <div className={classes.details}>
          <span variant="h5" color="textPrimary">
            {user.fullName}
          </span>
          <Typography variant="body2"> {user.username || '-'}</Typography>
          {/* <Typography variant="body2" className="alnCenter">
            Rank:{' '}
            <img
              // src={getRankIcon(user.rankID)}
              width="18"
              alt={user.rankName}
              className="mx1"
            />
            {user.rankName}
          </Typography> */}
        </div>
      </Link>
    ),
    [user]
  );

  return (
    <AppDrawer
      anchor="left"
      className={classes.root}
      isOpen={isLeftMenuOpen}
      variant={lgDown ? 'temporary' : 'persistent'}
      onClose={toggleLeftMenu}
    >
      <div {...rest} className={classes.container}>
        <nav className={classes.navigation}>
          {RenderMenu({
            items: leftMenus,
            pathname: location.pathname,
            key: 'menus'
          })}
        </nav>

        <Divider className={classes.divider} />

        <div className={classes.profile}>{userCtrl}</div>
      </div>
    </AppDrawer>
  );
};

LeftMenu.propTypes = {
  lgDown: PropTypes.bool.isRequired,
  isLeftMenuOpen: PropTypes.bool.isRequired,
  toggleLeftMenu: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any)
};

LeftMenu.defaultProps = {
  user: {}
};
export default LeftMenu;
