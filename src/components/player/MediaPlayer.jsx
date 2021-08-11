import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  video: {
    width: '400px',
    maxWidth: '450px'
  },
  audio: {
    width: '600px',
    maxWidth: '600px',
    height: '60px'
  },
  player: {
    width: '100%'
    // "&:hover": {
    //   "& $controlsWrapper": {
    //     visibility: "visible",
    //   },
    // },
  }
}));

const AppPlayer = ({ url, isAudio, className }) => {
  const classes = useStyles();

  const playerRef = useRef(null);

  return (
    <>
      {isAudio && (
        <div className={clsx(classes.audio, className)}>
          <ReactPlayer
            ref={playerRef}
            width="100%"
            height="60px"
            url={url}
            // pip={pip}
            // playing={playing}
            controls
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  preload: 'none'
                  //       crossOrigin: 'anonymous'
                }
              }
            }}
            // light={light}
            // loop={loop}
            // playbackRate={playbackRate}
            // volume={volume}
            // muted={muted}
            // onProgress={handleProgress}
          />
        </div>
      )}

      {!isAudio && (
        <div className={clsx(classes.video, className)}>
          <ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            url={url}
            // pip={pip}
            // playing={playing}
            controls
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload'
                  // preload: 'none'
                  //       crossOrigin: 'anonymous'
                }
              }
            }}
            // light={light}
            // loop={loop}
            // playbackRate={playbackRate}
            // volume={volume}
            // muted={muted}
            // onProgress={handleProgress}
          />
        </div>
      )}
    </>
  );
};

AppPlayer.propTypes = {
  isAudio: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string.isRequired
};
AppPlayer.defaultProps = {
  isAudio: false,
  className: ''
};

export default AppPlayer;
