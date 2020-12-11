import React from "react";

function DisplayNote(props) {

    console.log(props);

    return (
        <div className={'note-div'} value={props.note.id}>
            <p className={'note-title'}>{props.note.title}</p>
            <p className={'note-body'}>{props.note.note}</p>
            <button>Update Note</button>
            <button onClick={props.removeNote()}>Delete Note</button>
        </div>)

}

export default DisplayNote;