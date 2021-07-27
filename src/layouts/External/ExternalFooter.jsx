import React from 'react';
// import PropTypes from 'prop-types';
// import { Link as RouterLink } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

// import AppLink from '../../components/AppLink';

// import {
//   socialLinks,
//   getFooterLogoText,
//   getContactInfos
// } from '../External/homeConfig';

import { footerStyles } from './homeHelper';
// import routePaths from '../../routePaths';

const ExternalFooter = () => {
  const classes = footerStyles();
  // const contactInfos = getContactInfos();
  return (
    <>
      <div className={classes.footer}>
        {/* <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              color="inherit"
              component="h2"
              className={classes.footerHeader}
            >
              About sms
            </Typography>
            <Typography
              color="inherit"
              component="p"
              className="mt2"
              dangerouslySetInnerHTML={{
                __html: getFooterLogoText(countryName)
              }}
            />
          </Grid>

          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Typography
              color="inherit"
              component="h2"
              className={classes.footerHeader}
            >
              Information
            </Typography>
            <div className="my2">
              <AppLink
                component={RouterLink}
                to={routePaths.TERMS_CONDITIONS}
                text="Terms & Conditions"
                className={classes.link}
              />
              <AppLink
                url="https://www.sms.com/privacy-policy.html"
                text="Privacy Policy"
                className={classes.link}
              />
            </div>
            <Typography
              color="inherit"
              component="h2"
              style={{ paddingTop: '120px' }}
              className={`${classes.footerHeader} mb5`}
            >
              Follow Us
            </Typography>
            <div className={classes.socialLinks}>
              {socialLinks.map((sl) => (
                <a
                  key={sl.title}
                  href={sl.url}
                  className="mr2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={sl.className}></i>
                </a>
              ))}
            </div>
          </Grid>

          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Typography
              color="inherit"
              component="h2"
              className={classes.footerHeader}
            >
              Contact Us
            </Typography>

            {contactInfos.map((contactInfo) => (
              <div key={contactInfo.office}>
                <Typography
                  color="inherit"
                  className={classes.office}
                  dangerouslySetInnerHTML={{
                    __html: contactInfo.office
                  }}
                />
                <Typography
                  color="inherit"
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: contactInfo.title
                  }}
                />
                <Typography
                  color="inherit"
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: contactInfo.address
                  }}
                />
              </div>
            ))}
          </Grid>
        </Grid> */}
      </div>

      <div className={classes.copyrightSection}>
        {/* <p className={classes.copyrightText}>
          <i className="far fa-copyright"></i> Copyright{' '}
          {new Date().getFullYear()}{' '}
          <AppLink text="sms.com" url="https://sms.com" />
        </p> */}
      </div>
    </>
  );
};

ExternalFooter.propTypes = {
  // className: PropTypes.string
};

export default ExternalFooter;
