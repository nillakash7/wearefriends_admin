import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

const AppCheckbox = ({ name, isDisabled, children, className, ...rest }) => {
  const { handleChange, errors, touched, values } = useFormikContext();
  const error = touched[name] ? errors[name] : undefined;

  return (
    <>
      <div className="w100p">
        <Checkbox
          {...rest}
          className={className}
          value={values[name]}
          disabled={isDisabled}
          onChange={handleChange(name)}
          error={!!error}
          helperText={error}
        />
        {children || ''}
      </div>
      {error && <p className="formError w100p ml2">{error}</p>}
    </>
  );
};

AppCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  error: PropTypes.any,
  className: PropTypes.string
};

export default AppCheckbox;
