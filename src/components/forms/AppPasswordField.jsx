import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useFormikContext } from 'formik';

import AppTxtInput from '../core/AppTxtInput';

const AppPasswordField = ({ label, name, className, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const error = touched[name] ? errors[name] : undefined;
  return (
    <AppTxtInput
      className={className}
      label={label}
      name={name}
      value={values[name]}
      type={showPassword ? 'text' : 'password'}
      onBlur={() => {
        setFieldTouched(name);
      }}
      changeHandler={handleChange(name)}
      error={!!error}
      helperText={error}
      InputProps={{
        autoComplete: `new-${name}`,
        endAdornment: (
          <InputAdornment position="end" style={{ marginRight: '-16px' }}>
            <IconButton
              aria-label={showPassword ? 'Hide' : 'Show'}
              onClick={toggleShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

AppPasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};
AppPasswordField.defaultProps = {
  className: ''
};

export default AppPasswordField;
