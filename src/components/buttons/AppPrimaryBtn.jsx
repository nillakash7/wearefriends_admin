import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const AppPrimaryBtn = ({
  label,
  type,
  clickHandler,
  isDisabled,
  fullWidth,
  className
}) => {
  const handleClick = (event) => {
    if (event) event.preventDefault();
    if (clickHandler) clickHandler(event);
  };

  return (
    <Button
      color="primary"
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      className={className}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

AppPrimaryBtn.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

AppPrimaryBtn.defaultProps = {
  className: '',
  fullWidth: false,
  type: 'button',
  isDisabled: false
};

export default AppPrimaryBtn;
