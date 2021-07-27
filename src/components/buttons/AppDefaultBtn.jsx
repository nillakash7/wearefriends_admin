import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const AppDefaultBtn = ({ label, clickHandler, className, ...rest }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (clickHandler) clickHandler(event);
  };

  return (
    <Button
      variant="contained"
      type="button"
      className={className}
      onClick={handleClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {label}
    </Button>
  );
};

AppDefaultBtn.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

AppDefaultBtn.defaultProps = {
  className: '',
  fullWidth: false
};

export default AppDefaultBtn;
