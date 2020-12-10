import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
import {Auth0Provider} from '@auth0/auth0-react';
// import createAuth0Client from '@auth0/auth0-spa-js';



ReactDOM.render(
  <App />,
document.getElementById("root"));
serviceWorkerRegistration.register();
reportWebVitals();
