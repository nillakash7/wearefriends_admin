import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import clsx from 'clsx';
// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Container from '@material-ui/core/Container';

// const { NODE_ENV } = process.env;
// #region Styles
export const pageContainerStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

function Page({ className, title, children }) {
  // const location = useLocation();
  const classes = pageContainerStyles();

  useEffect(() => {
    // if (NODE_ENV !== 'production') {
    //   return;
    // }
    // if (window.gtag) {
    //   window.gtag('config', GA_MEASUREMENT_ID, {
    //     page_path: location.pathname,
    //     page_name: title
    //   });
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={clsx(classes.root, className)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container maxWidth={false}>{children}</Container>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string
};
Page.defaultProps = {
  children: undefined,
  title: '',
  className: ''
};

export default Page;
