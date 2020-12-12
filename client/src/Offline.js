import React, { useState } from "react";
import localforage, { key } from "localforage";
import Notes from "./pages/Notes"

class forage extends React.Component {
    state
}

function forage() {
    localforage.getItem({ Notes }).then(function (value) {
      console.log(value)
    })
  }
  
  export default forage;