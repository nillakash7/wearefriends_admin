import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const AppTxtInput = ({
  label,
  name,
  value,
  type,
  changeHandler,
  isDisabled,
  helperText,
  error,
  className,
  fullWidth,
  ...rest
}) => {
  // const handleChanged = (event) => {
  //   event.persist();
  //   changeHandler(event);
  // };

  return (
    <TextField
      margin="normal"
      variant="outlined"
      className={className}
      fullWidth={fullWidth}
      disabled={isDisabled}
      label={label}
      name={name}
      onChange={changeHandler}
      type={type}
      // inputProps={type === 'number' ? { min: '0' } : {}}
      value={value}
      error={error}
      helperText={helperText}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

AppTxtInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  changeHandler: PropTypes.func,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string
};

AppTxtInput.defaultProps = {
  label: '',
  value: '',
  fullWidth: true,
  type: 'text',
  isDisabled: false,
  changeHandler: () => {},
  helperText: '',
  error: '',
  className: ''
};

export default AppTxtInput;
