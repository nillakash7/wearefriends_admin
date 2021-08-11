import ENV_VARIABLES from './helpers/envHelper';

export default Object.freeze({
  HOME: ENV_VARIABLES.PARENT_HOST_URL,
  ERROR404: '/errors/404',
  LOGIN: '/auth/login',

  DASHBOARD: '/',
  POSTS: '/posts',
  ADD_POST: '/add-post',
  POST_DETAIL: '/post/detail',
  POST_EDIT: '/post/edit',
  REPORTED_POSTS: '/reported-posts',
  MEMBERS: '/members',
  MEMBER: '/member',
  PARTNERS: '/partners',
  ADMIN_USERS: '/admin-users',
  MY_PROFILE: '/my-profile/profile'
});
