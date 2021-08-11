import React, { createContext } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { Provider as StoreProvider } from 'react-redux';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import 'react-perfect-scrollbar/dist/css/styles.css';

import configureStore from './redux/store/configureStore';
import AuthGuard from './AuthGuard';
import { theme } from './themes';
import routes from './routes';
import ScrollController from './components/init/ScrollController';
import StyleProvider from './components/init/StyleProvider';
import useToaster from './components/toaster/useToaster';
// import CookiesNotification from './components/CookiesNotification';
// import useGoogleAnalytics from './hooks/useGoogleAnalytics';
// import './mixins/moment';
// import './mixins/chartjs';
// import './mixins/prismjs';
import './assets/scss/main.scss';

const history = createBrowserHistory();
const store = configureStore();

export const ToasterContext = createContext();

const App = () => {
  // useGoogleAnalytics();
  const { ToasterContainer, toaster } = useToaster();
  // window.workInProgress = true;
  // window.onbeforeunload = () => {
  //   if (window.workInProgress) {
  //     return 'Something in progress do you want to stop?';
  //   }
  //   return '';
  // };
  // window.addEventListener('beforeunload', () => {
  //   const confirmationText = 'Something in progress do you want to stop?';
  //   if (!window.workInProgress) {
  //     // event.returnValue = confirmationText; // Gecko, Trident, Chrome 34+
  //     return confirmationText; // Gecko, WebKit, Chrome <34
  //   }
  //   // Set flag back to false, just in case
  //   // user stops loading page after clicking a link.
  //   window.workInProgress = false;
  //   return '';
  // });

  // document.addEventListener('click', (event) => {
  //   if (event.target.tagName.toLowerCase() === 'a') {
  //     disableConfirmation = true;
  //   }
  // });
  // document.addEventListener('submit', (event) => {
  //   disableConfirmation = true;
  // });

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <StyleProvider>
          <ToasterContext.Provider
            value={{
              toaster
            }}
          >
            <Router history={history}>
              <AuthGuard>
                <ScrollController />
                {ToasterContainer}
                {/* <CookiesNotification /> */}
                {renderRoutes(routes)}
              </AuthGuard>
            </Router>
          </ToasterContext.Provider>
        </StyleProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
