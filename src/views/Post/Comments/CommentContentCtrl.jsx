/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import { commentMediaStyles } from './commentHelper';
import { MEDIA_TYPE } from '../../../configs/contentConfig';
import AppImgLoader from '../../../components/AppImgLoader';
import AppPlayer from '../../../components/player/MediaPlayer';

const CommentContentCtrl = ({ content }) => {
  const classes = commentMediaStyles();

  return (
    <div className={classes.root}>
      <div className={classes.previewItem}>
        {content.contentType === MEDIA_TYPE.IMG && (
          <AppImgLoader
            img={{
              title: 'Comment Img',
              thumbUrl: content.thumbUrl,
              url: content.contentUrl
            }}
            className={classes.imgPreview}
          />
        )}
        {content.contentType === MEDIA_TYPE.VIDEO && (
          <AppPlayer url={content.contentUrl} />
        )}
        {content.contentType === MEDIA_TYPE.VOICE && (
          <AppPlayer url={content.contentUrl} isAudio />
        )}
      </div>
    </div>
  );
};

CommentContentCtrl.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired
};

CommentContentCtrl.defaultProps = {};

export default CommentContentCtrl;
