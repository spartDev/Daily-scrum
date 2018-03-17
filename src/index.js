import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';

import GlobalCss from './styles/global';
import Theme from './styles/theme';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/* Load web font */
WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif'],
  },
});
/* Inject global css */
GlobalCss();

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  MOUNT_NODE,
);
registerServiceWorker();
