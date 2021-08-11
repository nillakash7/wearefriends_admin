import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import makeStyles from '@material-ui/styles/makeStyles';

import AppModal from './dialogs/AppModal';

const useStyles = makeStyles((theme) => ({
  root: {},
  thumb: {
    border: theme.palette.border.dark
  },
  lgImgContainer: {
    minWidth: '300px',
    textAlign: 'center'
  }
}));

const AppImgLoader = ({ img, className }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const imgClickHandler = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <LazyLoadImage
        alt={img.title}
        effect="opacity"
        src={img.thumbUrl}
        className={clsx(classes.thumb, className)}
        style={{ cursor: img.url ? 'pointer' : '' }}
        onClick={imgClickHandler}
      />
      <AppModal title={img.title} isOpen={isOpen} onClose={onClose}>
        <div className={classes.lgImgContainer}>
          <img src={img.url} alt={img.title} className={classes.thumb} />
        </div>
      </AppModal>
    </>
  );
};

// const imgItemShape = {
//   title: PropTypes.string,
//   thumbUrl: PropTypes.string,
//   url: PropTypes.string
// };
AppImgLoader.propTypes = {
  img: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string
};
AppImgLoader.defaultProps = {
  className: ''
};

export default AppImgLoader;
