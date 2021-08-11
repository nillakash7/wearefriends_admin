/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import CloseCtrl from './CloseCtrl';
import { MEDIA_TYPE } from '../../../configs/contentConfig';

const useStyles = makeStyles((theme) => ({
  previewItem: {
    position: 'relative',
    width: '150px',
    height: '100%',
    marginLeft: '10px'
  },
  mediaPreview: {
    width: '100%',
    borderRadius: '5px',
    border: theme.palette.border.default
  },
  closeIcon: {
    position: 'absolute',
    top: '-16px',
    right: '-10px'
  },
  videoPlayIcon: {
    position: 'absolute',
    top: '42%',
    right: '42%'
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
  },
  musicPlayIcon: {}
}));

const AddContentPreviewCtrl = ({ content, removeAttachment }) => {
  const classes = useStyles();

  if (!content) return null;

  return (
    <div className={classes.previewItem}>
      {content.mediaType === MEDIA_TYPE.IMG && (
        <img
          alt={content.name}
          src={content.url}
          className={classes.mediaPreview}
        />
      )}
      {content.mediaType === MEDIA_TYPE.VIDEO && (
        <>
          <video
            // ref={mediaRef}
            src={content.url}
            className={classes.mediaPreview}
          />
          <PlayCircleOutlineIcon className={classes.videoPlayIcon} />
        </>
      )}
      {content.mediaType === MEDIA_TYPE.VOICE && (
        <>
          <audio
            // ref={mediaRef}
            src={content.url}
            className={classes.mediaPreview}
          />
          <div className={classes.voicePreview}>
            <PlayCircleOutlineIcon className={classes.musicPlayIcon} />
          </div>
        </>
      )}

      <CloseCtrl
        className={classes.closeIcon}
        id={content}
        clickHandler={removeAttachment}
      />
    </div>
  );
};

AddContentPreviewCtrl.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  // mediaRef: PropTypes.objectOf(PropTypes.any),
  removeAttachment: PropTypes.func.isRequired
};

AddContentPreviewCtrl.defaultProps = {
  content: null
  // mediaRef: ''
};

export default AddContentPreviewCtrl;
