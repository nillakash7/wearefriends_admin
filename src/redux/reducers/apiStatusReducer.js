import aTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === aTypes.BEGIN_API_CALL) {
    return state + 1;
  }
  if (
    action.type === aTypes.END_API_CALL ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state > 0 ? state - 1 : 0;
  }
  return state;
}
