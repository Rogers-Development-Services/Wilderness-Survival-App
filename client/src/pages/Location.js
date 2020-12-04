import React from "react";
import Login from "../components/Login"
import loginButton from "../components/Login";
import MapContainer from "../components/MapContainer.js"




function Location() {
  return (
    <div>
      <h1>Location</h1>
      <p>
        { loginButton }
      </p>
      <MapContainer></MapContainer>
    </div>
  );
}



export default Location;