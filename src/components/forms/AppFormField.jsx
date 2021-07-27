import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import AppTxtInput from '../core/AppTxtInput';

const AppFormField = ({ label, name, type, className, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const error = touched[name] ? errors[name] : undefined;
  return (
    <>
      <AppTxtInput
        className={className}
        label={label}
        name={name}
        type={type}
        value={values[name]}
        onBlur={() => {
          setFieldTouched(name);
        }}
        changeHandler={handleChange(name)}
        error={!!error}
        helperText={error}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />

      {/* <AppErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
};

AppFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
AppFormField.defaultProps = {
  label: '',
  type: 'text',
  className: ''
};

export default AppFormField;
