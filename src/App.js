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
