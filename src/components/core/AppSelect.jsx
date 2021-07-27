import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    marginTop: '16px',
    display: 'flex',
    '& .MuiSelect-select': {
      display: 'flex'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  icon: {
    width: '24px',
    height: '20px',
    marginRight: '8px',
    marginBottom: '-5px'
  },
  iconDense: {
    width: '24px',
    height: '20px',
    marginRight: '8px',
    marginBottom: '-5px'
  },
  text: {
    lineHeight: '20px'
  }
}));

const AppSelect = ({
  name,
  title,
  value,
  options,
  defaultValue,
  defaultTitle,
  changeHandler,
  isDisabled,
  error,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChanged = (event) => {
    event.persist();
    changeHandler(event);
  };

  return (
    <FormControl variant="outlined" className={clsx(classes.root, className)}>
      <InputLabel ref={inputLabel} id={title}>
        {title}
      </InputLabel>
      <Select
        disabled={isDisabled}
        labelId={title}
        name={name}
        value={value}
        onChange={handleChanged}
        labelWidth={labelWidth}
        error={error}
      >
        {defaultValue !== undefined && (
          <MenuItem value={defaultValue}>
            <em>{defaultTitle}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.icon && (
              <img
                src={option.icon}
                alt=""
                className={`${
                  rest.margin === 'dense' ? classes.iconDense : classes.icon
                }`}
              />
            )}

            <Typography
              className={classes.text}
              dangerouslySetInnerHTML={{
                __html: option.text
              }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

AppSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  defaultTitle: PropTypes.string,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  isDisabled: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string
};
AppSelect.defaultProps = {
  defaultTitle: '',
  value: 0,
  defaultValue: 0,
  isDisabled: false,
  error: false,
  className: ''
};

export default AppSelect;
