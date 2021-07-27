import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  root: {
    '& MuiMenuItem-root': {
      minHeight: '48px !important'
    }
  },
  menu: {}
}));

const AppContextMenu = ({
  isOpen,
  handleMenuOpen,
  handleMenuClose,
  children,
  className,
  ...rest
}) => {
  const classes = styles();
  const moreRef = useRef(null);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...rest} className={clsx(classes.root, className)}>
      <Tooltip title="Actions">
        <IconButton
          edge="end"
          onClick={handleMenuOpen}
          ref={moreRef}
          size="small"
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        classes={{ paper: classes.menu }}
        onClose={handleMenuClose}
        elevation={1}
        open={isOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {children}
      </Menu>
    </div>
  );
};

AppContextMenu.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  className: PropTypes.string
};
AppContextMenu.defaultProps = {
  className: ''
};
export default AppContextMenu;
