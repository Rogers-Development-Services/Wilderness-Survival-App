import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
    <Auth0Provider
        domain="dev-qajxs-8o.us.auth0.com"
        clientId="HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('app')
);