import React from "react";
import Login from "../components/Login"
import loginButton from "../components/Login";

function Home() {
  return (
    <div>
      <h1>Location Page</h1>
      <p>
        { loginButton }
      </p>
    </div>
  );
}

export default Home;