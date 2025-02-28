import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import './primereact-theme/theme.css';
import './index.css';
import './i18n/i18n.ts';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
