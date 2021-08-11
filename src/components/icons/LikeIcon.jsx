import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function LikeIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      {/* <path d="M19.31,3.527a5.712,5.712,0,0,0-7.794.568l-.823.848L9.87,4.1a5.712,5.712,0,0,0-7.794-.568,6,6,0,0,0-.414,8.684l8.083,8.346a1.31,1.31,0,0,0,1.892,0l8.083-8.346a5.994,5.994,0,0,0-.409-8.684Z" /> */}
      <path
        d="M11.48,22.541c0.137,0.143,0.325,0.22,0.521,0.22c0.196,0,0.385-0.077,0.52-0.22l9.354-9.476
	c3.898-3.95,1.129-10.776-4.419-10.776c-3.331,0-4.858,2.448-5.455,2.905c-0.599-0.46-2.117-2.905-5.455-2.905
	c-5.528,0-8.335,6.809-4.417,10.776L11.48,22.541z"
      />
      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
