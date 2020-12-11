import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "react-service-worker";
import reportWebVitals from "./reportWebVitals";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css';



ReactDOM.render(
    <React.StrictMode>
  <App />
  </React.StrictMode>,
document.getElementById("root"));
registerServiceWorker();
reportWebVitals();
