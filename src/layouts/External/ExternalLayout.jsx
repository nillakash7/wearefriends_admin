import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

import ExternalHeader from './ExternalHeader';
import ExternalFooter from './ExternalFooter';

const ExternalLayout = ({ route }) => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <ExternalHeader />
      {renderRoutes(route.routes)}
      <ExternalFooter />
    </Suspense>
  );
};

ExternalLayout.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};
export default ExternalLayout;
