/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import './infrastructure/view/styles/index.scss';
// Import root app
import { App } from './infrastructure/view';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';
import { MissionProvider } from 'infrastructure/view/store/Mission/MissionContext';
import { CooperatorProvider } from 'infrastructure/view/store/Cooperator/CooperatorContext';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <MissionProvider>
    <CooperatorProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </CooperatorProvider>
  </MissionProvider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
