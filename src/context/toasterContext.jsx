import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useToaster from '../components/toaster/useToaster';

export const ToasterContext = createContext();

// This context provider is passed to any component requiring the context
const ToasterProvider = ({ children }) => {
  const { ToasterContainer, toaster } = useToaster();

  return (
    <ToasterContext.Provider
      value={{
        ToasterContainer,
        toaster
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
};
ToasterProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export default ToasterProvider;
