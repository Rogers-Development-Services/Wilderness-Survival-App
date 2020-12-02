import React from "react";
import Login from "../components/Login"
import LoginButton from "../components/Login";
import auth0Client from "../components/Offline"

function Home() {
  return (
    <div>
      <h1>Nomad</h1>
      <div className="background-position: center center">
      <Login />
      </div>
    </div>
  );
}

export default Home;
