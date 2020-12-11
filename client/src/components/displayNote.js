import React from "react";

function DisplayNote(props) {

    return (
        <div className={'note-div'}>
            <p className={'note-title'}>{props.note.title}</p>
            <p className={'note-body'}>{props.note.note}</p>
            <button
            onClick={props.updateNoteFunction}>Update Note</button>
            <button
            onClick={props.deleteNoteFunction}>Delete Note</button>
        </div>
    )
}

export default DisplayNote;

// conditionally render a <p> to become a <textarea> after clicking a edit button, then back to a <p> after clicking a save button. 

// have the text area "hidden" and then shown as the conditional render