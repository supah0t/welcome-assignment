import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Necessary import for react tooltip
import 'react-tooltip/dist/react-tooltip.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
