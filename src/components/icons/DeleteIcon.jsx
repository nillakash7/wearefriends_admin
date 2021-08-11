import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function DeleteIcon(props) {
  return (
    <SvgIcon
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {/* <path d="M8.315,17.546a1.636,1.636,0,0,0,1.631,1.631h6.523A1.636,1.636,0,0,0,18.1,17.546V7.761H8.315Zm10.6-12.23H16.061L15.246,4.5H11.169l-.815.815H7.5V6.946H18.915Z" /> */}
      <path d="M4.128,21.184c0,1.448,1.175,2.622,2.625,2.622h10.494c1.45,0,2.625-1.174,2.625-2.622V5.438H4.128V21.184z" />
      <polygon points="16.591,1.503 15.28,0.191 8.72,0.191 7.408,1.503 2.816,1.503 2.816,4.128 21.184,4.128 21.184,1.503" />

      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
