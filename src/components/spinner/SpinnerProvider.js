import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

function SpinnerProvider({ children, isLoading }) {
  return (
    <>
      {children}
      {isLoading && <Spinner className="full-spinner" />}
    </>
  );
}

SpinnerProvider.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isLoading: state.apiCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(SpinnerProvider);
