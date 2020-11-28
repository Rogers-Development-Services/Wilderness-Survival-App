import React from "react";
import API from "../utils/API"
class Notes extends React.Component {
    state= {
        title: "",
        note: ""
    
    }
    userInput=(event)=>{
        let value=event.target.value
        let name= event.target.name
        this.setState({
            [name]: value
        })
    }
    saveNote=()=>{
        let record={
            title: this.state.title, 
            note: this.state.note,
            // user_ID: this.state.user_ID
        }
        console.log (record);

<<<<<<< HEAD
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
=======
        API.createNote(record)
        .then(results=>{
            console.log("note saved.")
        })
    }
    render(){
        return(
            <div id="user-input" className="container">
            <p>Title</p>
             <input onChange={this.userInput} type="text" value={this.state.title} name="title" />
            <br />
            <p>Note</p>
            <textarea name="note" onChange={this.userInput} value={this.state.note}></textarea>
            <div id="buttons">
              <div id="action-button">
                <button onClick={this.saveNote} id="make-new">Submit</button>
              </div>
              <br></br>
              <button id="clear-all">Delete Note</button>
            </div>
          </div> 
        )
    }
>>>>>>> 35c0a46c71575c7a6fbd4b4854a53ca2a1d4346c
}
export default Notes;

