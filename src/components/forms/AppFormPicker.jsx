import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import AppSelect from '../core/AppSelect';

const AppFormPicker = ({ label, name, className, options, ...rest }) => {
  const { handleChange, errors, touched, values } = useFormikContext();

  const error = touched[name] ? errors[name] : undefined;

  return (
    <>
      <AppSelect
        title={label}
        name={name}
        options={options}
        changeHandler={handleChange}
        className={className}
        error={!!error}
        value={values[name]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      {/* <AppErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
};

AppFormPicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};

AppFormPicker.defaultProps = {
  className: ''
};

export default AppFormPicker;
