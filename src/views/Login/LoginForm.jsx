import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppPasswordField,
  AppSubmitButton
} from '../../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().label('Password')
});

const LoginForm = ({ submitHandler }) => {
  return (
    <AppForm
      initValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      <AppFormField name="email" label="Email" />

      <AppPasswordField name="password" label="Password" />

      <AppSubmitButton label="Sign In" className="mt3" />
    </AppForm>
  );
};

LoginForm.propTypes = {
  submitHandler: PropTypes.func.isRequired
};

export default LoginForm;
