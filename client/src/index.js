import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import {Auth0Provider} from '@auth0/auth0-react';
import createAuth0Client from '@auth0/auth0-spa-js';

ReactDOM.render(
<Auth0Provider
    domain="dev-qajxs-8o.us.auth0.com"
    clientId="HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0"
    redirectUri={window.location.origin}>
<App />
</Auth0Provider>, 
document.getElementById("root"));
registerServiceWorker();
