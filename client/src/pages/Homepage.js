import React from "react";
import Login from "../components/Login"
import LoginButton from "../components/Login";
import 'materialize-css';
import "./Checklistpage.css";


function Home() {
  return (
    <div className="container">
      <img class="responsive-img" alt="mountain" src="/assets/mountain.jpg"></img>
      <div className="center">
        <Login />
      </div>
    </div>
  );
}

export default Home;