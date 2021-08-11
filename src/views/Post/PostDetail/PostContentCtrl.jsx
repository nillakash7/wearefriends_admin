import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import makeStyles from '@material-ui/styles/makeStyles';
import { MEDIA_TYPE } from '../../../configs/contentConfig';
import AppImgLoader from '../../../components/AppImgLoader';
import AppPlayer from '../../../components/player/MediaPlayer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '15px 0',
    flexWrap: 'wrap'
  },
  previewItem: {},
  imgPreview: {
    width: '300px',
    height: '200px',
    borderRadius: '5px',
    marginRight: '15px',
    objectFit: 'cover',
    border: theme.palette.border.default
  },
  videoPreview: {
    borderRadius: '5px',
    marginRight: '15px'
    // objectFit: 'contain',
    // border: theme.palette.border.default
  },
  voicePreview: {
    width: '100%',
    height: '45px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: theme.palette.border.default,
    background: theme.palette.background.media
  }
}));

const PostContentCtrl = ({ className, contents }) => {
  const classes = useStyles();

  if (!contents || contents.length === 0) return null;

  return (
    <div className={clsx(classes.root, className)}>
      {contents.map((c) => (
        <div className={classes.previewItem} key={c.contentID}>
          {c.contentType === MEDIA_TYPE.IMG && (
            <AppImgLoader
              img={{
                title: 'Post Image',
                thumbUrl: c.thumbUrl,
                url: c.contentUrl
              }}
              className={classes.imgPreview}
            />
          )}
          {c.contentType === MEDIA_TYPE.VIDEO && (
            <AppPlayer url={c.contentUrl} className={classes.videoPreview} />
          )}
          {c.contentType === MEDIA_TYPE.VOICE && (
            <AppPlayer url={c.contentUrl} isAudio />
          )}
          {/* <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> */}
        </div>
      ))}
    </div>
  );
};

PostContentCtrl.propTypes = {
  className: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.object).isRequired
  // onChange: PropTypes.func.isRequired
};

PostContentCtrl.defaultProps = {
  className: ''
};

export default PostContentCtrl;
