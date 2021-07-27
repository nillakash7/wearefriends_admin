import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';

import AppFormField from './AppFormField';
import AppFormPicker from './AppFormPicker';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSelect-selectMenu': {
      // height: '100%'
    }
  },
  phoneCode: {
    width: '130px',
    marginRight: '8px !important'
    // [theme.breakpoints.down('md')]: {
    //   marginTop: '110px'
    // }
  },
  errorMsg: {
    color: theme.palette.red,
    fontSize: '11px',
    minHeight: '1em',
    fontWeight: '400',
    lineHeight: '1em',
    letterSpacing: '0.33px',
    margin: '8px 14px 0'
    // fontFamily: 'Roboto'
  }
}));

const AppPhoneNumber = ({
  phoneCodeLabel,
  phoneCodeName,
  phoneNumberLabel,
  phoneNumberName,
  options,
  className
}) => {
  const classes = useStyles();

  // const handleChanged = (event) => {
  //   event.persist();
  //   changeHandler(event);
  // };

  return (
    <div className={clsx(classes.root, className)}>
      <div className="df">
        <AppFormPicker
          name={phoneCodeName}
          label={phoneCodeLabel}
          options={options}
          className={classes.phoneCode}
        />
        <AppFormField
          name={phoneNumberName}
          label={phoneNumberLabel}
          type="tel"
        />
      </div>
    </div>
  );
};

AppPhoneNumber.propTypes = {
  phoneCodeLabel: PropTypes.string.isRequired,
  phoneCodeName: PropTypes.string.isRequired,
  phoneNumberLabel: PropTypes.string.isRequired,
  phoneNumberName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({}),
  className: PropTypes.string
};

AppPhoneNumber.defaultProps = {
  options: [],
  className: ''
};
export default AppPhoneNumber;
