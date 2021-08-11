import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImgContent = ({ img, className }) => {
  return (
    <LazyLoadImage
      className={className}
      alt={img.title}
      effect="blur"
      src={img.url}
    />
  );
};

// const imgItemShape = {
//   title: PropTypes.string,
//   url: PropTypes.string.isRequired
// };
ImgContent.propTypes = {
  img: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string
};
ImgContent.defaultProps = {
  className: ''
};

export default ImgContent;
