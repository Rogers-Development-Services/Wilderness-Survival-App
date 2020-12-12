import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon } from 'react-materialize';
import API from "../utils/API";
import FunctionalNotes from "../pages/FunctionalNotes";

class Toasts extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    const updateNote = () => {

      let record = {
        id: this.props.noteId,
        title: this.props.noteTitle,
        note: this.props.noteMessage,
      }

      console.log("saveNotecall", record);

      API.createNote(record)
        .then(results => {
          console.log("note saved.", results)
          // getSavedNotes()
        });
    };
  }

  test() {

    const options = {
      html: "Note has been Updated!",
      inDuration: 300,
      outDuration: 375,
      displyLength: 4000,
      classes: "rounded",
      onClick: this.updateNote,
      completeCallback: () => {
        console.log("dismissed");
      }
    };
    M.toast(options);

  }

  render() {
    return (
      <Button
        id="make-new"
        node="button"
        type="submit"
        waves="light"
        onClick={this.test}
      >
        Save
        <Icon right>save</Icon>
      </Button>
    );
  }
}

export default Toasts;
