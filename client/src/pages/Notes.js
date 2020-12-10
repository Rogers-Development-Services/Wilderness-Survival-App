import React from "react";
import API from "../utils/API";
import "./Notes.css";
import DisplayNote from "../components/displayNote";




class Notes extends React.Component {
    state = {
        title: "",
        note: "",
        allNotes: []
    }

    componentDidMount = () => {
        this.getSavedNotes()
    }

    userInput = (event) => {
        let value = event.target.value
        let name = event.target.name
        this.setState({
            [name]: value
        })
    }

    saveNote = () => {
        let record = {
            title: this.state.title,
            note: this.state.note,
            // user_ID: this.state.user_ID
        }
        console.log("saveNotecall", record);

        API.createNote(record)
            .then(results => {
                console.log("note saved.", results)
                this.getSavedNotes()
            })
    }

    getSavedNotes = () => {
        API.getNotes()
            .then(results => {
                console.log(results.data)
                this.setState({allNotes:[results.data]})
            })
    }

    render() {
        return (
            <div id="user-input" className="container">
                <h1>Notes</h1>
                
                
                <p>Title</p>
                <input onChange={this.userInput} type="text" value={this.state.title} name="title" />
                <br />
                <p><i className="small material-icons">edit</i> </p>
                <textarea name="note" onChange={this.userInput} value={this.state.note}></textarea>
                <div id="buttons">
                    <div id="action-button">
                        <button onClick={this.saveNote} id="make-new">Submit</button>
                    </div>
                    <br></br>
                    {/* <button id="clear-all">Delete Note</button> */}
                </div>
                {this.state.allNotes.map((note, key) =>
                    <DisplayNote note={note} key={key} />
                )}
            </div>
        )
    }
}
export default Notes;

