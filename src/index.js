import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//npx kill-port 3000 in case React bugs again

const root = ReactDOM.createRoot(document.getElementById('root')); // v18 do React deve ser assim;
root.render(
 <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>
);
// ReactDOM.render((<App />), document.getElementById('root'));
