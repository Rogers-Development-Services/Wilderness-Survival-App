import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
import LoginButton from "../components/Login";

function Home() {
  return (
    <div>
      <h1>Nomad</h1>
      <div 
      className="background-position: center"
      >
      <Login />
      </div>
    </div>
  );
}

export default Home;
