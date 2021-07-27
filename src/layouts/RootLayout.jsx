import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import { systemDownMsg } from '../configs/appConfig';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex'
    // '@media all and (-ms-high-contrast:none)': {
    //   height: 0
    // }
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%'
  },
  messageContainer: {
    top: '0',
    padding: '10px',
    position: 'fixed',
    fontSize: '25px',
    left: 'auto',
    width: '100%',
    height: '60px',
    zIndex: '100',
    color: theme.palette.yellow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.light
  },
  message: {
    position: 'relative'
  },
  bodySection: {
    height: systemDownMsg ? 'calc(100vh - 60px)' : '100vh',
    marginTop: systemDownMsg ? '60px' : '0'
  }
}));

const RootLayout = ({ route }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={`${classes.content} disable-select`}>
        {systemDownMsg && (
          <div className={classes.messageContainer}>{systemDownMsg}</div>
        )}
        <div className={classes.bodySection}>{renderRoutes(route.routes)}</div>
      </div>
    </div>
  );
};

RootLayout.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

export default RootLayout;
