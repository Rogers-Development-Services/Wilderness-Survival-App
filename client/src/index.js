import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
