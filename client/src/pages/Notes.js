import React from "react";
import Login from "../components/Login"
import loginButton from "../components/Login";

function Home() {
  return (
    <div>
      <h1>Mongo Note App</h1>
      <h2>Status: <span id="status" class="primary">Creating</span></h2>
      <h4>Create a new note by submitting its title and content below</h4>
      <h4>Click on a note to edit its title or content</h4>
      <div id="user-input">
        <p>Title</p>
        <input type="text" id="title" />
        <br />
        <p>Note</p>
        <textarea id="note"></textarea>
        <div id="buttons">
          <div id="action-button">
            <button id="make-new">Submit</button>
          </div>
          <button id="clear-all">Delete All Notes</button>
        </div>
      </div>
    </div>
  );
}

export default Home;