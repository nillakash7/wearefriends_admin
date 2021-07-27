import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { createFilterOptions } from '@material-ui/lab/useAutocomplete';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
});

const AppAutoComplete = ({
  label,
  name,
  isIcon,
  options,
  className,
  isDisabled,
  margin
}) => {
  const classes = useStyles();
  const { setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext();
  const error = touched[name] ? errors[name] : undefined;

  const handleSelection = (event, option) => {
    event.preventDefault();
    setFieldValue(name, option ? option.value : 0);
  };

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.text
  });

  const getOptionHtml = (option) => {
    return (
      <>
        {isIcon && <img src={option.url} width="24px" alt="" className="mr1" />}
        {option.text}
      </>
    );
  };

  return (
    <Autocomplete
      autoHighlight
      className={`mt-3 ${className}`}
      id={`${name}-select-demo`}
      style={{ width: '100%' }}
      classes={{ option: classes.option }}
      options={options}
      // value={values[name] || undefined}
      filterOptions={filterOptions}
      disabled={isDisabled}
      getOptionLabel={(option) => option.text}
      renderOption={(option) => getOptionHtml(option)}
      onBlur={() => setFieldTouched(name, true)}
      onChange={handleSelection}
      renderInput={(params) => (
        <TextField
          fullWidth
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          margin={margin}
          label={label}
          variant="outlined"
          disabled={isDisabled}
          inputProps={{
            ...params.inputProps,
            autoComplete: `new-${name}`
          }}
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
};

AppAutoComplete.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isIcon: PropTypes.bool,
  margin: PropTypes.string,
  className: PropTypes.string
};

AppAutoComplete.defaultProps = {
  isDisabled: false,
  isFullWidth: true,
  isIcon: true,
  margin: 'normal',
  className: ''
};

export default AppAutoComplete;
