// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); 
container.innerHTML = '';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



