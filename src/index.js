import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GifSeartchApp } from './GifSeartchApp';
import { CssBaseline } from '@mui/material';
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <GifSeartchApp/>
  </React.StrictMode>
);
