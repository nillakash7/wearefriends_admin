export default {
  BEGIN_API_CALL: 'BEGIN_API_CALL',
  API_CALL_ERROR: 'API_CALL_ERROR',
  END_API_CALL: 'END_API_CALL',

  // #region Lookup
  GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
  GET_IP_ADDRESS: 'GET_IP_ADDRESS',
  // #endregion

  // #region Auth
  GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS',
  GET_LOGOUT_SUCCESS: 'GET_LOGOUT_SUCCESS',
  GET_VALIDATE_SUCCESS: 'GET_VALIDATE_SUCCESS',

  CLEAR_LOGIN_INFO: 'CLEAR_LOGIN_INFO',
  UPDATE_STORE_PROFILE_PICTURE: 'UPDATE_STORE_PROFILE_PICTURE',
  // #endregion

  // #region Dashboard
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',

  // #endregion

  // #region POSTS
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_REPORTED_POSTS_SUCCESS: 'GET_REPORTED_POSTS_SUCCESS',
  GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  EDIT_POST_SUCCESS: 'EDIT_POST_SUCCESS',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  ACTIVATE_POST_SUCCESS: 'ACTIVATE_POST_SUCCESS',

  GET_POST_COMMENTS_SUCCESS: 'GET_POST_COMMENTS_SUCCESS',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  EDI_COMMENT_SUCCESS: 'EDI_COMMENT_SUCCESS',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',

  TOGGLE_LIKE_TO_POST_SUCCESS: 'TOGGLE_LIKE_TO_POST_SUCCESS',
  TOGGLE_LIKE_TO_COMMENT_SUCCESS: 'TOGGLE_LIKE_TO_COMMENT_SUCCESS',
  // #endregion

  // #region Members
  GET_MEMBERS_SUCCESS: 'GET_MEMBERS_SUCCESS',
  ARCHIVE_MEMBER_SUCCESS: 'ARCHIVE_MEMBER_SUCCESS',
  VERIFY_MEMBER_SUCCESS: 'VERIFY_MEMBER_SUCCESS',
  SUSPEND_MEMBER_SUCCESS: 'SUSPEND_MEMBER_SUCCESS',
  ACTIVATE_MEMBER_SUCCESS: 'ACTIVATE_MEMBER_SUCCESS',
  // #endregion

  // #region Members
  GET_PARTNERS_SUCCESS: 'GET_PARTNERS_SUCCESS',
  ACTIVATE_PARTNER_SUCCESS: 'ACTIVATE_PARTNER_SUCCESS',
  DEACTIVATE_PARTNER_SUCCESS: 'DEACTIVATE_PARTNER_SUCCESS',
  UNLOCK_PARTNER_SUCCESS: 'UNLOCK_PARTNER_SUCCESS',
  // #endregion

  // #region Members
  GET_ADMIN_USERS_SUCCESS: 'GET_ADMIN_USERS_SUCCESS',
  ACTIVATE_ADMIN_USER_SUCCESS: 'ACTIVATE_ADMIN_USER_SUCCESS',
  DEACTIVATE_ADMIN_USER_SUCCESS: 'DEACTIVATE_ADMIN_USER_SUCCESS',
  UNLOCK_ADMIN_USER_SUCCESS: 'UNLOCK_ADMIN_USER_SUCCESS',
  // #endregion

  // #region
  GET_MY_PROFILE_SUCCESS: 'GET_MY_PROFILE_SUCCESS'
  // #endregion
};
