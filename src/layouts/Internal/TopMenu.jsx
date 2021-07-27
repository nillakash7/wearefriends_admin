import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import InputIcon from '@material-ui/icons/Input';
import { Toolbar, AppBar, Button, IconButton, colors } from '@material-ui/core';

import { systemDownMsg, IMAGE_URLS } from '../../configs/appConfig';
import aActions from '../../redux/actions/authActions';
import routePaths from '../../routePaths';
// import GlobalSearch from './GlobalSearch';
// import Notification from './Notification';

const useStyles = makeStyles((theme) => ({
  root: {
    top: systemDownMsg ? 60 : 0,
    boxShadow: 'none',
    backgroundColor: theme.palette.background.dark
  },
  container: {
    display: 'flex',
    maxHeight: 64,
    justifyContent: 'space-between'
  },
  leftPart: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    height: 40,
    marginRight: theme.spacing(1)
  },
  title: {
    fontWeight: 'bold'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: theme.palette.white,
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  toggleButton: {
    marginRight: theme.spacing(1),
    marginLeft: '55px'
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  chatButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  help: {
    padding: '9px',
    marginRight: theme.spacing(1),
    backgroundColor: `${theme.palette.white} !important`
  },
  rankContainer: {
    backgroundColor: 'white',
    display: 'flex',
    padding: '5px 10px',
    alignItems: 'center',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '16px'
  }
}));

const TopMenu = ({ isLeftMenuOpen, toggleLeftMenu, className, actions }) => {
  const classes = useStyles();

  const handleLogout = () => {
    actions.logoutAction();
  };

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.container}>
        <div className={classes.leftPart}>
          <RouterLink to={routePaths.DASHBOARD}>
            <img src={IMAGE_URLS.LOGO} className={classes.logo} alt="Logo" />
          </RouterLink>
          {/* <Hidden mdDown>
            <Box className={classes.title}>{APP_TITLE}</Box>
          </Hidden> */}
          <IconButton
            className={classes.toggleButton}
            color="inherit"
            onClick={toggleLeftMenu}
          >
            {isLeftMenuOpen ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </div>
        {/* <GlobalSearch /> */}
        {/* <Hidden smDown>{user.rankName}</Hidden> */}
        <div>
          {/* <Notification />
          <div>{user.rankName}</div> */}

          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </div>
      </Toolbar>
      {/* <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
      <PricingModal onClose={handlePricingModalClose} open={pricingModalOpen} />
      <ChatBar onClose={handleChatBarClose} open={openChatBar} /> */}
    </AppBar>
  );
};

TopMenu.propTypes = {
  className: PropTypes.string,
  toggleLeftMenu: PropTypes.func.isRequired,
  isLeftMenuOpen: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

TopMenu.defaultProps = {
  className: ''
};
function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logoutAction: bindActionCreators(aActions.logout, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
