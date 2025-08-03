import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom'; // Keep this import
import AppRoutes from './AppRoutes'; // Keep this import
import './firebaseConfig'; // Import Firebase initialization (including auth export)

const root = ReactDOM.createRoot(document.getElementById('root'));
// Remove the redundant render call and update the main render call
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
