import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
  // DateTimePicker
  // LocalizationProvider
} from '@material-ui/pickers';
import { useFormikContext } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  }
}));

const AppDateTimePicker = ({ label, name, maxDate, className, ...rest }) => {
  const classes = useStyles();

  const { setFieldTouched, errors, touched, values, setFieldValue } =
    useFormikContext();

  const error = touched[name] ? errors[name] : undefined;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        // disableToolbar
        className={clsx(classes.root, className)}
        autoOk
        variant="inline"
        // format="MMM/dd/yyyy"
        format="yyyy/MM/dd hh:mm a"
        name={name}
        label={label}
        value={values[name] || null}
        minDate={new Date()}
        maxDate={maxDate || undefined}
        onBlur={() => setFieldTouched(name)}
        onChange={(date) => setFieldValue(name, date)}
        error={!!error}
        helperText={error}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

AppDateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxDate: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string
};
AppDateTimePicker.defaultProps = {
  maxDate: undefined,
  className: ''
};

export default AppDateTimePicker;
