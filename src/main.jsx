import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './app'; 

const root = createRoot(document.getElementById('root')); // Asigna el root primero
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
