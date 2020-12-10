import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
<<<<<<< HEAD
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
=======
import "../pages/Homepage.css"

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <div>
      <br></br>
      <img className="responsive-img center-align" alt="mountain" src="/assets/mountain.jpg"></img>

      <h2 className="center-align homepage-title">Practical help for the great outdoors.</h2>
      {/* <Wrapper> */}
            <LoginButton />
            <LogoutButton />
          {/* </Wrapper> */}
      
>>>>>>> cb337fcbcaac575393b9fd0c1da29f069ce40b7c
    </div>
  );
};

export default Home;