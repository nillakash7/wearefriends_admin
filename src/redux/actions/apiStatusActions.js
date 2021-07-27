import aTypes from './actionTypes';

function beginApiCall() {
  return {
    type: aTypes.BEGIN_API_CALL
  };
}

function apiCallError() {
  return {
    type: aTypes.API_CALL_ERROR
  };
}

function endApiCall() {
  return {
    type: aTypes.END_API_CALL
  };
}

export default {
  beginApiCall,
  endApiCall,
  apiCallError
};
