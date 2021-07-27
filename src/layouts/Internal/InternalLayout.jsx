import React, { Suspense, useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import { LinearProgress } from '@material-ui/core';

import dActions from '../../redux/actions/dashboardActions';
import useWindowSize from '../../hooks/useWindowSize';
import { isLoggedIn } from '../../helpers/storageHelper';
import routePaths from '../../routePaths';
import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';

const useStyles = makeStyles((theme) => ({
  container: {
    // minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    }
  },
  content: {
    paddingTop: 64,
    flexGrow: 1,
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56
    }
  }
}));

const InternalLayout = ({ route, user, getLoginUserInfo }) => {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const initLeftMenu = window.innerWidth > 960;
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(initLeftMenu);

  useEffect(() => {
    if (!user || !user.memberID) {
      getLoginUserInfo();
    }
  }, []);

  if (!isLoggedIn(user)) return <Redirect to={routePaths.LOGIN} />;

  return (
    <>
      <TopMenu
        isLeftMenuOpen={isLeftMenuOpen}
        toggleLeftMenu={() => setIsLeftMenuOpen(!isLeftMenuOpen)}
      />
      <LeftMenu
        user={user}
        lgDown={windowSize.width <= 960}
        isLeftMenuOpen={isLeftMenuOpen}
        toggleLeftMenu={() => setIsLeftMenuOpen(!isLeftMenuOpen)}
      />

      <Suspense fallback={<LinearProgress />}>
        <div className={classes.container}>
          <div className={classes.content}>{renderRoutes(route.routes)}</div>
        </div>
      </Suspense>
    </>
  );
};

InternalLayout.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  getLoginUserInfo: PropTypes.func.isRequired
};

InternalLayout.defaultProps = {
  user: {}
};
function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLoginUserInfo: bindActionCreators(dActions.getLoggedInUserInfo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InternalLayout);
