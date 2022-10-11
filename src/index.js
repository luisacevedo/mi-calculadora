import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './components/Logo.js';
import Calculadora from './components/Calculadora.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <Calculadora />
  </React.StrictMode>
);
