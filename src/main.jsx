import React from 'react';
import './index.css';
import App from './App.jsx';

import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter basename="/RefinedAsthethicsV2/">
        <App/>
      </BrowserRouter>
    </React.StrictMode>
)

