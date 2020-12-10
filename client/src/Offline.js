import React, { useState } from "react";
import localforage from "localforage";

function App() {
    const [state, setState] = useState(0);
    localforage.setItem("test", state).then(() => {
      console.log("used localForage");
    });
  
    localforage.getItem("test").then(val => {
      console.log("got: ", val);
    });
    return (
      <button
        onClick={() => {
          setState(Math.floor(Math.random() * 10));
        }}
      >
        {state}
      </button>
    );
  }
  
  export default App;