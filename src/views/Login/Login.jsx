import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Hidden } from '@material-ui/core';

import aActions from '../../redux/actions/authActions';
import bgAction from '../../redux/actions/bgActions';
import { isLoggedIn } from '../../helpers/storageHelper';
import { Page } from '../../components/pageCtrl';
import routePaths from '../../routePaths';

import LoginForm from './LoginForm';
import { loginStyles } from './loginHelper';
import { IMAGE_URLS } from '../../configs/appConfig';
import { ToasterContext } from '../../App';

const Login = ({ history, actions, user, ipAddress }) => {
  const classes = loginStyles();
  const { toaster } = useContext(ToasterContext);

  useEffect(() => {
    if (!ipAddress) actions.getIpAddress().catch();
  }, []);

  const handleLogin = async (data) => {
    const res = await actions.login({ ...data, ipAddress });
    if (!res.isSuccess) toaster.error(res.message);
  };

  if (isLoggedIn(user)) {
    let pathName = history.location.hash;
    if (pathName) pathName = pathName.replace('#', '');
    else pathName = routePaths.DASHBOARD;
    return <Redirect to={pathName} />;
  }

  return (
    <Page className={classes.root} title="Sign in">
      <Grid container>
        <Hidden xsDown>
          <Grid item md={6} xs={12} className={classes.part}>
            <img src={IMAGE_URLS.LOGO} className={classes.partContent} alt="" />
          </Grid>
        </Hidden>

        <Grid item md={6} xs={12} className={classes.part}>
          <div className={classes.partContent}>
            <Hidden xsUp>
              <div className={classes.logoContainer}>
                <img
                  src={IMAGE_URLS.LOGO}
                  className={classes.appLogo}
                  alt=" "
                />
              </div>
            </Hidden>
            <div className={classes.titleTxt}>Sign In Your Account</div>

            <LoginForm btnClass={classes.formBtn} submitHandler={handleLogin} />
          </div>
        </Grid>
      </Grid>
    </Page>
  );
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  ipAddress: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any)
};

Login.defaultProps = {
  user: {}
};

function mapStateToProps({ user, bgData }) {
  return {
    ipAddress: bgData.ipAddress,
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getIpAddress: bindActionCreators(bgAction.getIPAddress, dispatch),
      login: bindActionCreators(aActions.login, dispatch),
      clearLoginInfo: bindActionCreators(aActions.clearLoginInfo, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
