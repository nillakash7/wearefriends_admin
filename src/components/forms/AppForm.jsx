import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const AppForm = ({
  initValues,
  children,
  onSubmit,
  validationSchema,
  onReset,
  onFormChange,
  className
}) => {
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onReset={onReset}
    >
      {({ values }) => (
        <form className={className}>
          {onFormChange && onFormChange(values)}
          {children}
        </form>
      )}
    </Formik>
  );
};

AppForm.propTypes = {
  initValues: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.objectOf(PropTypes.any),
  onReset: PropTypes.func,
  onFormChange: PropTypes.func,
  className: PropTypes.string
};

AppForm.defaultProps = {
  children: undefined,
  validationSchema: undefined,
  onReset: () => {},
  onFormChange: () => {},
  className: ''
};
export default AppForm;
