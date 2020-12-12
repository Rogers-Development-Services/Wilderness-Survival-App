import React, { useState } from "react";
import localforage, { key } from "localforage";
import Notes from "./pages/Notes"

function forage() {
    localforage.getItem({ Notes }).then(function (value) {
      console.log(value)
    })
  }
  
  export default forage;