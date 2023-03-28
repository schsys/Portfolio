import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import 'react-tooltip/dist/react-tooltip.css'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// ReactDOM.render(<App />, document.getElementById('root') )