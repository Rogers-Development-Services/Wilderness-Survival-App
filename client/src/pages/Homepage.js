import React from "react";
import Login from "../components/Login"
import LoginButton from "../components/Login";
import Auth0Client from "../components/Offline";

function Home() {
  return (
    <div>
      <h1>Home Page <span id="username"></span></h1>
      <button type="submit" id="btn-login">Sign In</button>
      <button type="submit" id="btn-logout">Sign Out</button>
    </div>
  );
}

export default Home;
