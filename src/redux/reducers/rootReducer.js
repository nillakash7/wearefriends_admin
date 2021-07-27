import { combineReducers } from 'redux';
import initialState from './initialState';
import aTypes from '../actions/actionTypes';
import { removeLoginUser } from '../../helpers/storageHelper';
import apiCallsInProgress from './apiStatusReducer';

import authReducer from './authReducer';
import lookupReducer from './lookupReducer';
import bgReducer from './bgReducer';
import memberReducer from './memberReducer';
import partnerReducer from './partnerReducer';

// import myProfileReducer from './profileReducer';

const appReducer = combineReducers({
  apiCallsInProgress,
  user: authReducer,
  // myProfile: myProfileReducer,
  lookupData: lookupReducer,
  bgData: bgReducer,
  memberInfo: memberReducer,
  partnerInfo: partnerReducer
});

const rootReducer = (state, action) => {
  if (action.type === aTypes.GET_LOGOUT_SUCCESS) {
    removeLoginUser();
    // eslint-disable-next-line no-param-reassign
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
