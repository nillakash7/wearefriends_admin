import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';

const StyleProvider = ({ children, isLoading }) => {
  return (
    <>
      {children}
      {isLoading && <Spinner className="full-spinner" />}
    </>
  );
};

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.apiCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(StyleProvider);
