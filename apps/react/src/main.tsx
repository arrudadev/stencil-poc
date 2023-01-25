import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import '@stencil-ui/components/dist/components/components.css';

import { applyPolyfills, defineCustomElements } from '@stencil-ui/components/loader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

applyPolyfills().then(() => {
  defineCustomElements();
});
