import React, { useState } from 'react';
import Toaster from './Toaster';

const DEFAULT_DURATION = 10000;
const messageTypes = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

const initState = {
  message: '',
  visible: false,
  type: messageTypes.success
};

const useToaster = () => {
  const [state, setState] = useState({ ...initState });

  const hideSpinner = () => setState((p) => ({ ...p, visible: false }));

  const showToaster = (message, type, d = DEFAULT_DURATION) => {
    setState((p) => ({
      ...p,
      message,
      type,
      visible: true
    }));
    setTimeout(() => {
      hideSpinner();
    }, d);
  };

  // #region Actions
  const success = (msg, d) => {
    showToaster(msg, messageTypes.success, d);
  };

  const error = (msg, d) => {
    showToaster(msg, messageTypes.error, d);
  };

  const info = (msg, d = DEFAULT_DURATION) => {
    showToaster(msg, messageTypes.info, d);
  };

  const warning = (msg, d = DEFAULT_DURATION) => {
    showToaster(msg, messageTypes.warning, d);
  };

  const handleClose = () => {
    setState((p) => ({
      ...p,
      visible: false
    }));
  };
  // #endregion

  const ToasterContainer = state.visible ? (
    <Toaster state={state} handleClose={handleClose} />
  ) : undefined;

  return {
    ToasterContainer,
    toaster: {
      success,
      error,
      info,
      warning
    }
  };
};

export default useToaster;
