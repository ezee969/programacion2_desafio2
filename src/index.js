import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import RouteSwitch from './route_switch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
