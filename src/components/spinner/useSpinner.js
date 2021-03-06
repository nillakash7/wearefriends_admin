import React, { useState } from 'react';
import Spinner from './Spinner';

const useSpinner = () => {
  const [visible, setVisible] = useState(true);
  const showSpinner = () => setVisible(true);
  const hideSpinner = () => setVisible(false);
  const spinner = visible ? <Spinner /> : null;

  return [spinner, showSpinner, hideSpinner];
};

export default useSpinner;
