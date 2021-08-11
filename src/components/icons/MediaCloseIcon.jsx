import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function CloseIcon(props) {
  return (
    <SvgIcon
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      viewBox="0 0 20 20"
      style={{ height: '20px', width: '20px' }}
    >
      <path d="M9.63,3.375A6.255,6.255,0,1,0,15.886,9.63,6.254,6.254,0,0,0,9.63,3.375Zm1.585,8.52L9.63,10.31,8.045,11.895a.481.481,0,1,1-.68-.68L8.951,9.63,7.366,8.045a.481.481,0,0,1,.68-.68L9.63,8.951l1.585-1.585a.481.481,0,1,1,.68.68L10.31,9.63l1.585,1.585a.483.483,0,0,1,0,.68A.477.477,0,0,1,11.215,11.895Z" />
      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
