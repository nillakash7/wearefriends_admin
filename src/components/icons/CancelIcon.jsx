import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function DeleteIcon(props) {
  return (
    <SvgIcon
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      viewBox="0 0 20 20"
      style={{ height: '20px', width: '20px' }}
    >
      <path d="M8.315,17.546a1.636,1.636,0,0,0,1.631,1.631h6.523A1.636,1.636,0,0,0,18.1,17.546V7.761H8.315Zm10.6-12.23H16.061L15.246,4.5H11.169l-.815.815H7.5V6.946H18.915Z" />
      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
