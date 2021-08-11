import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function SendIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path d="M0.515,21.852L23.494,12L0.515,2.148l-0.01,7.665l16.42,2.189l-16.42,2.187L0.515,21.852z" />
      {/* <path
        className="youtube-middle"
        d="M 9 7.5 L 9 16.5 L 16.5 12 Z M 9 7.5"
      /> */}
    </SvgIcon>
  );
}
