import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon } from 'react-materialize';
import API from "../utils/API";

function FunctionalToast(props) {

  const updateNote = () => {

    console.log("update");
    
    let record = {
      id: props.noteId,
      title: props.noteTitle,
      note: props.noteMessage, // New modified note is not getting passed to this field
    }

    /*  
        Once the correct data is passed in for the note field of record,
        then the update note functionality should be working!
        
    */

    console.log("saveNotecall", record);

    API.updateNote(record)
      .then(results => {
        console.log("note saved.", results)
        // getSavedNotes()
      });
  };

  const test = () => {
    const options = {
      html: "Note has been Updated!",
      inDuration: 300,
      outDuration: 375,
      displyLength: 4000,
      classes: "rounded",
      onClick: updateNote(),
      completeCallback: () => {
        console.log("dismissed");
      }
    };
    M.toast(options);
  }

  return (
    <Button
      id="save-updated-note"
      node="button"
      type="submit"
      waves="light"
      onClick={test}
    >
      Save
      <Icon right>save</Icon>
    </Button>
  )
}

export default FunctionalToast;