// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import { SwitchableFluentThemeProvider } from './app/theming/SwitchableFluentThemeProvider';
import { ShakeToSendLogs } from './app/utils/ShakeToSendLogs';

const domNode = document.getElementById('root');
if (!domNode) {
  throw new Error('Failed to find the root element');
}

createRoot(domNode).render(
  <SwitchableFluentThemeProvider scopeId="SampleCallingApp">
    <div><img width='320px' src='https://listening-ear.co.uk/wp-content/themes/listeningear/images/logo.png'/><h3>Video Conferencing</h3></div>
    <div className="wrapper">
      <App />
      <ShakeToSendLogs />
    </div>
    <div>Footer</div>
  </SwitchableFluentThemeProvider>
);
