import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function EmojiIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path
        d="M12,0.797C5.812,0.797,0.797,5.812,0.797,12c0,6.187,5.016,11.203,11.203,11.203c6.187,0,11.203-5.017,11.203-11.203l0,0
	c0.004-6.185-5.006-11.2-11.192-11.203C12.007,0.797,12.004,0.797,12,0.797z M15.613,8.381c0.798,0,1.445,0.648,1.445,1.446
	s-0.647,1.444-1.445,1.444s-1.443-0.646-1.443-1.444c-0.003-0.797,0.642-1.442,1.439-1.446H15.613z M8.387,8.381
	c0.799,0.005,1.443,0.652,1.44,1.451c-0.003,0.798-0.651,1.442-1.45,1.439c-0.797-0.003-1.44-0.648-1.44-1.444
	c0-0.797,0.646-1.444,1.442-1.446c0.001,0,0.002,0,0.002,0H8.387z M17.185,16.068c-2.386,2.863-6.64,3.251-9.503,0.867
	c-0.313-0.262-0.604-0.554-0.866-0.867c-0.245-0.315-0.187-0.771,0.129-1.015c0.301-0.23,0.729-0.191,0.981,0.09
	c1.879,2.25,5.225,2.551,7.475,0.673c0.243-0.203,0.469-0.429,0.672-0.673c0.277-0.287,0.734-0.295,1.023-0.021
	c0.259,0.25,0.296,0.652,0.084,0.945H17.185z"
      />
      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
