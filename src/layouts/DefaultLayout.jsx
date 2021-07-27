import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
// import makeStyles from '@material-ui/styles/makeStyles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#0a0809',
//     '@media all and (-ms-high-contrast:none)': {
//       height: 0 // IE11 fix
//     }
//   },
//   content: {
//     margin: 'auto',
//     maxWidth: '1500px',
//     padding: '0 15px',
//     fontWeight: 400,
//     color: theme.palette.white,
//     fontSize: '14px',
//     lineHeight: '24px',
//     fontFamily: "'Roboto', 'sans-serif'",
//     '& a:hover, a:focus': {
//       textDecoration: 'none',
//       color: '#ee5928'
//     },
//     [theme.breakpoints.down('lg')]: {
//       margin: '0 50px'
//     },
//     [theme.breakpoints.down('sm')]: {
//       margin: '0 20px'
//     }
//   }
// }));

const DefaultLayout = ({ route }) => {
  // const classes = useStyles();
  return (
    <Suspense fallback={<LinearProgress />}>
      {renderRoutes(route.routes)}
    </Suspense>
  );
};

// const routeShape = {
//   routes: PropTypes.arrayOf(PropTypes.object)
// };
DefaultLayout.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

// DefaultLayout.defaultProps = {
//   route: {}
// };

export default DefaultLayout;
