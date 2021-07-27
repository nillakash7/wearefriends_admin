import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';

// import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';

import Page from '../../components/pageCtrl/Page';
import { isLoggedIn } from '../../helpers/storageHelper';
// import AppIconBtn from '../../components/AppIconBtn';
// import AppLink from '../../components/AppLink';
// import FacebookIcon from '../../components/icons/FacebookIcon';
// import TwitterIcon from '../../components/icons/TwitterIcon';
// import InstagramIcon from '../../components/icons/InstagramIcon';
// import LinkedinIcon from '../../components/icons/LinkedinIcon';
// import TelegramIcon from '../../components/icons/TelegramIcon';
// import YoutubeIcon from '../../components/icons/YoutubeIcon';
// import LazyImgLoader from '../../components/LazyImgLoader';

// import {
//   aboutUsImgUrl,
//   whyUsImgUrl,
//   homeVideoSlides,
//   getAboutUsTxt,
//   getWhyUsTxt,
//   getCultureTxt,
//   csrImgUrl,
//   getCSRTxt,
//   homeGalleryImages,
//   socialLinks,
//   footerLinks,
//   getFooterLogoText,
//   getBusinessItems,
//   footerDocumentLinks
// } from './homeConfig';

// import HomeVideoSlider from './HomeVideoSlider';
// import BusinessSlider from './BusinessSlider';
// import GalleryImageSlider from './GalleryImageSlider';
import routePaths from '../../routePaths';
import { PageHeader } from '../../components/pageCtrl';

const Dashboard = ({ user, history }) => {
  const title = 'Dashboard';
  if (!isLoggedIn(user)) {
    history.push(routePaths.LOGIN);
    return null;
  }

  //   const joinImg = (
  //     <img
  //       src="/images/home_page/globe.png"
  //       className={classes.joinIcon}
  //       alt="join"
  //     />
  //   );

  return (
    <Page title={title}>
      {/* <ExternalHeader /> */}

      <PageHeader title={title} />
      {/* <div className={classes.header}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid
              item
              lg={6}
              md={6}
              sm={9}
              xs={12}
              className={classes.textSlider}
            >
              <h3 className={classes.subTitle}>{welcomeTxt.title}</h3>
              <Typography
                color="inherit"
                variant="body1"
                align="justify"
                dangerouslySetInnerHTML={{
                  __html: welcomeTxt.description
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div> */}

      {/* <section id="AboutUs" className={classes.commonSection}>
        {joinImg}
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={10} xs={12} className="txtCenter">
              <img src={aboutUsImgUrl} alt="" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h3 className={classes.subTitle}>About Us</h3>
              <Typography
                color="inherit"
                variant="body1"
                align="justify"
                className={classes.aboutUsTxt}
                dangerouslySetInnerHTML={{
                  __html: getAboutUsTxt()
                }}
              />
            </Grid>
          </Grid>
        </div>
      </section>

      <section
        id="BusinessOpportunities"
        className={classes.businessOpportunitiesSection}
      >
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h3 className={`txtWhite ${classes.subTitle}`}>
                BUSINESS OPPORTUNITIES
              </h3>
              <BusinessSlider items={getBusinessItems(countryName)} />
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={classes.commonSection} id="WhyUs">
        {joinImg}
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h3 className={classes.subTitle}>Why us ?</h3>
              <Typography
                color="inherit"
                variant="body1"
                className={classes.whyUsTxt}
                dangerouslySetInnerHTML={{
                  __html: getWhyUsTxt()
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="txtCenter">
              <LazyImgLoader img={{ url: whyUsImgUrl, title: 'WhyUs' }} />
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={classes.cultureSection} id="Culture">
        <div className={classes.container}>
          <Grid container spacing={3} className="mb5">
            <Grid item lg={6} md={6} sm={2} xs={12} />
            <Grid item lg={6} md={6} sm={10} xs={12}>
              <h3 className={`txtWhite ${classes.subTitle}`}>Culture</h3>
              <Typography
                color="inherit"
                variant="body1"
                align="justify"
                dangerouslySetInnerHTML={{
                  __html: getCultureTxt(countryName)
                }}
              />
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={classes.commonSection} id="CSR">
        {joinImg}
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h3 className={classes.subTitle}>
                Corporate Social Responsibility
              </h3>
              <Typography
                color="inherit"
                variant="body1"
                align="justify"
                dangerouslySetInnerHTML={{
                  __html: getCSRTxt(countryName)
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="txtCenter">
              <LazyImgLoader img={{ url: csrImgUrl, title: 'CSR' }} />
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={classes.gallerySection} id="Gallery">
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xl={12} xs={12}>
              <h3 className={`txtWhite ${classes.subTitle}`}>Gallery</h3>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <HomeVideoSlider items={homeVideoSlides} />
            </Grid>
            <Grid item lg={7} md={6} sm={12} xs={12} className="txtCenter">
           
              <GalleryImageSlider items={homeGalleryImages} />
            </Grid>
          </Grid>
        </div>
      </section>

      <div className={classes.footer}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className={classes.footerLogo}>
                <AppLink url={routePaths.HOME}>
                  <img src={IMAGE_URLS.LOGO} alt="Logo" />
                </AppLink>
                <p className="mt2">{getFooterLogoText(countryName)}</p>
              </div>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ul className={classes.footerLinks}>
                {footerDocumentLinks.map((dl) => (
                  <li key={dl.title}>
                    <a href={dl.url}>{dl.title}</a>
                  </li>
                ))}
              </ul>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div>
                <h3 className={classes.footerSubHeader}>Imprint</h3>
                <Typography
                  color="inherit"
                  component="p"
                  className="mt1"
                  dangerouslySetInnerHTML={{
                    __html: imprintInfo.title
                  }}
                />
                <p className="mt1">{imprintInfo.licence}</p>
                <Typography
                  color="inherit"
                  component="p"
                  className="mt1"
                  dangerouslySetInnerHTML={{
                    __html: imprintInfo.address
                  }}
                />
              </div>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={12}>
           
              <h3 className={classes.footerSubHeader}>Contact Us</h3>

              <div className={classes.socialLinks}>
                {socialLinks.map((sl) => (
                  <a
                    key={sl.title}
                    href={sl.url}
                    className="mr2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AppIconBtn>
                      {sl.title === 'Twitter' && <TwitterIcon />}
                      {sl.title === 'Facebook' && <FacebookIcon />}
                      {sl.title === 'Instagram' && <InstagramIcon />}
                      {sl.title === 'Linkedin' && <LinkedinIcon />}
                      {sl.title === 'Telegram' && <TelegramIcon />}
                      {sl.title === 'Youtube' && <YoutubeIcon />}
                    </AppIconBtn>
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="mt5">
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <p className={classes.copyrightText}>
                Copyright © {new Date().getFullYear()} Riseoo. All rights
                reserved.
              </p>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <ul className={classes.copyrightLinks}>
                {footerLinks.map((fl) => (
                  <li key={fl.title}>
                    <AppLink
                      component={RouterLink}
                      to={fl.url}
                      text={fl.title}
                    />
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
      </div> */}
    </Page>
  );
};

Dashboard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any)
};

Dashboard.defaultProps = {
  user: {}
};

function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
