import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './spinner.scss';

export default function Spinner({ className }) {
  return (
    <div className={className}>
      <CircularProgress />
    </div>
  );
}
Spinner.propTypes = {
  className: PropTypes.string.isRequired
};
