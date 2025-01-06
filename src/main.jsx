import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import analytics from './utils/analytics';

analytics.page()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);