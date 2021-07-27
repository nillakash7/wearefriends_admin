import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

const AppDrawer = ({
  anchor,
  isOpen,
  onClose,
  variant,
  children,
  className
}) => {
  return (
    <Drawer
      anchor={anchor}
      classes={{
        paper: className
      }}
      onClose={onClose}
      open={isOpen}
      variant={variant}
    >
      {children}
    </Drawer>
  );
};

AppDrawer.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']).isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

AppDrawer.defaultProps = {
  className: '',
  variant: 'temporary'
};

export default AppDrawer;
