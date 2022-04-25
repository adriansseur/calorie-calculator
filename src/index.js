import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import '@fontsource/roboto/400.css';
import { ValidationContextProvider } from './validationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ValidationContextProvider>
        <App />
    </ValidationContextProvider>
);

serviceWorkerRegistration.register();