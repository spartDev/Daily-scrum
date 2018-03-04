import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalCss from './styles/global';
import Theme from './styles/theme';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/* Inject global css */
GlobalCss();

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<ThemeProvider theme={Theme}><App /></ThemeProvider>, MOUNT_NODE);
registerServiceWorker();
