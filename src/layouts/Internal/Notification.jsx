import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import { IconButton, Box, Popover } from '@material-ui/core';

import oActions from '../../redux/actions/otherActions';

export const containerStyles = makeStyles((theme) => ({
  container: {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: '-5px'
  },
  searchBox: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: '8px',
    '& .MuiInputBase-adornedStart': {
      height: 50
    }
  },
  buttonContainer: {
    marginTop: theme.spacing(2)
  },
  searchButton: {
    height: '50px !important',
    backgroundColor: theme.palette.primary.light
  }
}));

const Notification = ({ actions }) => {
  const classes = containerStyles();

  const getNotification = () => {
    actions.getNotifications();
  };
  useEffect(() => {
    getNotification();
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(undefined);

  const openPopup = (event) => {
    setIsPopupOpen(event.currentTarget);
  };
  const closePopup = () => {
    setIsPopupOpen(null);
  };

  const open1 = Boolean(isPopupOpen);

  return (
    <>
      <Box component="span" pr="2" className={classes.root}>
        <IconButton
          onClick={openPopup}
          color="inherit"
          className="btn-inverse mx-1 d-50"
        >
          <div className="badge badge-pill badge-warning badge-header">3</div>
          <NotificationsActiveTwoToneIcon />
        </IconButton>
        <Popover
          open={open1}
          anchorEl={isPopupOpen}
          onClose={closePopup}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          classes={{
            paper: 'app-header-dots'
          }}
        >
          <div className="popover-custom-xl overflow-hidden">
            <div className="bg-composed-wrapper bg-midnight-bloom border-0 text-center rounded-sm m-2">
              <div className="bg-composed-wrapper--content text-light px-2 py-4">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Notifications
                </h4>
                <p className="opacity-8 mb-0">
                  You have <b className="text-success">472</b> new messages
                </p>
              </div>
            </div>
          </div>
        </Popover>
      </Box>
    </>
  );
};
Notification.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getNotifications: bindActionCreators(oActions.getNotifications, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
