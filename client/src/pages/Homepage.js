import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
import LoginButton from "../components/Login";
import "./Homepage.css";

function Home() {
  return (
    <div className="homepage-component">
      <img className="responsive-img" alt="mountain" src="./assets/mountain.svg"></img>
      <h1>Nomad</h1>
      <div className="background-position: center">
      <Login />
      </div>
    </div>
  );
}

export default Home;
