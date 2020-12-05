import React from "react";
import API from "../utils/API"
import "./Notes.css";
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
            user_ID: this.state.user_ID
        }
        console.log (record);

        API.createNote(record)
        .then(results=>{
            console.log("note saved.")
        })
    }
    render(){
        return(
            <div id="user-input" className="container">
            <h1>Notes</h1>
            <p>Note Title</p>
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
}
export default Notes;

