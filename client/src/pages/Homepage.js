import React from "react";
import "../pages/Homepage.css"

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <div>
      <br></br>
      <img className="responsive-img" alt="mountain" src="https://wilderness-survival-app.s3-us-west-1.amazonaws.com/images/mountain.jpg"></img>

      <h2 className="center-align homepage-title">Support for the great outdoors.</h2>
      <Wrapper>
        <LoginButton />
        <LogoutButton />
      </Wrapper>

    </div>
  );
};

export default Home;