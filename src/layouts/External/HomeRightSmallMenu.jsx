import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import AppLink from '../../components/AppLink';
import routePaths from 'src/routePaths';
import { Divider } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    minWidth: '126px',
    border: '1px solid #d3d4d5',
    marginTop: '5px !important',
    fontFamily: 'Karla, sans-serif'
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    minHeight: '33px',
    padding: '0 10px',
    '&:focus, &:hover': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#ee5928'
      }
    },
    '& a': {
      color: '#758CA0',
      fontSize: '12px',
      lineHeight: '34px',
      '& span': {
        marginLeft: '10px'
      }
    }
  }
}))(MenuItem);

const CustomMenuItem = React.forwardRef((props, ref) => (
  <StyledMenuItem innerRef={ref}>
    <AppLink url={props.href} className="no-underline">
      {props.children}
    </AppLink>
  </StyledMenuItem>
));

CustomMenuItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.object
};

const menuStyles = makeStyles((theme) => ({
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '3px'
  },
  lang: {
    border: '1px solid #758CA0',
    padding: '0 10px',
    borderRadius: '4px',
    color: '#758CA0',
    lineHeight: '30px',
    fontSize: '12px',
    marginRight: '10px'
  },
  profile: {
    border: '1px solid #758CA0',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#758CA0',
    padding: '10px',
    marginLeft: '0px'
  },
  closeIcon: {
    textAlign: 'right',
    padding: '0px 10px 0 0',
    color: '#B5B5B5',
    cursor: 'pointer'
  }
}));

const HomeRightSmallMenus = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = menuStyles();

  return (
    <>
      <div className={classes.menuContainer}>
        <div className={classes.lang}>ENG</div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.profile}
          onClick={handleClick}
        >
          <i className="fa fa-user"></i>
        </IconButton>
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomMenuItem key="login" href={routePaths.LOGIN}>
          <>
            <i className="fa fa-user"></i> <span>LOGIN</span>
          </>
        </CustomMenuItem>
        <Divider />
        <CustomMenuItem key="signup" href={routePaths.SIGN_UP_FIRST_STEP}>
          <>
            <i className="fa fa-sign-out-alt"></i> <span>SIGNUP</span>
          </>
        </CustomMenuItem>
      </StyledMenu>
    </>
  );
};

HomeRightSmallMenus.propTypes = {
  navClass: PropTypes.string,
  items: PropTypes.array.isRequired
};

export default HomeRightSmallMenus;
