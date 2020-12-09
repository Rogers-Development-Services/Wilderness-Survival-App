import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
import "../pages/Homepage.css"

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <div>
      <img className="responsive-img center-align" alt="mountain" src="/assets/mountain.jpg"></img>

      <h1 className="center-align homepage-title">Practical help for the great outdoors.</h1>
      {/* <Wrapper> */}
            <LoginButton />
            <LogoutButton />
          {/* </Wrapper> */}
      
    </div>
  );
};

export default Home;