import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import AppLink from '../../components/AppLink';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: '0 !important',
    left: '0 !important',
    marginTop: '5px !important'
    // fontFamily: 'Karla, sans-serif'
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
    minHeight: '40px',
    '&:focus, &:hover': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#ee5928'
      }
    },
    '& a': {
      color: '#758CA0',
      lineHeight: '55px',
      fontSize: '18px',
      '& img': {
        marginRight: '10px'
      }
    }
  }
}))(MenuItem);

const CustomMenuItem = React.forwardRef((props, ref) => (
  <StyledMenuItem innerRef={ref}>
    <AppLink url={props.href} className="no-underline">
      <>
        <img src={props.iconUrl} alt="" />
        {props.title}
      </>
    </AppLink>
  </StyledMenuItem>
));

CustomMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired
};

const menuStyles = makeStyles((theme) => ({
  menuIcon: {
    display: 'flex',
    justifyItems: 'center',
    fontSize: '28px',
    marginRight: '-10px',
    paddingTop: '4px',
    '& .MuiSvgIcon-root': {
      color: theme.palette.black
    }
  },
  closeIcon: {
    textAlign: 'right',
    padding: '0px 10px 0 0',
    color: '#B5B5B5',
    cursor: 'pointer'
  }
}));

const HomeLeftSmallMenus = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = menuStyles();

  const navItems = items.slice(0, items.length - 1);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuIcon}
        onClick={handleClick}
      >
        <i className="fa fa-bars" />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.closeIcon} onClick={handleClose}>
          <i className="fas fa-times" />
        </div>

        {/* <CustomMenuItem
          key="home"
          href={routePaths.HOME}
          iconUrl="/icons/home/home.svg"
          title="Home"
        /> */}

        {navItems.map((ni) => (
          <CustomMenuItem
            key={ni.title}
            href={ni.url}
            iconUrl={ni.iconUrl}
            title={ni.title}
          />
        ))}
      </StyledMenu>

      {/* <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((ni) => (
          <CustomMenuItem key={ni.title} href={ni.url}>
            <ListItemText primary={ni.title} />
          </CustomMenuItem>
        ))}
      </StyledMenu> */}
    </>
  );
};

HomeLeftSmallMenus.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default HomeLeftSmallMenus;
