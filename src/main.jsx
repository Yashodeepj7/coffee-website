import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/responsive.css';
import App from './App.jsx';

function renderApp() {
  const container = document.getElementById('root');
  if (container) {
    createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

