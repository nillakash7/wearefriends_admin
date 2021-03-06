import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    '& .MuiFormControlLabel-root': {
      margin: '0 !important'
    }
  },
  formControl: {
    margin: '16px 0 0'
  }
}));

const AppCheckboxGroup = ({ name, label, items, changeHandler }) => {
  const { handleChange, errors, touched, values } = useFormikContext();
  const error = touched[name] ? errors[name] : undefined;

  const classes = useStyles();

  useEffect(() => {
    if (changeHandler) changeHandler(values);
  }, [values[name]]);

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel>{label}</FormLabel>
        <FormGroup>
          {items.map((o) => (
            <FormControlLabel
              key={o.value}
              label={o.title}
              control={
                <Checkbox // checked={gilad}
                  value={o.value}
                  name={name}
                  onChange={handleChange}
                />
              }
            />
          ))}
        </FormGroup>
        {error && <p className="formError w100p ml2">{error}</p>}
      </FormControl>
    </>
  );
};

AppCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf({}).isRequired,
  changeHandler: PropTypes.func
};
AppCheckboxGroup.defaultProps = {
  changeHandler: () => {}
};

export default AppCheckboxGroup;
