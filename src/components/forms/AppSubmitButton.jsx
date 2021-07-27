import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import AppPrimaryBtn from '../buttons/AppPrimaryBtn';

const AppSubmitButton = ({ label, ...rest }) => {
  const { isValid, dirty, handleSubmit } = useFormikContext();

  return (
    <AppPrimaryBtn
      label={label}
      type="submit"
      fullWidth
      isDisabled={!isValid || !dirty}
      clickHandler={handleSubmit}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

AppSubmitButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default AppSubmitButton;
