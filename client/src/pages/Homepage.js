import React from "react";
import { Row } from "react-materialize";
import Login from "../components/Login"
import "../pages/Homepage.css"


function Home() {
  return (
    <div>
      <img className="responsive-img center-align" alt="mountain" src="/assets/mountain.jpg"></img>

      <h1 className="center-align homepage-title">Practical help for the great outdoors.</h1>
      <Login />
      <div>

        <div
          className="background-position: center"
        >

        </div>
      </div>

    </div>
  );
};

export default Home;