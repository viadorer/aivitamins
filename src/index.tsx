import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdvancedVitaminAdvisor from './components/AdvancedVitaminAdvisor.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdvancedVitaminAdvisor />
  </React.StrictMode>
);
