import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
// import ExternalLayout from './layouts/External/ExternalLayout';
import DefaultLayout from './layouts/DefaultLayout';
import InternalLayout from './layouts/Internal/InternalLayout';
import routePaths from './routePaths';

const load = (component) => {
  return lazy(() => component);
};

const getRoutes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/auth',
        component: DefaultLayout,
        routes: [
          {
            path: routePaths.LOGIN,
            exact: false,
            component: load(import('./views/Login/Login'))
          }
        ]
      },
      {
        path: '/errors',
        component: DefaultLayout,
        routes: [
          {
            path: routePaths.ERROR404,
            exact: true,
            component: load(import('./views/Error404'))
          },
          {
            // eslint-disable-next-line react/react-in-jsx-scope
            component: () => <Redirect to={routePaths.ERROR404} />
          }
        ]
      },
      {
        path: '*',
        component: InternalLayout,
        routes: [
          {
            path: routePaths.DASHBOARD,
            exact: true,
            component: load(import('./views/Dashboard/Dashboard'))
          },
          {
            path: routePaths.POSTS,
            exact: true,
            component: load(import('./views/Posts/Posts'))
          },
          {
            path: routePaths.ADD_POST,
            exact: true,
            component: load(import('./views/AddPost/AddPost'))
          },
          {
            path: routePaths.MEMBERS,
            exact: true,
            component: load(import('./views/Members/Members'))
          },
          {
            path: routePaths.MEMBER,
            exact: true,
            component: load(import('./views/Member/Member'))
          },
          {
            path: routePaths.PARTNERS,
            exact: true,
            component: load(import('./views/Partners/Partners'))
          },
          {
            path: routePaths.ADMIN_USERS,
            exact: true,
            component: load(import('./views/AdminUsers/AdminUsers'))
          },
          {
            // eslint-disable-next-line react/react-in-jsx-scope
            component: () => <Redirect to={routePaths.ERROR404} />
          }
          // {
          //   path: '/my-profile/:tab?',
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/MyProfile/MyProfile'))
          // },
          // {
          //   path: routePaths.FORGET_PASSWORD,
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/ForgetPassword/ForgetPassword'))
          // },
          // {
          //   path: routePaths.RESET_PASSWORD,
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/ResetPassword/ResetPassword'))
          // },
          // {
          //   path: `${routePaths.SIGN_UP_FIRST_STEP}/:referralUsername?/:side?`,
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/Registration/Sponsor'))
          // },
          // {
          //   path: `${routePaths.SIGN_UP_SECOND_STEP}/:referralId?/:side?`,
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/Registration/User'))
          // },
          // {
          //   path: `${routePaths.SIGN_UP_THIRD_STEP}/:memberId`,
          //   exact: true,
          //   component: load(import('./views/Login/Login')) // load(import('./views/Registration/Email'))
          // },
        ]
      }
    ]
  }
];

export default getRoutes;
