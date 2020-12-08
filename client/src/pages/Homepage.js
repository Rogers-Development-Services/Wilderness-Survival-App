import React from "react";
import Login from "../components/Login"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

function Home() {
  return (
    <div>
      <h1>Nomad</h1>
      <div className="background-position: center center">
      <LoginButton />
      <LogoutButton />
      </div>
    </div>
  );
}

export default Home;
