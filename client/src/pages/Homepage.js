import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <div>
      <h1>Nomad</h1>
      <div className="background-position: center center">
        <Wrapper>
          <LoginButton />
          <LogoutButton />
        </Wrapper>
      </div>
    </div>
  );
}

export default Home;
