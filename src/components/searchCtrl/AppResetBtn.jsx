import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { useFormikContext } from 'formik';

const AppResetBtn = ({ className }) => {
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (clickHandler) clickHandler(event);
  // };

  const { handleReset } = useFormikContext();

  return (
    <Button
      size="large"
      color="primary"
      variant="outlined"
      className={`h55px ${className}`}
      onClick={handleReset}
    >
      <RotateLeftIcon />
    </Button>
  );
};

AppResetBtn.propTypes = {
  className: PropTypes.string
};

AppResetBtn.defaultProps = {
  className: ''
};
export default AppResetBtn;
