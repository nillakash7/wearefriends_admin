import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImgLoader = ({ img }) => {
  return <LazyLoadImage alt={img.title} effect="blur" src={img.url} />;
};

const imgItemShape = {
  title: PropTypes.string,
  url: PropTypes.string
};
LazyImgLoader.propTypes = {
  img: PropTypes.objectOf(PropTypes.shape(imgItemShape)).isRequired
};

export default LazyImgLoader;
